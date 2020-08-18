var http = require('http')
var urllib = require('url')
var port = 10011
var data = { name: 'jifeng', company: 'taobao' }
http
  .createServer(function (req, res) {
    var params = urllib.parse(req.url, true)
    console.log(params)
    if (params.query && params.query.callback) {
      //console.log(params.query.callback);
      var str = params.query.callback + '(' + JSON.stringify(data) + ')'
      //jsonp
      setTimeout(function () {
        res.end(str)
      }, 100000)
    } else {
      res.end(JSON.stringify(data))
      //普通的json
    }
  })
  .listen(port, function () {
    console.log('server is listening on port ' + port)
  })
