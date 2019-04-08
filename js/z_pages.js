//需要加入接口：分页/上传图片并预览
(
    function () {
        // 分页
        $(".z_page .z_prev").click(function () {
            $(this).next().children(".z_page_active").prev().addClass('z_page_active').siblings().removeClass('z_page_active')
            console.log($(this).next().children(".z_page_active")[0].innerText)
        })
        $(".z_page .z_next").click(function () {
            $(this).prev().children(".z_page_active").next().addClass('z_page_active').siblings().removeClass('z_page_active')
            console.log($(this).prev().children(".z_page_active")[0].innerText)
        })
        $(".z_gonum button").click(function () {
            console.log($(this).siblings('input')[0].value)
        })
        $(".z_page li").click(function () {
            if(this.innerText=='...'){
                return false
            }else {
                $(this).siblings().removeClass('z_page_active')
                $(this).addClass('z_page_active')
                console.log(this.innerText)
            }
        })

        //上传图片并预览
        var html = '';
        $(".z_upimgbtn").click(function () {
            $(this).prev().click()
        })
        $(".z_upfile").change(function () {
            let obj = $(this)[0].files[0];
            let fr = new FileReader();
            fr.readAsDataURL(obj);
            fr.onload = function () {
                html = '<img src="' + this.result + '">'
                // $("#z_imgshow").append(html)
                $("#z_imgshow").attr('src', this.result);
            };
        })

        //轮播图
        var mySwiper = new Swiper ('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay:true,
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


    }
)()