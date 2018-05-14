const button = document.querySelector('button.greeting')

function changeText(ev) {
    
    document.querySelector('h1').textContent = 'You changed the first heading text'

}

button.addEventListener('click', changeText)