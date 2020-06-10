$(function () {
    $(".hamburger-menu").on("click", function () {
        $(".toggle").toggleClass("open");
        $(".nav-list").toggleClass("open");
    });

    // animation to fade in content
    AOS.init({
        easing: "ease",
        duration: 1000
    });
});