//--------------------------------------------------------------
// Плавная анимация при скролле
$(document).ready(function() {

    //window and animation items
    var animation_elements = $.find('.animation-element');

    //check to see if any animation containers are currently in view
    function check_if_in_view() {
        //get current window information
        var window_top_position = $(window).scrollTop();
        var window_bottom_position = (window_top_position + $(window).height());

        //iterate through elements to see if its in view
        $.each(animation_elements, function() {

            //get the element sinformation
            var element = $(this);
            var element_height = $(element).outerHeight();
            var element_top_position = $(element).offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                element.addClass('in-view');
            } else {
                element.removeClass('in-view');
            }
        });
    }

    //on or scroll, detect elements in view
    $(window).on('scroll resize', function() {
            check_if_in_view()
        })
        //trigger our scroll event on initial load
    $(window).trigger('scroll');
});

//--------------------------------------------------------------

// Загрузочный экран и загрузка
let container = document.querySelector(".container");
window.onload = function() {


    document.body.classList.add('loaded_hiding');
    let ss = document.getElementById("pink-line"),
        i = 0;
    let timer = setInterval(function() {
        ss.style.width = `${i}%`;
        document.getElementById("LoaderPercent").innerText = `${i}%`;
        if (i < 100) i += 5;
    }, 30)
    window.setTimeout(function() {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
        document.getElementById("scroll").classList.remove("no-scroll");
        document.documentElement.scrollTop = 0;
        clearInterval(timer);
    }, 1000);
    container.style.display = "block";


}

// Эффект параллакса
function parallax(element, distanceX, distanceY, speed) {
    if (!document.body.classList.contains('loaded')) {
        console.log('not loaded');
        return;
    }

    const item = document.querySelector(element);
    item.style.transform = `translate(${distanceX * speed}px, -${distanceY * speed}px)`;
}
window.addEventListener('scroll', function() {
        parallax('.header-page-1', 0, window.scrollY, 0.3);
        parallax('.header-page-2', 0, window.scrollY, 0.4);
        parallax('.robot-animation', window.scrollY, window.scrollY, 0.5);
        parallax('.rob-animat', 0, window.scrollY, 0.9);
        // parallax('.description', 0, window.scrollY, 0.3);
    })
    //--------------------------------------------------------------



//--------------------------------------------------------------
// Медиа плеер (radio)
let radio = function() {
    this.index = 0;
    this.playlist = [];

    for (let i = 0; i < this.playlist.length; i++) {
        this.playlist[i].howl = new Howl({
            src: [this.playlist[i].file],
            onload: function() {
                console.log('loaded')
                const duration = this.playlist[i].howl.duration();
                durationRange.setAttribute('max', duration);

                playIcon.classList.remove('icon-spin4');
                playIcon.classList.add('icon-play');
            },
            onplay: function() {
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
            onpause: function() {
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
    play: function(index) {
        this.playlist[index].play();
    }
};

//--------------------------------------------------------------
// Green button
let o = document.querySelector('.news_player_header-content');
let t = 0;
let ArrowIcon = document.querySelector('#click i');
click.onclick = function() {
    if (!t) {
        o.style.display = 'flex';
        ArrowIcon.classList.remove('icon-angle-down');
        ArrowIcon.classList.add('icon-angle-up');
        t++;
    } else {
        o.style.display = 'none';
        ArrowIcon.classList.remove('icon-angle-up');
        ArrowIcon.classList.add('icon-angle-down');
        t--;
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


//--------------------------------------------------------------
let oldPageYOffset = 0;
console.log(oldPageYOffset)


const durationRange = document.querySelector('#duration_range');
let durationInterval;

let sound = new Howl({
    // src: ['https://share.dmca.gripe/Jcl2qfzkunPIxsKa.mp3', 'https://share.dmca.gripe/WljS2IFbIBlaoHwa.mp3'],
    onload: function() {
        console.log('loaded')
        const duration = sound.duration();
        durationRange.setAttribute('max', duration);

        playIcon.classList.remove('icon-spin4');
        playIcon.classList.add('icon-play');
    },
    onplay: function() {
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
    onpause: function() {
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
console.log(sound);