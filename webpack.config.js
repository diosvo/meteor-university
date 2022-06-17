module.exports = {
  entry: "./client/main.jxs",
  output: {
    filename: "bundle.[hash].js",
  },
  resolve: {
    extensions: [".js", "jsx"],
  },
  externals: {
    react: "React",
  },
  module: {
    rules: [
      {
        test: /\.(jxs)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localsConvention: "camelCase",
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
