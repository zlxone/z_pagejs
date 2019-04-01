(
    function () {
        // 分页
        $("#zlpage").click(function () {
            $(".z_page_active").prev().addClass('z_page_active').siblings().removeClass('z_page_active')
        })
        $("#zrpage").click(function () {
            $(".z_page_active").next().addClass('z_page_active').siblings().removeClass('z_page_active')
        })

        $(".z_page li").click(function () {
            $(".z_page li").removeClass('z_page_active')
            $(this).addClass('z_page_active')
        })

        // 跑马灯
        var wrap = document.getElementById('z_pmdwrap'), first = document.getElementById('z_mpdfirst');
        var timer = window.setInterval(move, 10);
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
)()