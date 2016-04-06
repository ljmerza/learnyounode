'use strict'

const fs = require('fs')
const path = require('path')

 let file = fs.readdir(process.argv[2], function(err, data){
     if(err) throw err 
     data.forEach(function(file){
         if(process.argv[3]){
             if('.' + process.argv[3] === path.extname(file)){
                 console.log(file)
             }
         }
         else{
             console.log(file)
         }
     })
 })
