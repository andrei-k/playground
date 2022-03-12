const path = require('path')

module.exports = {
    entry: './assets/scripts/app.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'assets')
    },
    mode: 'development',
    watch: true
}