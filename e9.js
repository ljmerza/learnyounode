var http = require('http')
var results = []
var count = 0
    
function printResults () {
    for (var i = 0; i < 3; i++)
        console.log(results[i])
    }
    
function httpGet (index) {
    http.get(process.argv[2+index], function (res) {
        var theData = ''
        res.on('data',function(data){
            theData += data
        })
        res.on('end',function(){
            results[index] = theData.toString()
            count++
            if (count == 3){
                printResults()
            }
        })
        
        
    })
}
    
for (var i = 0; i < 3; i++){
    httpGet(i)
    
}
