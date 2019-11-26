/**
 * 判断传递参数是否为数字
 * 1. 必须大于0
 * 2.正确返回true 否则返回false
 */
function isPrice(val) {
	var reg = /^([1-9][0-9]*|0\.[0-9]{1,2}|[1-9][0-9]*\.[0-9]{1,2})$/;
	// if (!reg.test(val)) {
	// 	//值合法 返回true
	// 	return false;
	// } else {
	// 	return true;
	// }
	return reg.test(val);
};
