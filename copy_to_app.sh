#!/bin/bash
set -e # Exit immediately if a command exits with a non-zero status

# Target directory relative to the current folder
# Adjusted to 'vendor' based on your previous edit
TARGET_DIR="../materialgen/vendor/html-to-docx"

echo "Creating target directory: $TARGET_DIR"
# Create the directory structure. This is required before cp can copy into it.
mkdir -p "$TARGET_DIR"

echo "Copying files..."
# Copy the entry point and types
cp index.js "$TARGET_DIR/"
cp index.d.ts "$TARGET_DIR/"

# Copy the source code directory
cp -r src "$TARGET_DIR/"

echo "Files copied successfully to $TARGET_DIR"
