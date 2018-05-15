const button = document.querySelector('button.greeting')

const formButton = document.querySelector('#formSubmitButton')

function changeText(ev) {
    
    document.querySelector('#secondHeading').textContent = 'You changed the second heading text'

}

function changeTextCustom(ev) {

    const secondHeading = document.querySelector('#secondHeading')

    const formInputText = document.querySelector('#textToChange').value

    secondHeading.textContent = formInputText

}

button.addEventListener('click', changeText)

formButton.addEventListener('click', changeTextCustom)