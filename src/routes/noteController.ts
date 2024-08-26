import { Request, Response, Router } from 'express';
import { convertMarkdownToHTML, saveMarkdownFile} from '../service/routeService'

const router = Router();



// Endpoint 1: Check Grammar
router.post('/check-grammar', (req: Request, res: Response) => {
    const { note } = req.body;
    // Logic for grammar checking goes here (e.g., call a grammar checking API)
    // For now, just return the note and a success message
    res.json({ message: 'Grammar check successful', note });
});

// Endpoint 2: Save Note as Markdown
router.post('/save-note', (req: Request, res: Response) => {
    const { markdown } = req.body;
    // Logic for saving the note as markdown (e.g., save to a database or file)
    // For now, return the received markdown
    res.json({ message: 'Note saved successfully', markdown });
});

// Endpoint 3: Render Note as HTML
router.get('/render-note', async (req: Request, res: Response) => {
    try {
        const { markdown } = req.body;

        if (!markdown) {
            return res.status(400).json({ error: 'No markdown provided.' });
        }

        // Call the service to convert Markdown and save the HTML file
        const { renderedHTML, filePath } = await convertMarkdownToHTML(markdown);

        res.download(filePath, 'markdownToHtml.html', (err) => {
            if (err) {
                console.error('Error in downloading HTML file:', err);
                res.status(500).send('Error downloading file');
            } else {
                // Send the file content as plain text or JSON after download
                res.json({
                    message: 'File downloaded successfully',
                    content: renderedHTML
                });
            }
        });

        // Respond with the rendered HTML and the path to the generated file
        res.json({
            message: 'HTML generated successfully',
            renderedHTML,
            filePath
        });

    } catch (error) {
        // Handle the error returned from the service
        res.status(500).json({ error: error.message || 'An error occurred while processing your request.' });
    }
});

export default router;
