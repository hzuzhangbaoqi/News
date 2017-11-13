var express = require("express");
var axios = require('axios');
var app = express();
var router = express.Router();
//推荐
router.get('/getcommend', function (req, res) {
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



//新闻
router.get('/getlistnews', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  axios.get("http://3g.163.com/touch/reconstruct/article/list/BCR1UC1Qwangning/0-10.html", {
    headers: {
      host: "3g.163.com",
      referer: "http://3g.163.com/touch/news/subchannel/society?dataversion=A&uversion=A&version=v_standard"
    }
  }).then(function (data) {
    console.log(data);
    res.json(data);
  })
})







//娱乐
router.get('/getplay', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  axios.get("http://3g.163.com/touch/reconstruct/article/list/BA10TA81wangning/0-10.html", {
    headers: {
      host: "3g.163.com",
      referer: "http://3g.163.com/touch/ent/subchannel/all?dataversion=A&uversion=A&version=v_standard"
    }
  }).then(function (data) {
    console.log(data);
    res.json(data);
  })
})



//图片轮播图
router.get('/getImagebanner', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  axios.get("http://3g.163.com/photocenter/api/list/0001/00AP0001,3R710001,4T8E0001/0/3/cache_00AP_3R71_4T8E_top.json", {
    headers: {
      host: "3g.163.com",
      referer: "http://3g.163.com/touch/photo/subchannel/all?dataversion=A&uversion=A&version=v_standard"
    }
  }).then(function (data) {
    console.log(data);
    res.json(data);
  })
})

//图片页面数据
router.get('/getImage', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  axios.get("http://3g.163.com/photocenter/api/list/0001/00AN0001,00AO0001/0/20/cache_00AN_00AO_.json", {
    headers: {
      host: "3g.163.com",
      referer: "http://3g.163.com/touch/photo/subchannel/all?dataversion=A&uversion=A&version=v_standard"
    }
  }).then(function (data) {
    console.log(data);
    res.json(data);
  })
})




//汽车
router.get('/getCar', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  axios.get("http://3g.163.com/touch/reconstruct/article/list/BA8DOPCSwangning/0-10.html", {
    headers: {
      host: "3g.163.com",
      referer: "http://3g.163.com/touch/auto?dataversion=A&uversion=A&version=v_standard"
    }
  }).then(function (data) {
    console.log(data);
    res.json(data);
  })
})



//视频
router.get('/getVideo', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  axios.get("https://3g.163.com/wap/special/video_tuijian/?callback=callback_video", {
    headers: {
      host: "3g.163.com",
      referer: "http://3g.163.com/touch/video/subchannel/all?dataversion=A&uversion=A&version=v_standard"
    }
  }).then(function (data) {
    console.log(data);
    res.json(data);
  })
})


//本地
router.get('/getPlace', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  axios.get("http://3g.163.com/touch/jsonp/article/local/%E6%B5%99%E6%B1%9F%E7%9C%81_%E5%8F%B0%E5%B7%9E%E5%B8%82/0-10.html", {
    headers: {
      host: "3g.163.com",
      referer: "http://3g.163.com/touch/local?dataversion=A&uversion=A&version=v_standard"
    }
  }).then(function (data) {
    console.log(data);
    res.json(data);
  })
})




//公开课
router.get('/getClass', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  axios.get("https://c.open.163.com/mob/classify/playlist.do?id=5&type=5&cursor=0&pagesize=10&callback=_jsonprgz9hw8psx", {
    headers: {
      host: "c.open.163.com",
      referer: "https://m.open.163.com/category/speech"
    }
  }).then(function (data) {
    console.log(data);
    res.json(data);
  })
})

//教育
router.get('/getEdu', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  axios.get("http://3g.163.com/touch/reconstruct/article/list/BA8FF5PRwangning/0-10.html", {
    headers: {
      host: "3g.163.com",
      referer: "http://3g.163.com/touch/edu/subchannel/all?dataversion=A&uversion=A&version=v_standard"
    }
  }).then(function (data) {
    console.log(data);
    res.json(data);
  })
})




app.use('/api', router);
app.listen(8080);
