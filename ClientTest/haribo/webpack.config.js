const path = require("path");

module.exports = {
    entry: "./src/index.js", // 입력 파일
    output: {
        filename: "bundle.js", // 출력 파일
        path: path.resolve(__dirname, "dist"), // 출력 폴더
    },
    mode: "development", // development 또는 production
};
