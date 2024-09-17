Markdown Note-taking App
========================

This is a simple note-taking application that allows users to upload and manage Markdown files, check the grammar of the notes, and render the Markdown as HTML. The app is built using TypeScript and Express.js, providing a RESTful API for file uploads, grammar checking, and note rendering.

Features
--------

-   **Grammar Check**: An API endpoint to check the grammar of a note.
-   **Save Markdown Note**: Save a note passed as Markdown text.
-   **List Notes**: Retrieve a list of saved Markdown notes.
-   **Render Markdown**: Convert a saved Markdown note to HTML and return it via an API endpoint.

Dependencies
------------

-   `express` (v4.18.x): A web framework for Node.js used to create the REST API.
-   `multer` (v1.4.x): Middleware for handling `multipart/form-data` (for file uploads).
-   `markdown-it` (v12.3.x): A Markdown parser that converts Markdown to HTML.
-   `typescript` (v4.9.x): A strongly-typed programming language that builds on JavaScript.
-   `eslint` (v8.35.x): A tool for identifying and fixing linting issues in TypeScript code.
-   `axios` (v1.4.x): A library for making HTTP requests used for grammar checking.
-   `fs` (File System module): Used to manage file I/O operations for saving notes.

Endpoints
---------

### 1\. Check Grammar

-   **Method**: `POST`
-   **URL**: `/api/grammar-check`
-   **Description**: Takes Markdown text as input and checks for grammar mistakes.
-   **Request**: `application/json`
    -   `markdownText`: Markdown content to check.
-   **Response**: JSON with grammar check results.

### 2\. Save Markdown Note

-   **Method**: `POST`
-   **URL**: `/api/save-note`
-   **Description**: Saves a note from Markdown text.
-   **Request**: `application/json`
    -   `markdownText`: The content of the Markdown note to save.
-   **Response**: JSON with a confirmation of the saved note.

### 3\. List Notes

-   **Method**: `GET`
-   **URL**: `/api/notes`
-   **Description**: Lists all saved notes.
-   **Response**: JSON array of saved note titles.

### 4\. Render Markdown as HTML

-   **Method**: `GET`
-   **URL**: `/api/render-note/:noteId`
-   **Description**: Renders the specified Markdown note as HTML.
-   **Response**: HTML string of the rendered Markdown note.

Running the Project
-------------------

### Prerequisites

Make sure you have the following installed:

-   Node.js (v16.x.x or higher)
-   npm (v8.x.x or higher)
