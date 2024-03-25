const aboutMe = document.getElementById('one')
const myProjects = document.getElementById('two')
const myMusic = document.getElementById('three')
const github = document.getElementById('four')
const linkin = document.getElementById('five')
const contactMe = document.getElementById('six')
const mainContainer = document.getElementById('container')

aboutMe.addEventListener('click', function() {
    mainContainer.classList.add('leave')
})