const button = document.querySelector('button.greeting')

function changeText(ev) {
    
    ev.target.textContent = 'Clickity Click'

}

button.addEventListener('click', changeText)