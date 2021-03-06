;(function($){
	var Dialog=function(config){
		var _this_ =this;
		//console.log("aaa");
		//设置默认参数
		this.config={
			width:'auto',
			height:'auto',
			message:'aaa',
			buttons:null,
			type:'loading',
			maskClose:true
		}
		//设置扩展参数
		if(config && $.isPlainObject(config)){
			$.extend(this.config,config);
		}else{
			this.isConfig=true;
		}
		//创建dom
		this.body = $('body');
		//设置遮罩层
		this.mask= $('<div class="dialog-container">');
		//设置弹出框
		this.win = $('<div class="dialog-window">');
		//设置头部
		this.winHead = $('<div class="dialog-header"></div>');
		//设置内容
		this.winContent= $('<div class="dialog-content">点按钮不能关闭</div>');
		//设置脚部
		this.winFooter= $('<div class="dialog-footer">'
			+'<button id="right" style="z-index:100px;" class="blue">确定</button>');
		//渲染弹出框
		this.create();
	}
	Dialog.prototype={
		create:function(){
			var _this_ = this,
			body =this.body,
			mask=this.mask,
			win =this.win,
			winHead = this.winHead,
			winContent = this.winContent,
			winFooter = this.winFooter,
			config= this.config
			//判断是否传递参数
			if(this.isConfig){
				win.append(winHead.addClass('warning'));
				win.append(winContent);
				win.append(winFooter);
				mask.append(win);
				body.append(mask);
				//弹出一个有确认的警告框,点击按钮不可以关闭(需要手动关闭)
				//判断点击关闭弹出框
			
	            //点击按钮退出程序
				var buttonClose=$("#right").click(function(){
					return false;
				});
				console.log(buttonClose);
				if(config.maskClose){
					mask.click(function(){
						if(!buttonClose){
							console.log("aaaaa");
							_this_.close();
						}else{
							console.log("bbbbb");
							_this_.close();
						}
					})
				}
			}
		},
		close:function(){
			this.mask.remove();
		}
		
	}
	$.dialogFour=function(config){
		return new Dialog(config);
	}
})(Zepto)