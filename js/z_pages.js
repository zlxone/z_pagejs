//需要加入接口：分页/上传图片并预览
(
    function () {
        // 分页
        $(".z_page .z_prev").click(function () {
            console.log($(this).siblings('.z_num').children(".z_page_active")[0].innerText)
            if ($(this).siblings('.z_num').children(".z_page_active").prev()[0].innerText == '...') {
                $(this).siblings('.z_num').children('li:first-child').next().next()[0].innerText = 3
                if ($(this).siblings('.z_num').children(".z_page_active")[0].innerText == '4') {
                    $(this).siblings('.z_num').children(".z_page_active").prev().prev().addClass('z_page_active').siblings().removeClass('z_page_active')
                } else {
                    $(this).siblings('.z_num').children(".z_page_active")[0].innerText = --$(this).siblings('.z_num').children(".z_page_active")[0].innerText
                }
            } else {
                if ($(this).siblings('.z_num').children(".z_page_active")[0].innerText > 3 &&
                    $(this).siblings('.z_num').children(".z_page_active")[0].innerText < $(this).siblings('.z_num').children('li:last-child')[0].innerText - 2) {
                    $(this).siblings('.z_num').children(".z_page_active")[0].innerText = --$(this).siblings('.z_num').children(".z_page_active")[0].innerText
                } else {
                    if ($(this).siblings('.z_num').children(".z_page_active")[0].innerText > $(this).siblings('.z_num').children('li:last-child')[0].innerText - 2) {
                        $(this).siblings('.z_num').children(".z_page_active").prev().addClass('z_page_active').siblings().removeClass('z_page_active')
                        $(this).siblings('.z_num').children('li:last-child').prev().prev()[0].innerText = $(this).siblings('.z_num').children('li:last-child')[0].innerText - 2
                    } else {
                        $(this).siblings('.z_num').children(".z_page_active").prev().addClass('z_page_active').siblings().removeClass('z_page_active')
                    }
                }
            }
        })
        $(".z_page .z_next").click(function () {
            console.log($(this).siblings('.z_num').children(".z_page_active")[0].innerText)
            if ($(this).siblings('.z_num').children(".z_page_active").next()[0].innerText == '...') {
                $(this).siblings('.z_num').children('li:last-child').prev().prev()[0].innerText = $(this).siblings('.z_num').children('li:last-child')[0].innerText - 2
                if ($(this).siblings('.z_num').children(".z_page_active")[0].innerText == $(this).siblings('.z_num').children('li:last-child')[0].innerText - 3) {
                    $(this).siblings('.z_num').children(".z_page_active").next().next().addClass('z_page_active').siblings().removeClass('z_page_active')
                } else {
                    $(this).siblings('.z_num').children(".z_page_active")[0].innerText = ++$(this).siblings('.z_num').children(".z_page_active")[0].innerText
                }
            } else {
                if ($(this).siblings('.z_num').children(".z_page_active")[0].innerText > 3 &&
                    $(this).siblings('.z_num').children(".z_page_active")[0].innerText < $(this).siblings('.z_num').children('li:last-child')[0].innerText - 2) {
                    $(this).siblings('.z_num').children(".z_page_active")[0].innerText = ++$(this).siblings('.z_num').children(".z_page_active")[0].innerText
                } else {
                    if ($(this).siblings('.z_num').children(".z_page_active")[0].innerText < 3) {
                        $(this).siblings('.z_num').children('li:first-child').next().next()[0].innerText = 3
                        $(this).siblings('.z_num').children(".z_page_active").next().addClass('z_page_active').siblings().removeClass('z_page_active')
                    } else {
                        $(this).siblings('.z_num').children(".z_page_active").next().addClass('z_page_active').siblings().removeClass('z_page_active')
                    }
                }
            }
        })
        $(".z_gonum button").click(function () {
            console.log($(this).siblings('input')[0].value)
            if ($(this).siblings('input')[0].value < $(this).parent().siblings('.z_num').children('li:last-child')[0].innerText - 2) {
                if ($(this).siblings('input')[0].value > 2) {
                    $(this).parent().siblings('.z_num').children('li:first-child').next().next()[0].innerText = $(this).siblings('input')[0].value
                    $(this).parent().siblings('.z_num').children('li:first-child').next().next().addClass('z_page_active').siblings().removeClass('z_page_active')
                } else {
                    if ($(this).siblings('input')[0].value == 1) {
                        $(this).parent().siblings('.z_num').children('li:first-child').addClass('z_page_active').siblings().removeClass('z_page_active')
                    } else {
                        $(this).parent().siblings('.z_num').children('li:first-child').next().addClass('z_page_active').siblings().removeClass('z_page_active')
                    }
                }
            } else {
                if ($(this).siblings('input')[0].value == $(this).parent().siblings('.z_num').children('li:last-child')[0].innerText - 2) {
                    $(this).parent().siblings('.z_num').children('li:last-child').prev().prev()[0].innerText = $(this).siblings('input')[0].value
                    $(this).parent().siblings('.z_num').children('li:last-child').prev().prev().addClass('z_page_active').siblings().removeClass('z_page_active')
                } else if ($(this).siblings('input')[0].value == $(this).parent().siblings('.z_num').children('li:last-child')[0].innerText - 1) {
                    $(this).parent().siblings('.z_num').children('li:last-child').prev().addClass('z_page_active').siblings().removeClass('z_page_active')
                } else {
                    $(this).parent().siblings('.z_num').children('li:last-child').addClass('z_page_active').siblings().removeClass('z_page_active')
                }
            }
        })
        $(".z_page li").click(function () {
            if (this.innerText == '...') {
                return false
            } else {
                $(this).siblings().removeClass('z_page_active')
                $(this).addClass('z_page_active')
                console.log(this.innerText)
            }
        })

        //上传图片并预览 z_imgshow唯一值
        var html = '';
        $(".z_upimgbtn").click(function () {
            $(this).prev().click()
        })
        $(".z_upfile").change(function () {
            let obj = $(this)[0].files[0];
            let fr = new FileReader();
            fr.readAsDataURL(obj);
            fr.onload = function () {
                $(".z_upfile").val("")
                html = '<img class="zimgs" src="' + this.result + '"><span class="zimgx">x</span>'
                $("#z_imgshows").append(html)
                // $("#z_imgshow").attr('src', this.result);
            };
        })
        $(document).on("click", ".zimgx", function () {
            $(this).prev()[0].remove()
            $(this)[0].remove()
        })

        //轮播图
        var mySwiper = new Swiper('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: true,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })

        // 跑马灯
        for (let i = 0; i < $('.z_pmdwrap').length; i++) {
            let wrap = $('.z_pmdwrap')[i], first = $('.z_mpdfirst')[i];
            let timer = window.setInterval(move, 10);
            wrap.onmouseover = function () {
                window.clearInterval(timer);
            };
            wrap.onmouseout = function () {
                timer = window.setInterval(move, 10);
            };

            function move() {
                wrap.scrollLeft++;
                if (wrap.scrollLeft >= first.scrollWidth) {
                    wrap.scrollLeft = 0;
                }
            }
        }

        //选择框
        $(".z_select span").click(function () {
            $(this).next().toggle(10)
        })
        $(".z_select li").click(function () {
            $(this).parent().prev().text($(this)[0].innerText)
            $(this).parent().toggle(10)
        })

        //到顶部
        $('.z_gotop').click(function () {
            $('html,body').animate({scrollTop: '0px'}, 800);
        });

        //实现倒计时60秒
        var countdown = 60;
        $("#z_yzmbtn").click(function () {
            settime(this)
        })

        function settime(val) {
            if (countdown == 0) {
                val.removeAttribute("disabled");
                val.value = "免费获取验证码";
                countdown = 60;
            } else {
                val.setAttribute("disabled", true);
                countdown--;
                val.value = "重新发送(" + countdown + ")";
                setTimeout(function () {
                    settime(val)
                }, 1000)
            }
        }

        // tab按钮组
        $('.z_button_group span').click(function () {
            $(this).siblings().removeClass("z_button_group_active");
            $(this).addClass('z_button_group_active')
        })

        //加入收藏 <span id="z_jcollect">加入收藏</span>
        $('#z_jcollect').click(function () {
            var url = window.location;
            var title = document.title;
            var ua = navigator.userAgent.toLowerCase();
            if (ua.indexOf("msie 8") > -1) {
                external.AddToFavoritesBar(url, title, '');//IE8
            } else {
                try {
                    window.external.addFavorite(url, title);
                } catch (e) {
                    try {
                        window.sidebar.addPanel(title, url, "");//firefox
                    } catch (e) {
                        alert("加入收藏失败，请使用Ctrl+D进行添加");
                    }
                }
            }
        })

        //合作单位滚动
        // $(document).ready(function () {
        //     ScrollText_vertic($('#scrollLocalP'), 400, 115, $("#scrollLocalSub"), 'top', 1, 50, 'localPTemp');//垂直循环滚动
        // });

        //循环调用的方法
        function ScrollAutoPlay_vertic(contID1, contID2, scrolldir, ShowHeight, textheight, steper) {
            var panel_1 = $('#' + contID1);
            var panel_2 = $('#' + contID2);
            currPos_1 = parseInt(panel_1.css('top'));  //第一个容器距离顶部的高度
            currPos_2 = parseInt(panel_2.css('top'));  //第二个容器距离顶部的高度
            //根据第二个容器的位置重置第一个容器的位置，当第二个容器完全显示后重置
            if (parseInt(currPos_2) == (ShowHeight - textheight)) {
                panel_1.css('top', ShowHeight);
            }
            else {
                panel_1.css('top', currPos_1 - steper);
            }
            if (parseInt(currPos_1) == (ShowHeight - textheight)) {
                panel_2.css('top', ShowHeight);
            }
            else {
                panel_2.css('top', currPos_2 - steper);
            }
        }

//--------------------------------------------左右滚动效果----------------------------------------------
        /*
        AppendToObj：        显示位置（目标对象）
        ShowWidth：        显示宽度
        ShowHeight：        显示高度
        ShowText：        显示信息
        ScrollDirection：    滚动方向（值：top、right）
        Steper：        每次移动的间距（单位：px；数值越小，滚动越流畅，建议设置为1px）
        Interval:        每次执行运动的时间间隔（单位：毫秒；数值越小，运动越快）
        templeName:       生成的容器主id
        */
        function ScrollText_vertic(AppendToObj, ShowWidth, ShowHeight, ShowText, ScrollDirection, Steper, Interval, templeName) {
            var textHeight, PosInit, PosSteper;
            var ScrollTime_virtic;
            if (ShowText.height() < ShowHeight) {            //判断是否需要滚动，如果内容高度小于容器高度就不滚动
                return;
            }
            with (AppendToObj) {
                html('');
                css('overflow', 'hidden');
                css('width', ShowWidth + 'px');
                css('line-height', ShowHeight + 'px');
                css('height', ShowHeight);
            }
            if (ScrollDirection == 'top') {
                PosInit = ShowHeight;
                PosSteper = Steper;
            }
            else {
                PosSteper = 0 - Steper;
            }
            if (Steper < 1 || Steper > ShowHeight) {
                Steper = 1
            }//每次移动间距超出限制(单位:px)
            if (Interval < 1) {
                Interval = 10
            }//每次移动的时间间隔（单位：毫秒）
            var Container1 = $('<div></div>');   //第一个用于展示的容器
            var ContainerID1 = templeName;  //第一个用于展示的容器id
            var i = 0;
            while ($('#' + ContainerID1).length > 0) {
                ContainerID1 = ContainerID1 + '_' + i;
                i++;
            }
            with (Container1) {
                attr('id', ContainerID1);
                //css('float', 'left');
                css('cursor', 'default');
                css('position', 'absolute');
                appendTo(AppendToObj);
                html(ShowText.html());
                //鼠标进入后停止滚动
                mouseover(function () {
                    clearInterval(ScrollTime_virtic);
                });
                mouseout(function () {
                    ScrollTime_virtic = setInterval("ScrollAutoPlay_vertic('" + ContainerID1 + "','" + ContainerID2 + "','" + ScrollDirection + "'," + ShowHeight + ',' + textHeight + "," + PosSteper + ")", Interval);
                });
            }
            textHeight = Container1.height();
            if (isNaN(PosInit)) {
                PosInit = 0 - textHeight;
            }
            ;
            Container1.css('top', PosInit);
            var Container2 = $('<div></div>');    //第二个用于展示的容器
            var ContainerID2 = templeName;   //第二个用于展示的容器id
            var i = 0;
            while ($('#' + ContainerID2).length > 0) {
                ContainerID2 = ContainerID2 + '_' + i;
                i++;
            }
            with (Container2) {
                attr('id', ContainerID2);
                //css('float', 'left');
                css('cursor', 'default');
                css('position', 'absolute');
                appendTo(AppendToObj);
                html(ShowText.html());
                mouseover(function () {
                    clearInterval(ScrollTime_virtic);
                });
                mouseout(function () {
                    ScrollTime_virtic = setInterval("ScrollAutoPlay_vertic('" + ContainerID1 + "','" + ContainerID2 + "','" + ScrollDirection + "'," + ShowHeight + ',' + textHeight + "," + PosSteper + ")", Interval);
                });
            }
            textHeight = Container2.height();
            if (isNaN(PosInit)) {
                PosInit = textHeight + 100;
            }
            ;
            Container2.css('top', PosInit + textHeight);
            ScrollTime_virtic = setInterval("ScrollAutoPlay_vertic('" + ContainerID1 + "','" + ContainerID2 + "','" + ScrollDirection + "'," + ShowHeight + ',' + textHeight + "," + PosSteper + ")", Interval);
        }


    }
)()

//设为首页 <a onclick="setHome(this,window.location)">设为首页</a>
function setHome(obj, vrl) {
    // console.log(obj)
    try {
        obj.style.behavior = 'url(#default#homepage)';
        obj.setHomePage(vrl);
    }
    catch (e) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }
            catch (e) {
                alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
            }
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage', vrl);
        }
    }
}

