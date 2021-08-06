'use strict'

const serve = require('browser-sync')
const proxy = require('http-proxy-middleware')


// browser sync settings
serve({
  port: 3000,
  open: true,
  files: [
    'src/**/*',
    {
      match: ['**/*.html']
    }
  ],
  reloadDelay: 3000,
  proxy: {
    target: 'dev.site',
    middleware: bundler.middleware()
  }
  ui: false
})


