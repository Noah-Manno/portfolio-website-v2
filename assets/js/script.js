const aboutMe = document.getElementById('one')
const bioText = document.getElementById('bio-text')

bioText.textContent = '<Web Developer/>'

const mainEl = document.getElementById('main')
const containerEl = document.getElementById('container')

aboutMe.addEventListener('click', function() {
mainEl.classList.add('swap-gradient');
containerEl.classList.add('swipe-right');

setTimeout(function(){
    window.location.href = 'aboutMe.html';
}, 2000);

});

