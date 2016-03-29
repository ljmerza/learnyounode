var mod = require('./program.js')
mod(process.argv[2],process.argv[3], function(err,list){
    if(err){console.log('Error:'+err)}
    
    list.forEach(function(val){ 
        console.log(val) 
        
    })
})
