const bioText = document.getElementById('bio-text')

bioText.textContent = '<Web Developer/>'

const nameEl = document.getElementById('name-box');
const mainEl = document.getElementById('main');
const containerEl = document.getElementById('container')
nameEl.addEventListener('click', function() {
    mainEl.classList.add('swap-gradient')
    containerEl.classList.add('swipe-left')

    setTimeout(function(){
        window.location.href = 'index.html';
    }, 2000);

});
