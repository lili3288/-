// pages/map/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
marker:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  location(e){
console.log(e)
this.setData({
  marker:[{
    id:'2131',
    latitude:e.detail.latitude,
    longitude:e.detail.longitude,
    iconPath:'../../images/dingwei.png',
    width:'40',
    height:40
  }]
})
  }
})