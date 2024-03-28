const welcome = document.getElementById('welcome')
let spinner = document.getElementById('absolute');
let opacity = 0;
let isFadingIn = true;

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
                welcome.classList.add('fade-out')
                spinner.style.opacity = opacity;
                opacity -= 0.01;
            } else {
                clearInterval(fade);
            }
        }, 200);
    }
}, 10);

const container = document.getElementById('container');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');

if (isFadingIn) {
setTimeout(function(){
    title.classList.add('drop-in')
    subtitle.classList.add('drop-in');

    container.addEventListener('click', function() {
        container.classList.add('zoom-away');
        setTimeout(function(){
            window.location.href = 'index.html';
        }, 2000);
    });
}, 3000);
}




