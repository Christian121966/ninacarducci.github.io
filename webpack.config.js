const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'production', // Utilisez 'development' pour le débogage
  entry: './src/js/index.js', // Point d'entrée de votre application
  output: {
    path: path.resolve(__dirname, 'dist'), // Dossier de sortie
    filename: 'bundle.js', // Nom du fichier de sortie
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Applique cette règle aux fichiers .css
        use: [
          MiniCssExtractPlugin.loader, // Extrait le CSS dans des fichiers séparés
          'css-loader', // Traite les fichiers CSS
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.min.css', // Nom du fichier CSS de sortie
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), // Plugin pour minifier le CSS
    ],
  },
};