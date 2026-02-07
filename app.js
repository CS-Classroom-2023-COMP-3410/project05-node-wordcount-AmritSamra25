// Import required modules
// fs is used to read files from the file system
// chalk is used to color text output in the terminal
const fs = require('fs');
const chalk = require('chalk');

/**
 * Synchronously reads the content of 'declaration.txt'.
 * Uses readFileSync so the file is fully read before continuing.
 * @returns {string} The full text content of the file.
 */
function readFileContent() {
    // Read declaration.txt as a UTF-8 encoded string
    return fs.readFileSync('declaration.txt', 'utf8');
}

/**
 * Counts how many times each word appears in the content.
 * @param {string} content The file content.
 * @returns {Object} An object mapping words to their frequency.
 */
function getWordCounts(content) {
    const wordCount = {};

    // Convert to lowercase, split on non-word characters,
    // and remove empty entries
    const words = content
        .toLowerCase()
        .split(/\W+/)
        .filter(Boolean);

    // Count each word’s occurrences
    for (const word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

    return wordCount;
}

/**
 * Colors a word based on how often it appears.
 * @param {string} word The word to color.
 * @param {number} count The word’s frequency.
 * @returns {string} The word wrapped in a chalk color.
 */
function colorWord(word, count) {
    // Blue for words that appear once
    if (count === 1) {
        return chalk.blue(word);
    }
    // Green for words that appear 2–5 times
    else if (count >= 2 && count <= 5) {
        return chalk.green(word);
    }
    // Red for words that appear more than 5 times
    else {
        return chalk.red(word);
    }
}

/**
 * Prints the first 15 lines of the content,
 * coloring each word based on its frequency.
 * @param {string} content The file content.
 * @param {Object} wordCount The word frequency map.
 */
function printColoredLines(content, wordCount) {
    // Split content into lines and take only the first 15
    const lines = content.split('\n').slice(0, 15);

    for (const line of lines) {
        // Split line into words, color each word,
        // then join them back into a single string
        const coloredLine =
            line
                .split(/\W+/)
                .filter(Boolean)
                .map(word => colorWord(word, wordCount[word.toLowerCase()]))
                .join(' ') + ' '; // Trailing space required for test output

        // Print the colored line to the console
        console.log(coloredLine);
    }
}

/**
 * Main function that coordinates the workflow:
 * read file → count words → print colored output
 */
function processFile() {
    const content = readFileContent();
    const wordCount = getWordCounts(content);
    printColoredLines(content, wordCount);
}

// Only execute processFile when this file is run directly,
// not when it is imported by the test suite
if (require.main === module) {
    processFile();
}

// Export functions so Jest can test them individually
module.exports = {
    readFileContent,
    getWordCounts,
    colorWord,
    printColoredLines
};
