$(document).ready(function(){
       var btn=true;
	// $('span').on('tap',function(){
	// 	// $(this).toggleClass('music-btn');

		
	// 	if(btn==true) {
	// 		$(this).removeClass('music-btn')
	// 		btn=false;
	// 	}
	// 	else{
	// 		$(this).addClass('music-btn')
	// 		btn=true;
	// 	}
// 百度插件touch
	touch.on('span.music','tap',function(e){
		var myaudio=document.getElementById("audio1");
		if(btn==true) {
			$('span.music').removeClass('music-animated')
			myaudio.pause();
			btn=false;
		}
		else{
			$('span.music').addClass('music-animated')
			myaudio.play();
			btn=true;
		}

	})
// 上下滑屏自己做的
	// $('.page').on('swipeup',function(){
	// 	 var index=$(this).index();	
	// 	 if(index<6){
	// 		$(this).addClass('pageUp');
	// 		$(this).children().removeClass('fadeintipX')
	// 		$(this).next().removeClass('pageDown')
	// 		$(this).next().children().addClass('fadeintipX')
	// 	}
	// })
	// $('.page').on('swipedown',function(){
	// 	var index=$(this).index();
	// 	if(index>2){
	// 		$(this).addClass('pageDown');
	// 		$(this).children().removeClass('fadeintipX');
	// 		$(this).prev().removeClass('pageUp')
	// 		$(this).prev().children().addClass('fadeintipX')		
	// 	}

	//老师做的

	var curIndex=0;
	var pageNum=$('.page').length-1;
	console.log(pageNum)//获取当前页数-1	
	touch.on('.main','swipeup',function(e){
		console.log(curIndex)
		if(curIndex<pageNum){
			$('.page').eq(curIndex).addClass('pageUp');//索引值
			$('.page').eq(curIndex).children('div').addClass('hide');
			curIndex=curIndex+1;
			if(curIndex==pageNum){
				$('.arrow').hide();
			}
			$('.page').eq(curIndex).removeClass('pageDown');
			$('.page').eq(curIndex).children('div').removeClass('hide');
		}else{return}
		})
	touch.on('.main','swipedown',function(e){
		console.log(curIndex)
		if(curIndex>0){
			$('.arrow').show();
			$('.page').eq(curIndex).addClass('pageDown');
			$('.page').eq(curIndex).children('div').addClass('hide');//隐藏在出来会有动画效果
			curIndex=curIndex-1;
			
			$('.page').eq(curIndex).removeClass('pageUp');
			$('.page').eq(curIndex).children('div').removeClass('hide');	
		}else{return false}


	})







	})
	// touch.on('.page2','swipeup',function(e){
	// 	$(this).addClass('pageUp');
	// 	$(this).next().removeClass('pageDown')
	// })
	// touch.on('.page2','swipedown',function(){
	// 	$(this).addClass('pageDown');
	// 	$(this).prev().removeClass('pageUp')
	// })
	// touch.on('.page3','swipedown',function(){
	// 	$(this).addClass('pageDown');
	// 	$(this).prev().removeClass('pageUp')
	// })














