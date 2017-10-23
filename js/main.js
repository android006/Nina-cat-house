$(function(){
  $(".main_slide").hover(function(){
      $(this).find(".prev,.next").stop(true, true).fadeTo("show", 0.5)
  },
  function(){
      $(this).find(".prev,.next").fadeOut()
  });
  $(".wrapper_bg").hover(function(){
      $(this).find(".wrapper_prev,.wrapper_next").stop(true, true).fadeTo("show", 0.5)
  },
  function(){
      $(this).find(".wrapper_prev,.wrapper_next").fadeOut()
  });
})

//轮播图
$(function(){
	var aLis=$('main_hd ul li');
  var aConts = $('.main_bg ul li');
	$('.main_hd ul li').click(function(){
			var oIndex =$(this).index();
	    $(this).addClass('on').siblings().removeClass('on');
	    aLis.removeClass('on').eq(oIndex).addClass('on');
	    aConts.hide(500).eq(oIndex).show(500);
	});
	var oUl = $('.main_bg ul')
	$('.main_bg ul li').clone().appendTo(oUl);
	oUl.css('width',$('.main_bg ul li').eq(0).innerWidth()*$('.main_bg ul li').length)
	var num = 0;
	function auplay(){
			num++;
			oUl.css('left',-$('.main_bg ul li').eq(0).innerWidth()*num)
			if (num == $('.main_bg ul li').length/2) {
				oUl.css('left',0)
				num=0
			}
			$('.main_hd ul li').eq(num).addClass('on').siblings().removeClass('on');
	}
	var timer = setInterval(auplay,5000)
	$('.main_slide').mouseover(function(){
		clearInterval(timer);
	})
	$('.main_slide').mouseout(function(){
		timer = setInterval(auplay,5000)
	});
	$('.next').click(function(){
		num++;
			oUl.animate({'left':-$('.main_bg ul li').eq(0).innerWidth()*num},1000,function(){
				if (num >= $('.main_bg ul li').length/2) {
					oUl.css('left',0)
					num=0
				}
				$('.main_hd ul li').eq(num).addClass('on').siblings().removeClass('on');
			})
	});
	$('.prev').click(function(){
		num--;
		if (num < 0) {
			oUl.css('left',-oUl.innerWidth*($('.main_bg ul li').length-1));
			num=$('.main_bg ul li').length-1;
		}
		oUl.stop().animate({"left":-1190*num+"px"},1000);
		$('.main_hd ul li').eq(-num).addClass('on').siblings().removeClass('on');
	})
})

//头部无缝轮播
$(function(){
	var oUl = $('.hot_cont_ul')
	$('.hot_cont_ul li').clone().appendTo(oUl);
	oUl.css('width',$('.hot_cont_ul li').eq(0).innerWidth()*$('.hot_cont_ul li').length)
	var num = 0;
	function auplay(){
			oUl.css('left',--num)
			if (num == -oUl.innerWidth()/2) {
				oUl.css('left',0)
				num=0
			}
	}
	var timer = setInterval(auplay,20)
	$('.hot_cont').mouseover(function(){
		clearInterval(timer);
	})
	$('.hot_cont').mouseout(function(){
		timer = setInterval(auplay,20)
	})
})

//右侧菜单
$(function(){
	$(".chatBox2").click(function(){
		$(".chatBox1").toggle(1000);
		$(".chatBox2").toggle(1000)
	})
	$('.chatClose1').click(function(){
		$(".chatBox1").toggle(1000);
		$(".chatBox2").toggle(1000)
	})
})
$(function(){
	var oUl = $('.bottom_cont ul')
	$('.bottom_cont ul li').clone().appendTo(oUl);
	oUl.css('width',$('.bottom_cont ul li').eq(0).innerWidth()*$('.bottom_cont ul li').length)
	var num = 0;
	function auplay(){
			oUl.css('left',--num)
			if (num == -oUl.innerWidth()/2) {
				oUl.css('left',0)
				num=0
			}
	}
	var timer = setInterval(auplay,20)
	$('.bottom_cont').mouseover(function(){
		clearInterval(timer);
	})
	$('.bottom_cont').mouseout(function(){
		timer = setInterval(auplay,20)
	})
})
