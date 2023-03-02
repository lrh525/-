//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      "/images/shouYe/lunbotu7.jpg",
      "/images/shouYe/lunbotu6.jpg",
      "/images/shouYe/lunbotu3.png",
      "/images/shouYe/lunbotu2.png",
    ],
    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 3000,       //自动切换时间间隔
    duration: 1000,       //滑动动画时长
    inputShowed: false,
    inputVal: "",

  },
  //事件处理函数

  onLoad: function () {

  },
  bindSearchBook() {
    wx.navigateTo({
      url: '../search-book/search-book',
    })
  },
  morebook: function () {
    wx.navigateTo({
      url: '../morebook/morebook'
    });
  },
  morething: function () {
    wx.navigateTo({
      url: '../morething/morething'
    });
  },
 book: function () {
    wx.navigateTo({
      url: '../bookdetail/bookdetail'
    });
  },
  thing: function () {
    wx.navigateTo({
      url: '../thingdetail/thingdetail'
    });
  },
  
  
})
