;(function($){
	$.fn.dialog=function(opt){
		//扩展插件
		var set=$.extend({},{
			content:"内容",
			btns:null,
			callback:function(){
				null
			}
		},opt)
		//为了链式连接
		return $(this).each(function(){
			//创建html元素
			var mark=$('<mark class="mark"></mark>'),
				dialog=$('<div class="dialog"><div class="dia_top"></div><div class="btns"></div></div>')
			$(this).prepend(mark,dialog)
			var dia_top=$(this).find('.dia_top'),
				btn=$(this).find('.btns'),
				str=''
			//添加内容,按钮
			dia_top.html(opt.content)
			$.each(opt.btns,function(k,val){
				str+="<span>"+val+"</span>"
			})
			btn.html(str)
			//按钮触发事件
			$(btn).on('click','span',function(){
					var ind=$(this).index()
					//console.log(ind)
					if(ind==0){
						if(opt.callback){
							opt.callback()
						}
					}
					$('.mark').remove()
					$('.dialog').remove()
			})
		})
	}
})(jQuery)