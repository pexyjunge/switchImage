$function(){}
	$("ol li").mouseover(function(e){
		$(this).attr('class','current');//将当前
		$(this).siblings().attr('class','');
		var num2=4;
		num2++;
		var num=$(this).index();
		$('ul li').eq(num).css('z-index',num2);
		$('ul li').eq(num).css('left','600px');
		$('ul li').eq(num).animate({left:'0'},50);
		
	})
}