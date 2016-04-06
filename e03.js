'use strict'

const fs = require('fs')

 let file = fs.readFileSync(process.argv[2])
 console.log(file.toString().split(/\r?\n/).length-1)