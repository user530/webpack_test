const path = require('path');

module.exports = {
    // Entry point
    entry: './src/index.js',
    // Output config
    output: {
        // Bundled file and path
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
}