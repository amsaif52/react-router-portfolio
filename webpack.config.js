const path = require("path");

module.exports = {
  entry: "./index.js",
  output:{
    path: path.resolve(__dirname,'dist'),
    filename: "bundle.js"
  },
  module:{
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use:[
          {
            loader: "babel-loader",
            options:{
              babelrc: false,
              presets: ['react',['es2015',{modules: false}]]
            }
          }
        ]
      }
    ]
  }
}
