$(function(){

	// 슬릭 추가 및 속성 변경
	/* 직접 작성할 공간 */
	$(".main_visual_slide").slick({
		dots: true,
	})


	// 탭 메뉴 숨기기 및 활성화
	$("#notice_tab_wrap h4 a").on("click", tabmenu);
	function tabmenu(e) {
		/* 직접 작성할 공간 */
		e.preventDefault();
		const $ts = $(this)
		const $next = $ts.parent().next()
		if($next.is(":hidden")) {
			$("#notice_tab_wrap h4 a").removeClass("on")
			$ts.addClass("on")

			$("#notice_tab_wrap > div:visible").hide()
			$next.show()
		}
	}

});