$(document).ready(function () {
    $('.bxslider').bxSlider();
    $(function () {
        $(".move_to_form").click(function () {

            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
            return false;

        });
    });
});