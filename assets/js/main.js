$(document).ready(function () {
    $(".typed").typed({
        strings: ["생각이 없어요.", "생각하고 싶지 않아요.", "생각하기 귀찮아요.", "숨쉬기도 귀찮아요.", "잠자기도 귀찮아요.", "생선스프입니다."],
        stringsElement: null,
        typeSpeed: 120,
        startDelay: 0,
        backSpeed: 80,
        backDelay: 800,
        loop: true,
        showCursor: false
    });
});