//app.js
App({
  
  getExpressInfo: function (nu,cb) {
    wx.request({
      url: 'http://apis.baidu.com/kuaidicom/express_api/express_api?muti=0&order=desc&nu='+nu, 
      data: {
        x: '',
        y: ''
      },
      header: {
        'apikey': '9b4dd382ab9b2ed0f973186b61dbd47f' 
      },
      success: function (res) {
        //console.log(res.data)
        cb(res.data);
      }
    })
  }
})