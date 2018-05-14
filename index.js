const button = document.querySelector('button.greeting')

function changeText() {
    
    const greetingParagraph = document.querySelector('p.greeting')

    greetingParagraph.textContent = 'You done clicked!'

}

button.addEventListener('click', changeText)