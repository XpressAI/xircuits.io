const axios = require('axios');
const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');

async function fetchMarkdown(url, header = null) {
    try {
        console.log(`Processing URL: ${url} with header: ${header || 'None'}`);
        const response = await axios.get(url);
        if (header) {
            return extractSection(response.data, header);
        }
        return response.data;
    } catch (error) {
        console.error(`Error fetching Markdown content from ${url}:`, error.message);
        await fs.appendFile('errorlog.txt', `Error fetching Markdown content from ${url}: ${error.message}\n`);
        return '';
    }
}

const extractSection = (markdown, header) => {
    const lines = markdown.split('\n');
    const headerPattern = new RegExp(`^#{1,6}\\s*${header.trim()}\\s*$`, 'i');

    const headerIndex = lines.findIndex((line) => headerPattern.test(line));
    if (headerIndex === -1) {
        console.error(`Header "${header}" not found in the document.`);
        return null;
    }

    const currentHeaderLevel = (lines[headerIndex].match(/^#*/) || [''])[0].length;
    const sameOrHigherHeaderPattern = new RegExp(`^#{1,${currentHeaderLevel}}(?![#])\\s`);

    const nextHeaderIndex = lines.findIndex(
        (line, index) => index > headerIndex && sameOrHigherHeaderPattern.test(line),
    );

    const sectionLines =
        nextHeaderIndex !== -1
            ? lines.slice(headerIndex, nextHeaderIndex)
            : lines.slice(headerIndex);

    return sectionLines.join('\n');
};

async function processFile(filePath) {
    console.log(`Processing file: ${filePath}`);
    let content = await fs.readFile(filePath, 'utf8');
    
    const templateRegex = /\{\{(https?:\/\/[^\|\}]+)\|?([^\}]+)?\}\}/g;
    let match;
    while ((match = templateRegex.exec(content)) !== null) {
        const [fullMatch, url, header] = match;
        const markdownContent = await fetchMarkdown(url.trim(), header ? header.trim() : null);
        if (!markdownContent) {
            await fs.appendFile('errorlog.txt', `Error: Header "${header}" not found in ${url}.\n`);
        }
        content = content.replace(fullMatch, markdownContent);
    }

    const newFilePath = path.join(
        path.dirname(filePath),
        path.basename(filePath, '.mdtemplate') + '.mdx'
    );
    console.log(`Saving as: ${newFilePath}\n`);
    await fs.writeFile(newFilePath, content);
}

function processDirectory(directory) {
    glob(directory + '/**/*.mdtemplate', async (err, files) => {
        if (err) {
            console.error(`Error scanning directory ${directory}:`, err.message);
            return;
        }

        for (const file of files) {
            await processFile(file);
        }
    });
}

processDirectory('docs'); // Replace with your directory path
