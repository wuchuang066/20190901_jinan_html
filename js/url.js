let urlArray = new Array(100);
// admin request
const REQUEST_ADMIN = "/admin/";
// file request
const REQUEST_FILE = "/file/";

// BaseUrl 
urlArray[0] = "http://localhost:8080/shopping_manage";
// 登陆url
urlArray[1] = urlArray[0] + REQUEST_ADMIN + "login";
// 上传图片
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
