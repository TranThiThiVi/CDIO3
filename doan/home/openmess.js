$(document).ready(function () {
    $(".message").click(function () {

        if ($(this).hasClass('show')) {

            setTimeout(function () {
                $(".info-mess").css({
                    "display": "block"
                })
                $(".fa-times").css({
                    "display": "block"
                })
                $(".fa-envelope-square").css({
                    "display": "none"
                })
                $(".message").removeClass("show");
            }, 200)
        }
    })
    $(".message").click(function () {

        if (!$(this).hasClass('show')) {

            setTimeout(function () {
                $(".info-mess").css({
                    "display": "none"
                })
                $(".fa-times").css({
                    "display": "none"
                })
                $(".fa-envelope-square").css({
                    "display": "block"
                })
                $(".message").addClass("show");
            }, 200)
        }
    })
})