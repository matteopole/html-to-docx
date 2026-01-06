const fs = require('fs');
const path = require('path');
const htmlToDocx = require('../dist/html-to-docx.umd.js');

const htmlString = fs.readFileSync(path.resolve(__dirname, 'repro.html'), 'utf-8');

(async () => {
    const fileBuffer = await htmlToDocx(htmlString, null, {
        table: { row: { cantSplit: true } },
        footer: true,
        pageNumber: true,
    });

    fs.writeFileSync(path.resolve(__dirname, 'repro.docx'), fileBuffer);
    console.log('Repro document created.');
})();
