// BaseUrl
const URLBASE = "http://localhost:8080/shopping_manage";

// admin request
const REQUEST_ADMIN = "/admin/";
// file request
const REQUEST_FILE = "/file/";
// user request
const REQUEST_USER = "/user/";
// level request
const REQUEST_LEVEL = "/level/";
// goods request
const REQUEST_GOODS = "/goods/";
// orders
const REQUEST_ORDERS = "/orders/";
// orderDetail
const REQUEST_ORDER_DETAILS = "/orderDetail/";
// receiver
const REQURST_RECEIVER = "/receiver/";


// 登陆url
const loginAdminUrl = URLBASE + REQUEST_ADMIN + "login";
// 上传图片 管理员
const uploadAdminImgUrl= URLBASE + REQUEST_FILE + "upload/1";
// 删除上传图片
const adminDeleteImgUrl = URLBASE + REQUEST_FILE + "delete/1";
// 管理员注册
const adminRegisterUrl = URLBASE + REQUEST_ADMIN + "register";
// 查询指定页数的管理员信息
const adminMsgQueryUrl = URLBASE + REQUEST_ADMIN + "select/";
// 更改管理员启用于禁用状态 模态框修改按钮修改管理员信息
const adminUpdateMsgUrl = URLBASE + REQUEST_ADMIN + "update";
// 通过adminId 主键查询管理员信息
const adminMsgQueryByIdUrl = URLBASE + REQUEST_ADMIN + "selectByAdminId/";
// 通过user 查询用户信息
const userMsgQueryUrl= URLBASE + REQUEST_USER + "selectUsersPage/";
// 修改用户状态
const userMsgUpdateUrl= URLBASE + REQUEST_USER + "updateUserState";
// 查询对应一级类别的二级类别的
const receiverMsgQueryUrl = URLBASE + REQUEST_LEVEL + "selectByReceiverId/";
// 分页查询商品信息
const goodsMsgQueryUrl = URLBASE + REQUEST_GOODS + "queryGoods/";
// 修改商品信息
const goodsMsgUpdateUrl = URLBASE + REQUEST_GOODS + "update";
// 上传图片 商品
const uploadGoodsImgUrl = URLBASE + REQUEST_FILE + "upload/3";
// 删除上传图片 商品
const deleteGoodsImgUrl = URLBASE + REQUEST_FILE + "delete/3";
// 添加商品信息
const addGoodsMsgUrl = URLBASE + REQUEST_GOODS + "insert";
// 订单分页查询
const orderMsgQueryUrl = URLBASE + REQUEST_ORDERS + "select/";

// 根据订单编号查询订单明细查
const orderDetailMsgQueryUrl = URLBASE+REQUEST_ORDER_DETAILS+"selectByOrderId/";
// 查询统计商品数据
const groupGoodsDataUrl = URLBASE+REQURST_RECEIVER+"selectGroup";


