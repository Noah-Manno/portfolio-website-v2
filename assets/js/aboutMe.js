const bioText = document.getElementById('bio-text')

bioText.textContent = '<Web Developer/>'

const nameEl = document.getElementById('name-box');
const mainEl = document.getElementById('main');
const containerEl = document.getElementById('container')
const contactmeEl = document.getElementById('contact-me')

nameEl.addEventListener('click', function() {
    mainEl.classList.add('swap-gradient')
    containerEl.classList.add('swipe-left')

    setTimeout(function(){
        window.location.href = 'index.html';
    }, 2000);
});

contactmeEl.addEventListener('click', function() {
    mainEl.classList.add('swap-gradient');
    containerEl.classList.add('swipe-down');
    console.log(containerEl)

    setTimeout(function(){
        window.location.href = 'contactMe.html';
    }, 2000);
});
