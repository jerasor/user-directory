const button = document.querySelector('button.greeting')

function changeText(ev) {
    
    document.querySelector('#secondHeading').textContent = 'You changed the second heading text'

}

button.addEventListener('click', changeText)