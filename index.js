//getting the greeting button
const button = document.querySelector('button.greeting')

//getting the form
const form = document.querySelector('form')

//change the text of the second heading element to a 
//default response
function changeText(ev) {
    
    document.querySelector('#secondHeading').textContent = 'You changed the second heading text'

}

//change the text of the second heading element 
//to a custon response entered in the form
function changeTextCustom(ev) {

    //the second heading
    const secondHeading = document.querySelector('#secondHeading')

    //the text from the input textbox from the form
    const formInputText = document.querySelector('#textToChange').value

    //setting the second heading text to the form's input text
    secondHeading.textContent = formInputText

    //prevents the form from being submitted
    ev.preventDefault()

    //resetting the form after submission
    ev.target.reset()

}

//adding click event listener to the default 
//greetting button
button.addEventListener('click', changeText)

//adding a submit listener to the form (the submit process
//will be blocked in changeTextCustom)
form.addEventListener('submit', changeTextCustom)