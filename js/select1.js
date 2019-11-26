/**
 * 用于向一级类别和二级类别下拉列表中填充数据
 * receiverSelect  一级类别的下拉列表
 */
// 一级类别中添加数据
function addReceiverSpinner(receiverSelect){
	const receivers = JSON.parse(window.sessionStorage.getItem("receivers"));
	if(receivers==null)return;
	for (let receiver of receivers) {
		const option = $(`<option class="select-item" value="${receiver.receiverId}">${receiver.receiverName}</option>`);
		receiverSelect.append(option);
	}
}