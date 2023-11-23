const axios = require('axios');
const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');

async function fetchMarkdown(url, header = null) {
    try {
        console.log(url)
        const response = await axios.get(url);
        if (header) {
            return extractSection(response.data, header);
        }
        return response.data;
    } catch (error) {
        console.error("Error fetching Markdown content:", error);
        return '';
    }
}

const extractSection = (markdown, header) => {
    const lines = markdown.split('\n');
    const headerPattern = new RegExp(`^#{1,6} ${header}$`, 'i');
    const nextHeaderPattern = /^#{1,6} /;

    const headerIndex = lines.findIndex((line) => headerPattern.test(line));
    if (headerIndex === -1) {
        return null; // Header not found
    }

    const nextHeaderIndex = lines.findIndex(
        (line, index) => index > headerIndex && nextHeaderPattern.test(line),
    );

    const sectionLines =
        nextHeaderIndex !== -1
            ? lines.slice(headerIndex, nextHeaderIndex)
            : lines.slice(headerIndex);
    return sectionLines.join('\n');
};

async function processFile(filePath) {
    let content = await fs.readFile(filePath, 'utf8');
    
    // Regex to match URL and optionally a header within {{}}
    const templateRegex = /\{\{(https?:\/\/[^\|\}]+)\|?([^\}]+)?\}\}/g;
    let match;
    while ((match = templateRegex.exec(content)) !== null) {
        const [fullMatch, url, header] = match;
        const markdownContent = await fetchMarkdown(url.trim(), header ? header.trim() : null);
        content = content.replace(fullMatch, markdownContent);
    }

    const newFilePath = path.join(
        path.dirname(filePath),
        path.basename(filePath, '.mdtemplate') + '.mdx'
    );
    await fs.writeFile(newFilePath, content);
}

function processDirectory(directory) {
    glob(directory + '/**/*.mdtemplate', async (err, files) => {
        if (err) {
            console.error("Error scanning directory:", err);
            return;
        }

        for (const file of files) {
            await processFile(file);
        }
    });
}

processDirectory('../../docs'); // Replace with your directory path