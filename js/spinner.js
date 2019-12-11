/**
 * 用于向一级类别和二级类别下拉列表中填充数据
 * receiverSelect  一级类别的下拉列表
 */
// 一级类别中添加数据
function addReceiverSpinner(receiverSelect) {
    const receivers = JSON.parse(window.sessionStorage.getItem("receivers"));
    if (receivers == null) return;
    for (let receiver of receivers) {
        const option = $(`<option class="select-item" value="${receiver.receiverId}">${receiver.receiverName}</option>`);
        receiverSelect.append(option);
    }
}

/**
 * 根据一级类别 显示二级类别的信息
 * receiverSelect 一级类别的下拉列表
 * levelSelect 二级类别的下拉列表
 * levelValue 二级类别默认选项的值
 */
function addLevel(receiverSelect, levelSelect, levelValue) {
    // 获得一级类别的编号
    const receiverId = receiverSelect.val();
    if(receiverId == -1) return;
    const url = receiverMsgQueryUrl + receiverId;
    // 先移除 所有的option 否则会多option
    levelSelect.find('.select-item').remove();
    $.get(url, null, (result) => {
        if (result.code == 0) {
            const levelList = result.resultData.levels;
            for (let level of levelList) {
                // 向二级类别的下拉列表中插入节点
                levelSelect.append(`<option class="select-item" value="${level.levelId}">${level.levelName}</option>`);
            }
            // 如果二级类别不等于空 选中当前项
            if(levelValue !=null){
                levelSelect.val(levelValue);
            }
        } else {
            swal("失败", result.message, "error");
        }
    })

}