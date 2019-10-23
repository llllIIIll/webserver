var http = require('http')

var server = http.createServer(function(req, res){
    res.end('hi welcome to my homepage!! ljs')
}).listen(8080, function(){
    console.log('8080포트에서 서버 실행 중')
})
