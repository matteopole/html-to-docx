const fs = require('fs');
const path = require('path');
const htmlToDocx = require('../dist/html-to-docx.umd.js');

const htmlString = fs.readFileSync(path.resolve(__dirname, 'sample.html'), 'utf-8');

(async () => {
    const fileBuffer = await htmlToDocx(htmlString, null, {
        table: { row: { cantSplit: true } },
        footer: true,
        pageNumber: true,
        margins: { top: 1440, right: 1800, bottom: 1440, left: 1800 }, // Standard margins (1in V, 1.25in H)
        pageSize: { width: 11906, height: 16838 }, // A4 size
    });

    fs.writeFileSync(path.resolve(__dirname, 'output.docx'), fileBuffer);
    console.log('Document created successfully at:', path.resolve(__dirname, 'output.docx'));
})();
