var aspectratio = screen.width / screen.height
var def_x;
var def_y;
var is_def_x_setted =false;
var real_x;
var final_real_x;
$(document).scrollLeft(0);

	function touchmove(event) {
if (is_def_x_setted == false) { def_x = event.touches[0].clientX; def_y = event.touches[0].clientY; is_def_x_setted = true };
	real_x = event.touches[0].clientX - def_x;
	real_y= event.touches[0].clientY - def_y;
	if (aspectratio > 0.8) {
	if (real_x > -Math.abs((35.5/aspectratio)/100*screen.width)&&real_x < (35.5/aspectratio)/100*screen.width&&
		real_y > -Math.abs((17/aspectratio)/100*screen.width)&&real_y < (17/aspectratio)/100*screen.width
		) { $('.line').css({'margin-left':real_x+'px','transition':'0s'})
		$('.car-frame').css({'width':(35.5/aspectratio)/100*screen.width +real_x+'px','transition':'0s'}) 
		$('.animated-car').css({'left':'auto','right':50-(35.5/aspectratio)+'vw','width':(35.5/aspectratio)/100*screen.width -real_x+'px','margin':'0','transition':'0s'}) 
	 }
		}else {
			if (real_x > -Math.abs((16/aspectratio)/100*screen.width)&&real_x < (16/aspectratio)/100*screen.width&&
		real_y > -Math.abs((12/aspectratio)/100*screen.width)&&real_y < (12/aspectratio)/100*screen.width
		) { $('.line').css({'margin-left':real_x+'px','transition':'0s'})
		$('.car-frame').css({'width':(16/aspectratio)/100*screen.width +real_x+'px','transition':'0s'}) 
		$('.animated-car').css({'left':'auto','right':50-(16/aspectratio)+'vw','width':(16/aspectratio)/100*screen.width -real_x+'px','margin':'0','transition':'0s'}) 
}}
};



