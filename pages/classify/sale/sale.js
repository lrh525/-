// pages/classify/sale/sale.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    countDownList:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDate();
  },
  timeFormat:function(n) {//自定义抢购时间
    return n >= 0 && n < 10 ? '0' + n : '' + n;
  },
  getDate: function () {
    var obj = null;
    var countDownArr = [];
    var oDate = new Date(); //获取现在日期对象
    var oldTime = oDate.getTime(); //现在距离1970年的毫秒数
    var newDate = new Date('2023/3/5 00:00:00'); //获取指定日期对象
    var newTime = newDate.getTime(); //2018年距离1970年的毫秒数
    var second = Math.floor((newTime - oldTime) / 1000); //未来时间距离现在的秒数
    var day = Math.floor(second / 86400); //整数部分代表的是天；一天有24*60*60=86400秒 ；
    second = second % 86400; //余数代表剩下的秒数；
    var hour = Math.floor(second / 3600); //整数部分代表小时；
    second %= 3600; //余数代表 剩下的秒数；
    var minute = Math.floor(second / 60);
    second %= 60;
    obj = {
      day: this.timeFormat(day),
      hou: this.timeFormat(hour),
      min: this.timeFormat(minute),
      sec: this.timeFormat(second)
    } 
    countDownArr.push(obj);
    this.setData({
      countDownList: countDownArr
    })
    setInterval(this.getDate, 1000); //
},
 
 
 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})