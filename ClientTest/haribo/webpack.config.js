const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js", // 입력 파일
    output: {
        filename: "bundle.js", // 출력 파일
        path: path.resolve(__dirname, "dist"), // 출력 폴더
    },
    mode: "development", // development 또는 production
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html", // 원본 HTML 파일 경로
            filename: "index.html", // 생성될 HTML 파일 이름
        }),
    ],
};
