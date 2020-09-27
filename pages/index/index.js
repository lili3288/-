//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    users: [{
        name: '阿喆',
        number: '13800138000',
        address: '广东省广州市黄埔区彩频路6号',
        id: '123'
      },
      {
        name: '阿喆',
        number: '15900000000',
        address: '广东省广州市黄埔区彩频路6号',
        id: '123'
      },
      {
        name: '阿喆',
        number: '13345678901',
        address: '广东省广州市黄埔区彩频路6号',
        id: '123'
      },{
        name: '阿喆',
        number: '15900000000',
        address: '广东省广州市黄埔区彩频路6号',
        id: '123'
      },
      {
        name: '阿喆',
        number: '13345678901',
        address: '广东省广州市黄埔区彩频路6号',
        id: '123'
      },{
        name: '阿喆',
        number: '15900000000',
        address: '广东省广州市黄埔区彩频路6号',
        id: '123'
      },
      {
        name: '阿喆',
        number: '13345678901',
        address: '广东省广州市黄埔区彩频路6号',
        id: '123'
      },{
        name: '阿喆',
        number: '15900000000',
        address: '广东省广州市黄埔区彩频路6号',
        id: '123'
      },
      {
        name: '阿喆',
        number: '13345678901',
        address: '广东省广州市黄埔区彩频路6号',
        id: '123'
      },
    ]
  },

  onLoad: function () {

  },
  call(e) {
    console.log(e)
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.id,
    })
  },
  // 删除联系人
  del(e) {
    wx.showModal({
      cancelColor: 'cancelColor',
      title: '是否要删除该联系人',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({
            title: '删除成功',
          })
          // 本地删除
          var arr = this.data.users
          arr.splice(e.currentTarget.dataset.index, 1)
          this.setData({
            users: arr
          })
        }

      }
    })
  },
  // 添加到通讯录
  addPhone(e){
    console.log(e.currentTarget.dataset.index)
    var user=this.data.users[e.currentTarget.dataset.index]
    console.log(user)
   wx.addPhoneContact({
      firstName: user.name,
      mobilePhoneNumber:user.number,

    })
  },
  edit(e){
    console.log(213)
    wx.navigateTo({
      url: '/pages/edit/index?id='+e.currentTarget.dataset.id,
    })
  },
  navMap(){
    wx.navigateTo({
      url: '/pages/map/index'
    })
  }
})