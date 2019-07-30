import {get, post } from './http'
export const apiAddress = p => post('https://www.txkuaiyou.com/waste/users/userInfo', p);
export const adminAdd = p => post('https://www.txkuaiyou.com/admin/Wasteauthority/adminAdd', p);
export const userList = p => post('https://www.txkuaiyou.com/admin/Wasteuser/userList', p);
export const orderList = p => post('https://www.txkuaiyou.com/admin/Wasteorder/orderList', p);
export const villageList = p => post('https://www.txkuaiyou.com/admin/Wastevillage/villageList', p);
export const admininvitePay = p => post('https://www.txkuaiyou.com/waste/users/admininvitePay', p);
export const goodsPublish = p => post('https://www.txkuaiyou.com/index/Publishx/goodsPublish', p);
export const tmap = p => get('https://restapi.amap.com/v3/place/text', p);
export const tmappage= p => get('https://restapi.amap.com/v3/place/around', p);
export const authority= p => post('https://www.txkuaiyou.com/admin/Wasteauthority/authority', p);
export const serviceList= p => post('https://www.txkuaiyou.com/admin/Wasteservice/serviceList', p);
export const wxcode= p => post('https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx369502e55f9d6567&redirect_uri=https://www.tiaoxinkeji.com/waste/admin?response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect', p);
export const login = p => post('https://www.txkuaiyou.com/admin/login/loginIn', p);




export const loginin = p => get('http://localhost:3000/home', p);
