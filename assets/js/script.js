const aboutMe = document.getElementById('one')
const contactMe = document.getElementById('six')
const myProjects = document.getElementById('two')
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

myProjects.addEventListener('click', function() {
    mainEl.classList.add('swap-gradient');
    containerEl.classList.add('swipe-right');
    
    setTimeout(function(){
        window.location.href = 'projects.html';
    }, 2000);
    
    });

contactMe.addEventListener('click', function() {
    mainEl.classList.add('swap-gradient');
    containerEl.classList.add('swipe-right');
    
    setTimeout(function(){
        window.location.href = 'contactMe.html';
    }, 2000);
    
});   

const htmlTag = document.getElementById('html-tag')
const headTag = document.getElementById('head-tag')
const titleTag = document.getElementById('title')
const headTagClose = document.getElementById('head-tag-close')
const bodyTag = document.getElementById('body-tag')
const headerTag = document.getElementById('header-tag')
const webDevTag = document.getElementById('web-dev-tag')
const headerTagClose = document.getElementById('header-tag-close')
const mainTag = document.getElementById('main-tag')
const pTag = document.getElementById('p-tag')
const mainTagClose = document.getElementById('main-tag-close')
const bodyTagClose = document.getElementById('body-tag-close')
const htmlTagClose =document.getElementById('html-tag-close')

htmlTag.textContent = '<html>' 
headTag.textContent = '<head>'
titleTag.textContent = '<title> Noah Manno Portfolio Website </title>' 
headTagClose.textContent = '</head>' 
bodyTag.textContent = '<body>' 
headerTag.textContent = '<header>' 
webDevTag.textContent = '<Web Developer>' 
headerTagClose.textContent = '</header>' 
mainTag.textContent = '<main>' 
pTag.textContent = '<p> My name is Noah Manno, and I am a passionate web developer who is dedicated to creating pixel perfect web applications. </p>' 
mainTagClose.textContent = '</main>'
bodyTagClose.textContent = '</body>' 
htmlTagClose.textContent = '</html>' 