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

const cellphoneEl = document.getElementById('cellphone');
const confirmationClipboard = document.getElementById('confirmation-clipboard');
cellphoneEl.addEventListener('click', copyPhoneNumber);

function copyPhoneNumber() {
    navigator.clipboard.writeText('609-235-8826');
    confirmationClipboard.style = 'visibility: visible';
    alert('Copied, Please feel free to reach out!');
}