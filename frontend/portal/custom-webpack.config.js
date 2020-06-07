const webpack = require('webpack')

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                ENV: JSON.stringify(process.env.ENV)
            }
        })
    ]
}