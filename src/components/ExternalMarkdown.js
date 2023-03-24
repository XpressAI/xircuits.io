import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import gfm from 'remark-gfm';

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

const ExternalMarkdown = ({ url, header, placeholder }) => {
  const [markdownContent, setMarkdownContent] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setError(true);
          return;
        }
        const text = await response.text();

        if (header) {
          const section = extractSection(text, header);
          if (section === null) {
            setError(true);
          } else {
            setMarkdownContent(section);
          }
        } else {
          setMarkdownContent(text);
        }
      } catch (error) {
        console.error('Error fetching external markdown:', error);
        setError(true);
      }
    };

    fetchMarkdown();
  }, [url, header]);

  if (error && placeholder) {
    return <div>{placeholder}</div>;
  }

  return (
    <ReactMarkdown remarkPlugins={[gfm]} rehypePlugins={[rehypeRaw]}>
      {markdownContent}
    </ReactMarkdown>
  );
};

export default ExternalMarkdown;
