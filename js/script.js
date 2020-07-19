// Загрузочный экран и загрузка
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    let ss = document.getElementById("pink-line"), i = 0;
    let timer = setInterval(function () {
        ss.style.width = `${i}%`;
        document.getElementById("LoaderPercent").innerText = `${i}%`;
        if (i < 100) i += 5;
    }, 30)
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
        document.getElementById("scroll").classList.remove("no-scroll"); 
        document.documentElement.scrollTop = 0;
        clearInterval(timer);
    }, 1000);
}



// Эффект параллакса
function parallax(element, distanceX, distanceY, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translate(${distanceX * speed}px, -${distanceY * speed}px)`;
}

window.addEventListener('scroll', function () {
    parallax('.header-page-1', 0, window.scrollY, 0.3);
    parallax('.header-page-2', 0, window.scrollY, 0.6);
    parallax('.robot-animation', window.scrollY, window.scrollY, 0.5);
    parallax('.rob-animat', window.scrollY, window.scrollY, 0.3);
})

// Появления блоков при прокрутке
new WOW().init();

