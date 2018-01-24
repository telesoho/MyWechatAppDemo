// pages/launchPage/launchPage.js

const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log('launchPage onLoad:' + (new Date()).getTime())
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log('launchPage onReady:' + (new Date()).getTime())
        app.loginCallback = function () {
            console.log('page callback')
        }
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log('launchPage onShow:' + (new Date()).getTime())
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
})