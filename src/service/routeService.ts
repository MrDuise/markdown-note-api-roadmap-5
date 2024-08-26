import fs from 'fs/promises';
import path from 'path';
import MarkdownIt from 'markdown-it';


const grammerCheck = function () {

}



const markdownParser = new MarkdownIt();

//takes a markdown string and turns into a html file
export const convertMarkdownToHTML = async (markdown: string): Promise<{ renderedHTML: string, filePath: string }> => {
    try {
        const renderedHTML = markdownParser.render(markdown);

        // Define the HTML file path
        const filePath = path.join(__dirname, '../generatedNote.html');
        const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Rendered Markdown</title>
        </head>
        <body>
            ${renderedHTML}
        </body>
        </html>
        `;
        await fs.writeFile(filePath, htmlContent);

        // Return the HTML content and file path
        return { renderedHTML, filePath };

    } catch (error) {
        throw new Error(`Error writing the HTML file. ${error}`)
    }
};


export const saveMarkdownFile = async (markdown: string, fileName: string): Promise<void> => {
    try {
        // Define the file path
        const filePath = path.join(__dirname, fileName);

        // Write the Markdown text to the file
        await fs.writeFile(filePath, markdown, 'utf-8');

        console.log(`Markdown file saved to ${filePath}`);
    } catch (error) {
        console.error('Failed to save Markdown file:', error);
        throw new Error('Error saving Markdown file.');
    }
};