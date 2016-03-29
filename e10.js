var net = require('net')

var server = net.createServer(function(res){
    var date = new Date()
    var theDate = date.getFullYear() + '-' + pad((date.getMonth()+1).toString()) + '-'+ pad(date.getDate().toString()) 
    + ' ' + pad(date.getUTCHours().toString()) + ':' + pad(date.getUTCMinutes().toString()) + '\n'
    res.end(theDate)
    console.log('')
})

server.listen(process.argv[2])

function pad(theStr){
    if(theStr.length === 1){
        return '0' + theStr
    }
    else{
        return theStr
    }
}