/** 显示分页按钮
 * pageButtonBody:显示分页按钮的容器(ul),
 * pageInfo 分页信息
 * selectMethod 查询当前页数据的方法  当点击分页的超链接时,需要调用的方法
 * other 点击分页按钮时需要传递的其他的参数
 */
function showPageButton1(pageButtonBody, pageInfo, selectMethod, other) {
	// 查找li 并删除
	pageButtonBody.find('li').remove();
	// 判断页面中是否需要显示分页按钮
	const pages = pageInfo.pages;
	if (pages <= 1) {
		// 不显示分页按钮
		return;
	}
	/* 上一页 */
	const pageNum = pageInfo.pageNum;
	if (pageNum == 1) {
		// 如果是第一页 设置为disabled  
		pageButtonBody.append(`<li class="page-item pagination-prev disabled"><a class="page-link" href="#"></a></li>`);
	} else {
		pageButtonBody.append(
			`<li class="page-item pagination-prev"><a class="page-link pageButton" href=${pageNum - 1}></a></li>`);
	}

	/* 普通页数 */

	const pageButtonArray = pageInfo.navigatepageNums;
	for (let [index, value] of pageButtonArray.entries()) {
		if (pageNum == index + 1) {
			pageButtonBody.append(
				`<li class="page-item active"><a class="page-link pageButton" href=${value}>${value}</a></li>`
			);
		} else {
			pageButtonBody.append(
				`<li class="page-item"><a class="page-link pageButton" href=${value}>${value}</a></li>`);
		}
	}
	/* 下一页 */
	const lastPage = pageInfo.isLastPage;
	if (lastPage) {
		pageButtonBody.append(`<li class="page-item pagination-next disabled"><a class="page-link" href="#"></a></li>`);
	} else {
		pageButtonBody.append(
			`<li class="page-item pagination-next"><a class="page-link pageButton" href=${parseInt(pageNum) + 1}></a></li>`
		);
	}

	/* 分页按钮的单击事件 */
	// 为class 属性为 pageButton 的分页超链接添加单击事件
	$(".pageButton").on('click', function () {
		// 获取a链接的页码
		const temp = $(this).attr("href");
		if (other == null) {
			selectMethod(temp);
		}else{
			selectMethod(other,temp);
		}
		// 阻止默认请求
		return false;
	})

}
/** showPageButton方法的重载 */
function showPageButton(pageButtonBody, pageInfo, selectMethod) {
	showPageButton1(pageButtonBody, pageInfo, selectMethod, null);
}