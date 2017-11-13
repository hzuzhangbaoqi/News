var express = require("express");
var axios = require('axios');
var app = express();
var router = express.Router();
router.get('/getList', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  axios.get("https://3g.163.com/touch/jsonp/sy/recommend/0-10.html?hasad=1&offset=0&size=10&callback=syrec0", {
    headers: {
      host: "3g.163.com",
      referer: "http://3g.163.com/touch/all?dataversion=A&uversion=A&version=v_standard"
    }
  }).then(function (data) {
    console.log(data);
    res.json(data);
  })
})
app.use('/api', router);
app.listen(8080);
