
// Появления блоков при прокрутке
new WOW().init();


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

// document.getElementBById("green-btn").onclick = function () {
//     let media = document.getElementsByClassName('news_player_header-wrapper');
//     media.style.display = 'block';

// }

var radio = function () {
    this.index = 0;
    this.playlist = [];

    for (let i = 0; i < this.playlist.length; i++) {
        this.playlist[i].howl = new Howl({
            src: [this.playlist[i].file],
            onload: function () {
                console.log('loaded')
                const duration = this.playlist[i].howl.duration();
                durationRange.setAttribute('max', duration);

                playIcon.classList.remove('icon-spin4');
                playIcon.classList.add('icon-play');
            },
            onplay: function () {
                console.log('playing');
                durationInterval = setInterval(() => {
                    if (!this.playlist[i].howl.playing()) {
                        return;
                    }

                    const seek = this.playlist[i].howl.seek();
                    durationRange.value = seek;
                }, 500);
                playIcon.classList.remove('icon-play');
                playIcon.classList.add('icon-pause');
            },
            onpause: function () {
                console.log('paused');
                playIcon.classList.remove('icon-pause');
                playIcon.classList.add('icon-play');
            },
            onseek() {
                console.log(this.playlist[i].howl.duration());
            },
            onend() {
                console.log('stp')
                clearInterval(durationInterval);
            }
        });
    }
}

radio.prototype = {
    play: function (index) {
        this.playlist[index].play();
    }
};

// Медиа плеер

let o;
let t = 0;
click.onclick = function () {
    t++;
    if (t % 2) {
        o = document.querySelector('.news_player_header-wrapper');
        o.style.display = 'block';
    }
    else {
        o.style.display = 'none';
    }
}


let playIcon = document.querySelector('.play_button i');

function musicToggle() {
    if (!sound.playing()) {
        sound.play();
    } else {
        sound.pause();
    }
}

function volumeChange(value) {
    sound.volume(value);
}

function durationChange(value) {
    sound.seek(value);
}

// Эффект параллакса
function parallax(element, distanceX, distanceY, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translate(${distanceX * speed}px, -${distanceY * speed}px)`;
}

window.addEventListener('scroll', function () {
    parallax('.header-page-1', 0, window.scrollY, 0.3);
    parallax('.header-page-2', 0, window.scrollY, 0.3);
    parallax('.robot-animation', window.scrollY, window.scrollY, 0.5);
    parallax('.rob-animat', 0, window.scrollY, 0.9);
    // parallax('.description', window.scrollY, 0, 0.3);
})



const durationRange = document.querySelector('#duration_range');
var durationInterval;

var sound = new Howl({
    src: ['https://share.dmca.gripe/Jcl2qfzkunPIxsKa.mp3', 'https://share.dmca.gripe/WljS2IFbIBlaoHwa.mp3'],
    onload: function () {
        console.log('loaded')
        const duration = sound.duration();
        durationRange.setAttribute('max', duration);

        playIcon.classList.remove('icon-spin4');
        playIcon.classList.add('icon-play');
    },
    onplay: function () {
        console.log('playing');
        durationInterval = setInterval(() => {
            if (!sound.playing()) {
                return;
            }

            const seek = sound.seek();
            durationRange.value = seek;
        }, 500);
        playIcon.classList.remove('icon-play');
        playIcon.classList.add('icon-pause');
    },
    onpause: function () {
        console.log('paused');
        playIcon.classList.remove('icon-pause');
        playIcon.classList.add('icon-play');
    },
    onseek() {
        console.log(sound.duration());
    },
    onend() {
        console.log('stp')
        clearInterval(durationInterval);
    }
});

sound.autoUnlock = true;
// sound.volume(0.5);
const soundId = sound.play();
console.log(soundId);
console.log(sound)





