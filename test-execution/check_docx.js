const fs = require('fs');
const path = require('path');
const JSZip = require('jszip');

(async () => {
    try {
        const content = fs.readFileSync(path.resolve(__dirname, 'repro.docx'));
        const zip = await JSZip.loadAsync(content);
        const docXml = await zip.file('word/document.xml').async('string');

        // Count tblGrid occurrences. Note: standard tag is <w:tblGrid>
        // But might have namespaces.
        const count = (docXml.match(/w:tblGrid/g) || []).length;
        // <w:tblGrid ...> is usually how it appears.

        console.log('tblGrid count:', count);

        if (count > 1) {
            console.log('Bug Confirmed: Multiple tblGrid elements found for a single table.');
            // Print a snippet to be sure
            const index = docXml.indexOf('<w:tbl>');
            if (index !== -1) {
                console.log(docXml.substring(index, index + 1000));
            }

        } else {
            console.log('Bug Not Found: Single tblGrid element found.');
        }
    } catch (e) {
        console.error(e);
    }
})();
