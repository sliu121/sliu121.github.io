$.extend({
	yz:function(txt){
			//创建一个遮罩层  加class overlay
			var div=$("<div class=overlay></div>");
			//将遮罩层 添加到body
			div.appendTo($("body"));
			var div=$("<div class=openDialog></div>");
			div.appendTo($(".overlay"));
			
			var div=$("<div class=top></div>");
			div.appendTo($(".openDialog"));
		/*	var h1=$("<h1>提示</h1>");
			h1.appendTo($(".top"));
			var p=$("<p></p>");
			p.text(txt);
			p.appendTo($(".openDialog"));
			var btn=$("<button class=btn>确定</button>");
			btn.click(function(){
				$(".overlay").hide();
			});
			btn.appendTo($(".openDialog"))*/
	}
});