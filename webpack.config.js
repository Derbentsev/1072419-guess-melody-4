const path = require(`path`);
const webpack = require(`webpack`);

module.exports = (env) => {
  return {
    mode: env === `dev` ? `development` : `production`,
    entry: `./src/index.jsx`,
    output: {
      filename: `bundle.js`,
      path: path.join(__dirname, `public`)
    },
    devServer: {
      contentBase: path.join(__dirname, `public`),
      open: true,
      inline: true,
      port: 1337,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: `babel-loader`,
          },
        }
      ],
    },
    devtool: `source-map`,
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, `./src/components/`),
        '@consts': path.resolve(__dirname, `./src/consts/`),
        '@mocks': path.resolve(__dirname, `./src/mocks/`),
        '@hocs': path.resolve(__dirname, `./src/hocs/`),
        '@utils': path.resolve(__dirname, `./src/utils/`),
        '@reducer': path.resolve(__dirname, `./src/reducer/`),
        '@history': path.resolve(__dirname, `./src/history/`),
      },
      modules: [`node_modules`, path.resolve(path.join(__dirname, `public`))],
      extensions: [`.js`, `.jsx`, `.ts`, `.tsx`, `.webm`]
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: `react`,
        PropTypes: `prop-types`,
        Switch: [`react-router-dom`, `Switch`],
        Route: [`react-router-dom`, `Route`],
        Router: [`react-router-dom`, `Router`],
        Link: [`react-router-dom`, `Link`],
        BrowserRouter: [`react-router-dom`, `BrowserRouter`],
      }),
    ]
  };
};