$(document).ready(function(){


$('a[href^="#"]').on('click',function(e){
e.preventDefault();

var target = this.hash;
var $target = $(target);

$('html, body').animate({
	'scrollTop' : $target.offset().top
}, 4000, 'swing', function () {
	window.location.hash = target;
});});

setTimeout(function(){
	$('.header-bg').addClass('active');
	$('.right-header-box').addClass('active');
	$('.main-logo').addClass('active');
	$('.menu1').addClass('active');
	$('.menu2').addClass('active');
	$('.menu3').addClass('active');
	$('.menu4').addClass('active');
},300);

/* Scroll animation */
var scrollvar = ($(window).scrollTop() / screen.height)*700;
var frame0 = 0;
var lastscroll1;
var lastscroll2;
var is_user_scrolling_down;
var frame = 0;
var anim2frame = 0;
var was_more_than_20 = false;
var scrolleft = ($(window).scrollLeft() / screen.width)*900;
var car_width = 71;
var car_height = 68;
var car_top = 12;
$(window).scroll(function scrollfunc(){
scrolleft = ($(window).scrollLeft() / screen.width)*900;
 scrollvar = ($(window).scrollTop() / screen.height)*700;
 if (scrollvar >= 100) {  $('.main-title').addClass('inactive'); } else {   $('.main-title').removeClass('inactive'); }
 if (scrollvar >= 101&& scrollvar <= 1000) { $('.title-2').addClass('inactive');  } else { $('.title-2').removeClass('inactive'); }
 if(scrollvar >= 1000) { $('.info-box-1').addClass('inactive'); $('.info-box-2').addClass('inactive');  } else { $('.info-box-1').removeClass('inactive'); $('.info-box-2').removeClass('inactive'); }
 if(scrollvar >= 2000&&scrollvar < 2200) { $('.animated-car').css({'background-image':'url(car.anim-2.png','background-position':'0.13% center','width':71/aspectratio +'vw','position':'fixed','left':50-(35.5/aspectratio)+'vw'}); } else if (scrollvar >= 1500&& scrollvar<2000) { $('.animated-car').css({'background-image':'url(car.anim.png)','background-position':'55% center','width':53.68/aspectratio +'vw','position':'fixed','left':50-(26.84/aspectratio)+'vw'}); }
 if (scrollvar >=2000) { $('.animated-car').css({'background-image':'url(car.anim-2.png'}); } else { $('.animated-car').css({'background-image':'url(car.anim.png'}); }

if (scrollvar >= 1000&& scrollvar < 2000 &&is_user_scrolling_down==true) { frame0++; if(frame0%2==0 && frame <55) { frame = frame+11; $('.animated-car').css('background-position',frame +'% center') }}
if (scrollvar <= 1012&&is_user_scrolling_down==false) { frame0++; if(frame0%2==0 && frame >0) { frame = frame-11; $('.animated-car').css('background-position',frame +'% center') }}

if (aspectratio > 0.8) {
if (scrollvar >= 2500&&is_user_scrolling_down==true) { frame0++; if(frame0%1==0 && anim2frame <= 93) { anim2frame = anim2frame+7.69; $('.animated-car').css('background-position',anim2frame +'% center');}}
if (scrollvar <= 2700&& scrollvar > 1012 &&is_user_scrolling_down==false) { frame0++; if(frame0%1==0 && anim2frame >4.02) { anim2frame = anim2frame-7.69; $('.animated-car').css('background-position',anim2frame +'% center');}}
} else { 
if (scrollvar >= 2500&&is_user_scrolling_down==true) { frame0++; if(frame0%1==0 && anim2frame <= 93) { car_width=car_width-3; car_height=car_height-2.9; car_top= car_top+1;anim2frame = anim2frame+7.69; $('.animated-car').css({'background-position':anim2frame +'% center','width':car_width/aspectratio+'vw','height':car_height/aspectratio+'vw','left':50-((car_width/aspectratio)/2)+'vw','top':car_top+'vh'});}}
if (scrollvar <= 4000&& scrollvar > 1012 &&is_user_scrolling_down==false) { frame0++; if(frame0%1==0 && anim2frame >4.02) { car_width=car_width+3; car_height=car_height+2.9;car_top= car_top-1; anim2frame = anim2frame-7.69; $('.animated-car').css({'background-position':anim2frame +'% center','width':car_width/aspectratio+'vw','height':car_height/aspectratio+'vw','left':50-((car_width/aspectratio)/2)+'vw','top':car_top+'vh'}); }}}

if (anim2frame <= 7.69) {  $('.horizon-2').css({'display':'none'}); $('.horizontal-scroll').css({'background':'transparent','transform':'none','display':'none'}) }
if ( anim2frame > 7.7 && anim2frame <= 15.4) { $('.horizon-2').css({'background':'white','transform':'rotate(90deg)','position':'fixed','top':'-50vh','display':'block'}); $('.horizontal-scroll').css({'background':'linear-gradient(40deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 70%)','display':'block'}); }
if (anim2frame > 15.4 && anim2frame <= 23.1) { $('.horizon-2').css({'background':'white','transform':'rotate(80deg)','position':'fixed','top':'-40vh'}); $('.horizontal-scroll').css('background','linear-gradient(40deg, rgba(255,255,255,1) 0%, rgba(254,254,254,1) 70%)'); }	
if (anim2frame > 23.1 && anim2frame <= 30.8) { $('.horizon-2').css({'background':'white','transform':'rotate(68deg)','position':'fixed','top':'-30vh'}); $('.horizontal-scroll').css('background','linear-gradient(40deg, rgba(255,255,255,1) 0%, rgba(254,254,254,1) 70%)'); }
if (anim2frame > 30.8 && anim2frame <= 38.5) { $('.horizon-2').css({'background':'white','transform':'rotate(55deg)','position':'fixed','top':'-20vh'}); $('.horizontal-scroll').css('background','linear-gradient(40deg, rgba(255,255,255,1) 0%, rgba(253,253,253,1) 70%)'); }
if (anim2frame > 38.5 && anim2frame <= 46.2) { $('.horizon-2').css({'background':'white','transform':'rotate(45deg)','position':'fixed','top':'-10vh'}); $('.horizontal-scroll').css('background','linear-gradient(40deg, rgba(255,255,255,1) 0%, rgba(252,252,252,1) 70%)'); }
if (anim2frame > 46.2 && anim2frame <= 53.9) { $('.horizon-2').css({'background':'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)','transform':'rotate(40deg)','position':'fixed','top':'-0vh'}); $('.horizontal-scroll').css('background','linear-gradient(40deg, rgba(255,255,255,1) 0%, rgba(252,252,252,1) 70%)'); }
if (anim2frame > 53.9 && anim2frame <= 61.6) { $('.horizon-2').css({'background':'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 100%)','transform':'rotate(30deg)','position':'fixed','top':'10vh','position':'fixed','top':'10vh','position':'fixed','top':'10vh'}); $('.horizontal-scroll').css('background','linear-gradient(40deg, rgba(255,255,255,1) 0%, rgba(251,251,251,1) 70%)'); }
if (anim2frame > 61.6 && anim2frame <= 69.3) { $('.horizon-2').css({'background':'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(245,245,245,1) 100%)','transform':'rotate(25deg)','position':'fixed','top':'20vh','position':'fixed','top':'10vh'}); $('.horizontal-scroll').css('background','linear-gradient(40deg, rgba(255,255,255,1) 0%, rgba(251,251,251,1) 70%)'); }
if (anim2frame > 69.3 && anim2frame <= 77) { $('.horizon-2').css({'background':'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(235,235,235,1) 100%)','transform':'rotate(8deg)','position':'fixed','top':'25vh'}); $('.horizontal-scroll').css('background','linear-gradient(40deg, rgba(255,255,255,1) 0%, rgba(251,251,251,1) 70%)'); }
if (anim2frame > 77 && anim2frame <= 84.6) { $('.horizon-2').css({'background':'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(230,230,230,1) 100%)','transform':'rotate(5deg)','position':'fixed','top':'35vh'}); $('.horizontal-scroll').css('background','linear-gradient(40deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 70%)'); }
if (anim2frame > 84.6 && anim2frame <= 92.3) { $('.horizon-2').css({'background':'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(220,220,220,1) 100%)','transform':'rotate(3deg)','position':'fixed','top':'35vh'}); $('.horizontal-scroll').css('background','linear-gradient(40deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 70%)'); }
if (anim2frame > 92.3 && anim2frame <= 100) { $('.horizon-2').css({'background':'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(210,210,210,1) 100%)','transform':'rotate(0deg)','position':'fixed','top':'40vh'}); $('.horizontal-scroll').css('background','linear-gradient(40deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 70%)');
 }

if (frame == 0) { $('.animated-horizon').css({'height':'70vh','background':'linear-gradient(0deg, rgba(250,250,250,1) 0%, rgba(200,200,200,1) 100%)'});};
if (frame == 11) { $('.animated-horizon').css({'height':'75vh','background':'linear-gradient(0deg, rgba(251,251,251,1) 0%, rgba(215,215,215,1) 100%)'});};
if (frame == 22) { $('.animated-horizon').css({'height':'80vh','background':'linear-gradient(0deg, rgba(252,252,252,1) 0%, rgba(225,225,225,1) 100%)'});};
if (frame == 33) { $('.animated-horizon').css({'height':'85vh','background':'linear-gradient(0deg, rgba(253,253,253,1) 0%, rgba(235,235,235,1) 100%)'});};
if (frame == 44) { $('.fullscreen-animation').css({'background':'linear-gradient(40deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 70%)'});  $('.animated-horizon').css({'height':'90vh','background':'linear-gradient(0deg, rgba(254,254,254,1) 0%, rgba(245,245,245,1) 100%)','display':'block'});};
if (frame == 55) { $('.fullscreen-animation').css({'background':'white'}); $('.animated-horizon').css({'display':'none'});};
if (scrollvar <= 10) { $('.animated-car').css('background-position','0% center'); $('.animated-horizon').css('height','70vh'); }
if (scrollvar >= 1100&& scrollvar < 2000) { $('.animated-car').css('background-position','55% center'); $('.animated-horizon').css('height','100vh'); };
if (scrollvar > 1100) { $('.text-container').css('display','none');} else {  $('.text-container').css('display','block'); }

lastscroll2=lastscroll1; lastscroll1=scrollvar; if ( lastscroll1>lastscroll2) { is_user_scrolling_down=true; } else if (lastscroll1<lastscroll2) {is_user_scrolling_down=false;} else if(lastscroll1 == lastscroll2) { is_user_scrolling_down =null; }


console.log(scrollvar);
// what section
if (anim2frame > 84.6 && anim2frame <= 92.3) {
$('.line').css({'display':'none','opacity':0,'transition':'0s'}); $('.car-frame').css({'display':'none','transition':'0s'});
$('.animated-car').css({'width':car_width/aspectratio+'vw'});
is_frame_setted = false;
$('.hereswhat').removeClass('active');
 }

if (anim2frame > 92.3 && anim2frame <= 100&& is_frame_setted == false) {
	is_frame_setted = true;
	$('.hereswhat').addClass('active');
	 
$('.animated-car').css({'right':'auto','margin':'0'})
	$('.animated-car').css({'left':'auto','margin':'0','right':50-(car_width/aspectratio)/2+'vw'});
	$('.car-frame').css({'left':50-(car_width/aspectratio)/2+'vw','opacity':1,'display':'block','width':'0'+'px','height':$('.animated-car').css('height'),'position':'fixed','top':$('.animated-car').css('top'),'transform':$('.animated-car').css('transform')});
	$('.line').css({'transition':'1s','display':'block','width':0.2/aspectratio+'vw','transform':$('.animated-car').css('transform')});
	setTimeout(function(){
	$('.line').css({'opacity':'1','left':'50vw'});
	},500);
}
});
var is_frame_setted = false;
	function updatecar(event) {
		var def_x;
	setInterval(function(){ 
		if (def_x == undefined) { def_x = event.screenX; }
		var x = event.screenX;
		$('.line').css('margin-left',def_x-x+'px');
		console.log(x);
	},10);
};

var def_x;
var def_y;
var is_def_x_setted =false;
var real_x;
var modified_width = (35.5/aspectratio)/100*screen.width-10;
$('.swipe-icon').hover(function swipe(){
$(document).mousemove(function(event){
	if (anim2frame > 92.3 && anim2frame <= 100) {
	if (is_def_x_setted == false) { def_x = event.clientX; def_y = event.clientY; is_def_x_setted = true };
	real_x = event.clientX - def_x;
	real_y= event.clientY - def_y;

	modified_width = (35.5/aspectratio)/100*screen.width -real_x-10;
	if (real_x > -Math.abs((35.5/aspectratio)/100*screen.width)&&real_x < (35.5/aspectratio)/100*screen.width&&
		real_y > -Math.abs((17/aspectratio)/100*screen.width)&&real_y < (17/aspectratio)/100*screen.width
		) { $('.line').css({'margin-left':real_x+'px','transition':'0s'});
		$('.car-frame').css({'width':(35.5/aspectratio)/100*screen.width +real_x+'px','transition':'0s'}) 
		$('.animated-car').css({'left':'auto','right':50-(35.5/aspectratio)+'vw','width':(35.5/aspectratio)/100*screen.width -real_x-10+'px','margin':'0','transition':'0s'}) }
}
});
});
/*reviews*/
var rev_titles = ['"Thank goodness for Carify"','“Completely satisfied”','"Saved me"']
var rev_contents = ['It saved me a 430 mile round trip and stopped me buying a clocked, written off car. What a fantastic service.',
'Completely satisfied with the service from A-Z. Telephone contact was very efficient & helpful.',
'I can’t thank Vehicle Check enough as, by choosing their report over others, I escaped inheriting a significant amount of debt.']
var rev_num = 0;
$('.next').click(function(){
	rev_num++;
	$('.rew_title').text(rev_titles[rev_num%3]);
	$('.rew_cont').text(rev_contents[rev_num%3]);
	console.log('hue');
});
$('.prev').click(function(){
	rev_num--;
	$('.rev_title').text(rev_titles[rev_num]);
	$('.rev_cont').text(rev_contents[rev_num]);
});

/* Set header sizes by aspect ratio */
$(window).resize(function(){setSizes();});
var aspectratio = screen.width / screen.height
function setSizes() {

//1.7vw=1.3vh , 1=2.2  2.2/aspectratio
// vw vh 1.7 1vw = 1.7vh vh = vw/aspectratio
$('.main-menu li').css({'font-size':2.2/aspectratio + 'vw'});
//$('.main-menu').css({'position':'fixed','top':4-((1.1/aspectratio)/aspectratio) +'vh'});
if (scrollvar < 2000) {$('.animated-car').css({'width':53.68/aspectratio + 'vw','height':68/aspectratio + 'vw','position':'fixed','left':50-(26.84/aspectratio)+'vw'})} else {
	$('.animated-car').css({'width':71/aspectratio + 'vw','height':68/aspectratio + 'vw','position':'fixed','left':50-(35.5/aspectratio)+'vw'});
}
if (aspectratio>0.8) {
$('.line').css({'height':35/aspectratio+'vw'});
$('.swipe-icon').css({'height':5/aspectratio + 'vw','width':5/aspectratio + 'vw','left':'-'+ 2.5/aspectratio +'vw','top':15/aspectratio+'vw'});
} else { 
$('.line').css({'height':35/aspectratio+'vw','top':'20vh'});
$('.swipe-icon').css({'height':8/aspectratio + 'vw','width':8/aspectratio + 'vw','left':'-'+ 4/aspectratio +'vw'}); }
$('.main-logo').css({'width':14/aspectratio + 'vw','height':'8vh'});
if(aspectratio > 1) { 
$('.sign-up-button').css({'font-size':1.4/aspectratio+'vw'})
$('.reg-number-field').css({'font-size':1.4/aspectratio+'vw'})
} else {
$('.sign-up-button').css({'font-size':2.2/aspectratio+'vw','border-radius':2/aspectratio})
$('.reg-number-field').css({'font-size':2.2/aspectratio+'vw','width':'8ch','border-radius':1.5/aspectratio})
$('.main-menu').css('display','none');
$('.title-2').css({'position':'relative','top':'-'+ 2+(1.5/aspectratio) +'vw'});
};
$('.main-title,.title-2').css({'font-size':4+(3/aspectratio)+'vw'});

if (aspectratio < 0.5) {
	$('.main-title,.title-2').css({'font-size':3+(3/aspectratio)+'vw'});
}
$('.info-box-1 p,.info-box-2 p').css({'font-size':2.2/aspectratio + 'vw'});
$('.info-box-1 h2,.info-box-2 h2').css({'font-size':3.2/aspectratio + 'vw'});
$('.info-box-1').css({'position':'fixed','left':5+(4/aspectratio)+'vw'});
$('.info-box-2').css({'position':'fixed','right':5+(4/aspectratio)+'vw'});
$('.info-box-1 li p').css({'font-size':1.8/aspectratio + 'vw'});
if(aspectratio < 1.42) {$('.info-box-1 li p').css({'font-size':1.2/aspectratio + 'vw'});}
if (aspectratio < 1.11) { $('.info-box-1, .info-box-2').css('display','none'); }
if (aspectratio >= 1) {
$('.left').css({'width':30/aspectratio+'vw'});
$('.right').css({'width':30/aspectratio+'vw'});
$('.ul-centerer').css({'width':30/aspectratio+'vw'});
$('.why-section ul li').css({'width':30/aspectratio+'vw'});};
$('.why-section p, .reviews-section p,.prices button').css('font-size',2.2/aspectratio + 'vw');
$('.why-section h2').css('font-size',3.2/aspectratio + 'vw');
$('.learn-more').css({'font-size':1.4/aspectratio+'vw','position':'relative','top':'-'+1/aspectratio+'vw'});
$('.icon-9').css({'width':7/aspectratio+'vw','height':7/aspectratio+'vw','margin-left':(50-(7/aspectratio/2))-10+'vw'});
$('.prev,.next').css({'width':7/aspectratio+'vw','height':7/aspectratio+'vw'});
$('.what-2 p, .used-car-value p,.prices p').css('font-size',2.2/aspectratio + 'vw');
$('.what-2 h2, .used-car-value h2,.upperlayer h2,.prices h2').css('font-size',3.2/aspectratio+'vw');
$('.reviews-section p,.reviews-section h2').css({'margin-left':7/aspectratio+4+'vw','margin-right':7/aspectratio+4+'vw'});
$('.prices ul li').css({'margin-right':1/aspectratio+'vw','width':30/aspectratio+'vw','padding':1.2/aspectratio+'vw'});
$('.prices ul li h1').css({'font-size':3.2/aspectratio+'vw'});
$('.prices ul li h4').css({'font-size':1.6/aspectratio+'vw'});
$('.prices ul li h3').css({'font-size':2.4/aspectratio+'vw'});
$('.prices ul').css({'margin-left':1/aspectratio+'vw'})

//$('.why-section ul li div').css({'width':7/(aspectratio*aspectratio)+'vw','height':7/(aspectratio*aspectratio) +'vw'});
}
setSizes();

});