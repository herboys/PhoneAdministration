import {get, post } from './http'
export const apiAddress = p => post('https://www.txkuaiyou.com/waste/users/userInfo', p);


export const adminAdd = p => post('https://www.txkuaiyou.com/admin/Wasteauthority/adminAdd', p);

// 获取用户列表
export const userList = p => post('https://www.txkuaiyou.com/admin/Wasteuser/userList', p);
// 获取小区
export const orderList = p => post('https://www.txkuaiyou.com/admin/Wasteorder/orderList', p);
// 获取小区
export const villageList = p => post('https://www.txkuaiyou.com/admin/Wastevillage/villageList', p);
// 提现
export const admininvitePay = p => post('https://www.txkuaiyou.com/waste/users/admininvitePay', p);
// 上传图片
export const goodsPublish = p => post('https://www.txkuaiyou.com/index/Publishx/goodsPublish', p);

// 在地图中点击搜索获取列表
export const tmap = p => get('https://restapi.amap.com/v3/place/text', p);
//进入页面 获取当前周边的内容
export const tmappage= p => get('https://restapi.amap.com/v3/place/around', p);
//获取一级菜单
export const authority= p => post('https://www.txkuaiyou.com/admin/Wasteauthority/authority', p);
//获取我的服务人员
export const serviceList= p => post('https://www.txkuaiyou.com/admin/Wasteservice/serviceList', p);

// 微信获取code
export const wxcode= p => post('https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx369502e55f9d6567&redirect_uri=https://www.tiaoxinkeji.com/waste/admin?response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect', p);
//通过code 获取用户信息
export const login = p => post('https://www.txkuaiyou.com/admin/login/loginIn', p);
