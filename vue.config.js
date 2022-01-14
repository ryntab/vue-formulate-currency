module.exports = {
    configureWebpack: {
        output: {
            filename: 'index.js',
            libraryTarget: "umd",
        },
        externals: {
            'vue-currency-input': 'commonjs2 vue-currency-input'
        },
        mode: 'production',
    },
}