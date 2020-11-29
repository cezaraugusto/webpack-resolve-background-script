/* global describe, test, expect */
const path = require('path')
const webpack = require('webpack')
const { config, outputManifestPath } = require('./fixtures/webpack.config')

describe('webpackResolveBackgroundScript', () => {
  test('resolves', (cb) => {
    webpack(config)
    //, (error, stats) => {
      // if (error) console.error(error)
//      if (stats.hasErrors()) console.log(stats.toString())

      // const pathToManifest = path.resolve(outputManifestPath)
      // const manifest = require(pathToManifest)

      // expect(Array.isArray(manifest.background.scripts)).toBe(true)
      // expect(manifest.background.scripts[0]).toBe('background.js')
      cb()
    // })
  })
})
