module.exports = {
  //  define entry point
  entry: "./src/script-1.js",

  // define output point
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },

  //
  module: {
    rules: [
      {
        // test any js file only
        test: /\.js$/,
        // dont use on the node_modules folder
        exclude: /(node_modules)/,
        // specify the loader
        loader: "babel-loader"
        // query: {
        //   presets: ["es2015"]
        // }
      },
      {
        // test any css file only
        test: /\.scss$/,
        // specify the style and css loader
        // style-loader - creates style nodes from JS strings
        // css-loader - translates CSS into CommonJS
        // sass-loader - compiles Sass to CSS, using Node Sass by default
        loader: "style-loader!css-loader!sass-loader"
      }
    ] //loaders
  } //module
};
