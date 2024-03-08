const path = require("path");

module.exports = {
  entry: "./index.jsx", // Adjust this path to your library's entry point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "dfsauth_client",
    library: "dfsauth_client",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: ["node_modules", path.resolve(__dirname, "src")],
    fallback: { crypto: require.resolve("crypto-browserify") },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
    axios: "axios",
    jsonwebtoken: "jsonwebtoken",
  },
};
