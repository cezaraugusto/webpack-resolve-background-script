
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const WebpackResolveBackgroundScript = require('../module')

const outputPath = path.resolve(__dirname, './testExtension/dist')
const outputManifestPath = path.join(outputPath, 'manifest.json')

const config = {
  mode: 'development',
  entry: {
    background: path.resolve(__dirname, './testExtension/src/background.js')
  },
  output: {
    path: outputPath
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './testExtension/manifest.json'),
          to: path.join(outputPath, 'manifest.json')
        }
      ]
    }),
    // new WebpackResolveBackgroundScript(outputManifestPath)
  ]
}

module.exports = {
  outputManifestPath,
  config
}
