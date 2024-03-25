const container = document.getElementById('container')

container.addEventListener('click', function() {
    container.classList.add('zoom-away');

    setTimeout(function(){
        window.location.href = 'index.html';
    }, 2000);
});