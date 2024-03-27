const aboutMe = document.getElementById('one')
const contactMe = document.getElementById('six')
const bioText = document.getElementById('bio-text')

bioText.textContent = '<Web Developer/>'

const mainEl = document.getElementById('main');
const containerEl = document.getElementById('container');

aboutMe.addEventListener('click', function() {
mainEl.classList.add('swap-gradient');
containerEl.classList.add('swipe-right');

setTimeout(function(){
    window.location.href = 'aboutMe.html';
}, 2000);

});

contactMe.addEventListener('click', function() {
    mainEl.classList.add('swap-gradient');
    containerEl.classList.add('swipe-right');
    
    setTimeout(function(){
        window.location.href = 'contactMe.html';
    }, 2000);
    
});   

const openBodyTag = document.getElementById('body-tag')
const openMainTag = document.getElementById('main-tag')
const openhTag = document.getElementById('h1-tag')
const explanationTag = document.getElementById('explanation')
const endMainTag = document.getElementById('end-main-tag')
const endBodyTag = document.getElementById('end-body-tag')

openBodyTag.textContent = '<body>'
openMainTag.textContent = '<main>'
openhTag.textContent = '<h1> Noah Manno <h1>'
explanationTag.textContent = '<p> A passionate web developer who makes pixel perfect web interfaces. <p>'
endMainTag.textContent = '</main>'
endBodyTag.textContent = '</body>'
