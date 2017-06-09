/// <binding ProjectOpened='Watch - Development' />
"use strict";

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "./wwwroot/bundle.js"
    },
    devServer: {
        contentBase: "wwwroot",
        host: "localhost",
        port: 9000
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.(eot|ttf|woff)$/, loader: "url-loader?limit=262144" },
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]

    }
};