(
    function () {
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
    }
)()