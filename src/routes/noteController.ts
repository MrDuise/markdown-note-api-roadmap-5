import { Request, Response, Router } from 'express';
import { convertMarkdownToHTML, saveMarkdownFile} from '../service/routeService'

const noteRoute = Router();



// Endpoint 1: Check Grammar
noteRoute.post('/check-grammar', (req: Request, res: Response) => {
    const { note } = req.body;
    // Logic for grammar checking goes here (e.g., call a grammar checking API)
    // For now, just return the note and a success message
    res.json({ message: 'Grammar check successful', note });
});

// Endpoint 2: Save Note as Markdown
noteRoute.post('/save-note', async (req: Request, res: Response) => {
    const { markdown } = req.body;
    const filePath = await saveMarkdownFile(markdown, "newMarkDownFile")
    // Logic for saving the note as markdown (e.g., save to a database or file)
    // For now, return the received markdown
    res.download(filePath, 'newMarkDown.md', (err) => {
        if (err) {
            console.error('Error in downloading markdown file:', err);
            res.status(500).send('Error downloading file');
        } 
    });
   
});

// Endpoint 3: Render Note as HTML
noteRoute.get('/render-note', async (req: Request, res: Response) => {
    
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
            } 
        });
    
});

export default noteRoute;
