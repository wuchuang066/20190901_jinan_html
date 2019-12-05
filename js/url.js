let urlArray = new Array(100);

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

// BaseUrl 
urlArray[0] = "http://localhost:8080/shopping_manage";
// 登陆url
urlArray[1] = urlArray[0] + REQUEST_ADMIN + "login";
// 上传图片 管理员
urlArray[2] = urlArray[0] + REQUEST_FILE + "upload/1";
// 删除上传图片
urlArray[3] = urlArray[0] + REQUEST_FILE + "delete/1";
// 管理员注册
urlArray[4] = urlArray[0] + REQUEST_ADMIN + "register";
// 查询指定页数的管理员信息
urlArray[5] = urlArray[0] + REQUEST_ADMIN + "select/";
// 更改管理员启用于禁用状态 模态框修改按钮修改管理员信息
urlArray[6] = urlArray[0] + REQUEST_ADMIN + "update";
// 通过adminId 主键查询管理员信息
urlArray[7] = urlArray[0] + REQUEST_ADMIN + "selectByAdminId/";

// 通过user 查询用户信息
urlArray[8] = urlArray[0] + REQUEST_USER + "selectUsersPage/";
// 修改用户状态
urlArray[9] = urlArray[0] + REQUEST_USER + "updateUserState";

// 查询对应一级类别的二级类别的
urlArray[10] = urlArray[0] + REQUEST_LEVEL + "selectByReceiverId/";
// 分页查询商品信息
urlArray[11] = urlArray[0] + REQUEST_GOODS + "queryGoods/";
// 修改商品信息
urlArray[12] = urlArray[0] + REQUEST_GOODS + "update";
// 上传图片 商品
urlArray[13] = urlArray[0] + REQUEST_FILE + "upload/3";
// 删除上传图片 商品
urlArray[14] = urlArray[0] + REQUEST_FILE + "delete/3";
// 添加商品信息
urlArray[15] = urlArray[0] + REQUEST_GOODS + "insert";


