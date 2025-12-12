#!/bin/bash
set -e

# Change to the root directory of the project
# (Assuming this script is in test-execution/ and we want to go one level up)
cd "$(dirname "$0")/.."

echo "Building the library..."
npm run build

echo "Running the test script..."
node test-execution/test.js

# Open the generated file (located in test-execution/output.docx)
OUTPUT_FILE="test-execution/output.docx"

if command -v xdg-open > /dev/null; then
    xdg-open "$OUTPUT_FILE"
elif command -v soffice > /dev/null; then
    soffice "$OUTPUT_FILE"
else
    echo "Could not find a command to open $OUTPUT_FILE (tried xdg-open and soffice)"
fi
