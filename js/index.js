$(document).ready(function () {

// 使用单例模式，定义了单个变量，将变量初始化和事件绑定分开
// 页面加载完成初始化，省去繁琐过程
// 增加了代码的逻辑性，方便维护
	var index={
		init:function() {
			// 初始化变量
			this.tab = $("div.tittle>div");//菜单切换
			this.allTab = $("div.a_con>div");//所有菜单
			this.myConcern = $(".my_concern_con");//我的关注
			this.recommend = $(".recommend_con");//推荐
			this.nav = $(".arc_nav_con");//导航
			this.video = $(".video_con");//视频
			this.buy = $(".buy_con");//购物
			this.weather = $("a.weather");//天气
			this.weatherCon = $(".weather_con");//天气内容
			this.skinButton = $(".left_skin");//换肤按钮
			this.skinMenu = $("div.skin");//换肤菜单
			this.skinBack = $(".skin_retract");//收回
			this.body = $("body");//网页窗口
			this.bg1 = $("div.skin_con_left_1 .bg1");//图片1
			this.bg2 = $("div.skin_con_left_1 .bg2");//图片2
			this.bg3 = $("div.skin_con_left_1 .bg3");//图片3
			this.bg4 = $("div.skin_con_left_2 .bg1");//图片4
			this.bg5 = $("div.skin_con_left_2 .bg2");//图片5
			this.bg6 = $("div.skin_con_left_2 .bg3");//图片6
			this.bg7 = $("div.skin_con_left_3 .bg1");//图片7
			this.bg8 = $("div.skin_con_left_3 .bg2");//图片8
			this.bg9 = $("div.skin_con_left_3 .bg3");//图片9
			this.bg10 = $("div.skin_con_left_4 .bg1");//图片10
			this.bg11 = $("div.skin_con_left_4 .bg2");//图片11
			this.bg12 = $("div.skin_con_left_4 .bg3");//图片12
			this.preview = $("div.skin_con_right");//皮肤预览
			this.html = $('html');//网页整体
			this.allPic = $(".skin_con_left img");//所有图片
			this.backtop = $('.backtop');//返回顶部
			this.all = $("body,html");//网页整体	
			var pointer = this;
			this.bind(pointer);
			console.log(pointer);
		},
		bind:function(pointer){
			// 默认皮肤加载
			if (!localStorage.skin) {
				pointer.html.css('background-image','url(./pic/background/bg1.jpg)')
			} else {
				pointer.html.css('background-image',localStorage.skin)
			}
			//Tab切换
			pointer.tab.each(function(index){
				$(this).bind({
					click:function(){
						pointer.tab.removeClass("tle_selected");
						$(this).addClass("tle_selected");
						pointer.allTab.removeClass("con_selected");
						if (index == 0) {
							pointer.myConcern.addClass("con_selected");
						} else if(index == 1) {
							pointer.recommend.addClass("con_selected");
						} else if(index == 2) {
							pointer.nav.addClass("con_selected");
						} else if(index == 3) {
							pointer.video.addClass("con_selected");
						} else if(index == 4) {
							pointer.buy.addClass("con_selected");
						}
					}
				});
			});
			// 天气
			pointer.weather.bind({
				mouseover:function(){
					pointer.weatherCon.css("display","block");
				}
			});
			pointer.weatherCon.bind({
				mouseleave:function(){
					$(this).css("display","none");
				}
			});
			// 换肤
			pointer.skinButton.bind({
				click:function(e){
					pointer.skinMenu.slideDown(200).css("opacity","1");
					e.stopPropagation();
				}
			});
			pointer.skinBack.bind({
				click:function(){
					pointer.skinMenu.slideUp(200).css("opacity","0");
				}
			});
			pointer.body.bind({
				click:function(){
					pointer.skinMenu.slideUp(200).css("opacity","0");
				}
			});
			pointer.skinMenu.bind({
				click:function(e){
					e.stopPropagation();
				}
			});
			//换肤预览
			pointer.bg1.bind({
				mouseenter:function(){
					pointer.preview.css('background-image','url(./pic/background/bg1.jpg)');
				},
				mouseleave:function(){
					pointer.preview.css('background-image',pointer.html.css('background-image'));
				},
				click:function(){
					pointer.html.css('background-image','url(./pic/background/bg1.jpg)');
				}
			});
			pointer.bg2.bind({
				mouseenter:function(){
					pointer.preview.css('background-image','url(./pic/background/bg2.jpg)');
				},
				mouseleave:function(){
					pointer.preview.css('background-image',pointer.html.css('background-image'));
				},
				click:function(){
					pointer.html.css('background-image','url(./pic/background/bg2.jpg)');
				}
			});
			pointer.bg3.bind({
				mouseenter:function(){
					pointer.preview.css('background-image','url(./pic/background/bg3.jpg)');
				},
				mouseleave:function(){
					pointer.preview.css('background-image',pointer.html.css('background-image'));
				},
				click:function(){
					pointer.html.css('background-image','url(./pic/background/bg3.jpg)');
				}
			});
			pointer.bg4.bind({
				mouseenter:function(){
					pointer.preview.css('background-image','url(./pic/background/bg4.jpg)');
				},
				mouseleave:function(){
					pointer.preview.css('background-image',pointer.html.css('background-image'));
				},
				click:function(){
					pointer.html.css('background-image','url(./pic/background/bg4.jpg)');
				}
			});
			pointer.bg5.bind({
				mouseenter:function(){
					pointer.preview.css('background-image','url(./pic/background/bg5.jpg)');
				},
				mouseleave:function(){
					pointer.preview.css('background-image',pointer.html.css('background-image'));
				},
				click:function(){
					pointer.html.css('background-image','url(./pic/background/bg5.jpg)');
				}
			});
			pointer.bg6.bind({
				mouseenter:function(){
					pointer.preview.css('background-image','url(./pic/background/bg6.jpg)');
				},
				mouseleave:function(){
					pointer.preview.css('background-image',pointer.html.css('background-image'));
				},
				click:function(){
					pointer.html.css('background-image','url(./pic/background/bg6.jpg)');
				}
			});
			pointer.bg7.bind({
				mouseenter:function(){
					pointer.preview.css('background-image','url(./pic/background/bg7.jpg)');
				},
				mouseleave:function(){
					pointer.preview.css('background-image',pointer.html.css('background-image'));
				},
				click:function(){
					pointer.html.css('background-image','url(./pic/background/bg7.jpg)');
				}
			});
			pointer.bg8.bind({
				mouseenter:function(){
					pointer.preview.css('background-image','url(./pic/background/bg8.jpg)');
				},
				mouseleave:function(){
					pointer.preview.css('background-image',pointer.html.css('background-image'));
				},
				click:function(){
					pointer.html.css('background-image','url(./pic/background/bg8.jpg)');
				}
			});
			pointer.bg9.bind({
				mouseenter:function(){
					pointer.preview.css('background-image','url(./pic/background/bg9.jpg)');
				},
				mouseleave:function(){
					pointer.preview.css('background-image',pointer.html.css('background-image'));
				},
				click:function(){
					pointer.html.css('background-image','url(./pic/background/bg9.jpg)');
				}
			});
			pointer.bg10.bind({
				mouseenter:function(){
					pointer.preview.css('background-image','url(./pic/background/bg10.jpg)');
				},
				mouseleave:function(){
					pointer.preview.css('background-image',pointer.html.css('background-image'));
				},
				click:function(){
					pointer.html.css('background-image','url(./pic/background/bg10.jpg)');
				}
			});
			pointer.bg11.bind({
				mouseenter:function(){
					pointer.preview.css('background-image','url(./pic/background/bg11.jpg)');
				},
				mouseleave:function(){
					pointer.preview.css('background-image',pointer.html.css('background-image'));
				},
				click:function(){
					pointer.html.css('background-image','url(./pic/background/bg11.jpg)');
				}
			});
			pointer.bg12.bind({
				mouseenter:function(){
					pointer.preview.css('background-image','url(./pic/background/bg12.jpg)');
				},
				mouseleave:function(){
					pointer.preview.css('background-image',pointer.html.css('background-image'));
				},
				click:function(){
					pointer.html.css('background-image','url(./pic/background/bg12.jpg)');
				}
			});
			// 换肤缓存
			pointer.allPic.bind({
				click:function(){
					localStorage.skin = pointer.html.css('background-image');
				}
			})
			// 返回顶部
			$(window).bind({
				scroll:function(){
					var t = $(window).scrollTop()
					if (t > 100) {
						pointer.backtop.stop().fadeIn();
					} else {
						pointer.backtop.stop().fadeOut();
					}

				}
			})
			pointer.backtop.bind({
				click:function(){
					$("body,html").animate({scrollTop:0},300)
				}
			});
		}
	}

	index.init();
});
