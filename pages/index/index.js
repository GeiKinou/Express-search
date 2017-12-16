//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    expressNu:null, //快递单号
    expressInfo: null //快递信息
  },

  btnClick: function(){
    var thispage = this
    app.getExpressInfo(this.data.expressNu,function(data){
      thispage.setData({expressInfo: data})
    });
  },
  
  input: function(e){
    this.setData({expressNu: e.detail.value})
  }
})
