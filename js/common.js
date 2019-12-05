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
}

/**
 *  @Description:当名称过长时，显示部分名称...
 *  @Param nameValue : 需要精简的名字
 *  @Param length： 需要的长度
 */
function rename(nameValue, length) {
    // 如果需要精简的字符串长度小于需要的长度 直接返回
    if (nameValue.length <= length) return nameValue;
	return nameValue.toString().substring(0,length)+ "...";

}

/**
 *  转换数字为金钱格式
 * @param val
 * @returns {string}
 */
function formatNumber(val){
    val = val.toString();
    var reg1 = /^[0-9]+$/;
    var reg2 = /^[0-9]+\.[0-9]+$/;

    //用于保存最后的结束
    var result = "";
    //用于保存最后整数部分的结果
    var result1 = "";
    //用于保存最后小数部分的结果
    var result2 = "";
    var index = val.indexOf(".");
    //用于保存未处理的整数部分
    var temp1 = "";
    //处理小数部分
    if(reg1.test(val)){
        result2 = ".00";
        temp1 = val;
    }else if(reg2.test(val)){
        var temp = val.substring(index);
        if(temp.length < 3){
            temp = temp + "00";
        }
        temp = temp.substring(0,3);
        result2 = temp;
        temp1 = val.substring(0,index);
    }else{
        return "error";
    }
    //处理整数部分
    var count = 0;
    if(temp1.length > 3){
        for(var i = temp1.length - 1 ; i >=0 ; i--){
            result1 = temp1[i] + result1;
            count++;
            if(count == 3 && i != 0){
                result1 = "," + result1;
                count = 0;
            }
        }
    }else{
        result1 = temp1;
    }

    result = result1 + result2;

    return result;
}
