const fs = require('fs');
const path = require('path');
const htmlToDocx = require('../dist/html-to-docx.umd.js'); // Import built UMD module

async function generateDocx() {
    try {
        const filePath = path.join(__dirname, 'sample.html');
        const htmlString = fs.readFileSync(filePath, 'utf-8');

        const headerHtml = '<p>Header content</p>';
        const footerHtml = '<p>Footer content</p>';

        const documentOptions = {
            orientation: 'portrait',
            margins: {
                top: 720,
            },
            title: 'Test Document',
        };

        const buffer = await htmlToDocx(htmlString, headerHtml, documentOptions, footerHtml);

        const outputPath = path.join(__dirname, 'output.docx');
        fs.writeFileSync(outputPath, buffer);

        console.log(`Document created successfully at: ${outputPath}`);
    } catch (error) {
        console.error('Error generating document:', error);
        process.exit(1);
    }
}

generateDocx();
