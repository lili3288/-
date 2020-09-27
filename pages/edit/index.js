// pages/edit/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
showImg:false,
img:''
  },

  inputImg(){
    wx.chooseImage({
      count: 1,
      success:(res)=>{
        console.log(res)
        this.setData({
          showImg:true,
          img:res.tempFilePaths[0]
        })
      }
    })
  },
  map(){
    wx.navigateTo({
      url: '/pages/map/index',
    })
  }
})