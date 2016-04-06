'use strict'

const fs = require('fs')
const path = require('path')

module.exports = function(dir, extName, callback){
  fs.readdir(dir, function (err, fileNames){
    if (err) return callback(err)
      fileNames = fileNames.filter(function (file) {
      return path.extname(file) === '.' + extName
    })
    callback(null, fileNames)
  })
}