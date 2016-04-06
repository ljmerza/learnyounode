'use strict'

let dirFilter = require('./e06.2.js')
const dir = process.argv[2]
const extname = process.argv[3]

dirFilter(dir, extname, function (err, list) {
  if (err) return console.error(err)
  list.forEach(function(file){
    console.log(file)
  })
})