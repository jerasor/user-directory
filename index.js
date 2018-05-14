const button = document.querySelector('button.greeting')

const form = document.querySelector('form')

function changeText(ev) {
    
    document.querySelector('#secondHeading').textContent = 'You changed the second heading text'

}

function changeTextCustom(ev) {

    const secondHeading = document.querySelector('#secondHeading')

    const formInputText = ev.target.querySelector('input').value

    secondHeading.textContent = formInputText

    //this will prevent the submit button from 'refreshing' the page
    ev.preventDefault()

}

button.addEventListener('click', changeText)

form.addEventListener('submit', changeTextCustom)