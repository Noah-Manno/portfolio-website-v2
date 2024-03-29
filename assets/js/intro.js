let spinner = document.getElementById('absolute');
let opacity = 0;
let isFadingIn = true;
const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')
const forth = document.getElementById('forth')
const logo = document.getElementById('logo')

setTimeout(function(){
    first.classList.add('visible')  
}, 200);
setTimeout(function(){
    second.classList.add('visible')   
}, 700);
setTimeout(function(){
    third.classList.add('visible')   
}, 1200);
setTimeout(function(){
    forth.classList.add('visible')   
}, 1700);
setTimeout(function(){
    logo.classList.add('out')   
}, 2500);


let fade = setInterval(() => {
    if (isFadingIn) {
        if (opacity < 1) {
        spinner.style.opacity = opacity;
        opacity += 0.01;
        } else {
            isFadingIn = false;
        }
    } else {
        setTimeout(function(){
            if (opacity > 0) {
                spinner.style.opacity = opacity;
                opacity -= 0.01;
            } else {
                clearInterval(fade);
            }
        }, 200);
    }
}, 15);

const container = document.getElementById('container');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');

if (isFadingIn) {
setTimeout(function(){
    title.classList.add('drop-in')
    subtitle.classList.add('drop-in');
    setTimeout(function(){
        title.classList.remove('hidden')
        title.classList.remove('drop-in')
    }, 1700);

    container.addEventListener('click', function() {
        container.classList.add('zoom-away');
        setTimeout(function(){
            window.location.href = 'home.html';
        }, 2000);
    });
}, 3700);
}




