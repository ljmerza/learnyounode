'use strict'

const fs = require('fs')

 let file = fs.readFile(process.argv[2], function(err, data){
     if(err) throw err
     console.log(data.toString().split(/\r?\n/).length-1)
 })
