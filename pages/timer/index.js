var utils = require("../../utils/util.js");


Page({

  //初始化数据
  data: {
    currentDate: utils.formatNormalDate(new Date()),
    currentTime: utils.formatCurrentTime(new Date())
  },

  //生命周期函数

  onShow: function() {
    var self = this;
    setInterval(function() {
      self.setData({
        currentTime: utils.formatCurrentTime(new Date())
      })
    }, 1000)
  },

  //自定义方法
  navigationToMapPage: function(event) {
    wx.navigateTo({
      url: '../map/index',
    })
  },
})