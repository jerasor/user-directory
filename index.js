//form we are submitting
const form = document.querySelector('#userForm')

//takes in a color for parameter and returns a div element
//with the passed in color as its background
const renderColor = function(color) {

    //creating a div element
    const colorDiv = document.createElement('div')

    //setting its background color to color
    colorDiv.style.backgroundColor = color

    //giving it a width and height
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '1rem'

    //returning colorDiv
    return colorDiv

}

//takes in text (which it uses to set a list item 
//element textContent to) and childrenToAppend (which is an array
//of children elements to be appended to the list item)
//it then returns the list item it created
const renderListItem = function(text, childrenToAppend) {

    //creating a list item element and 
    //setting its textContent to text
    const listItem = document.createElement('li')
    listItem.textContent = text

    //if childrenToAppend was 
    //passed in (meaning it is defined)...
    if (childrenToAppend !== undefined) {
      
        //... then we loop through childrenToAppend and
        //append them to listItem
        for (let index = 0; index < childrenToAppend.length; index++) {
            
            const child = childrenToAppend[index];
            listItem.appendChild(child)
            
        }

    }

    //returning the listItem
    return listItem

}

//creates a list with the list items of name, 
//age and color (which is an array of input colors)
const renderList = function (name, age, colors) {

    //creating name list item
    const nameItem = renderListItem(`Name: ${name}`)

    //creating age list item
    const ageItem = renderListItem(`Age: ${age}`)

    //an array which will contain div elements 
    //with background colors
    const arrayOfDivColors = []

    //looping through colors
    for (let index = 0; index < colors.length; index++) {
        
        //getting the value of the colors at this index
        //this should be a color value like #e18700
        const color = colors[index].value;

        //rendering color (now a div element)
        //and adding it to arrayOfDivColors
        arrayOfDivColors[index] = (renderColor(color))
        
    }

    //creating color list item
    const colorItem = renderListItem('Favorite Colors: ', arrayOfDivColors)

    //creating the unorder list
    const list = document.createElement('ul')

    //adding each list item (name, age, and color)
    //to the list
    list.appendChild(nameItem)
    list.appendChild(ageItem)
    list.appendChild(colorItem)

    //returning the list
    return list

}

//adds a color input to the favorite colors
const addColor = function() {
    
    //getting the favoriteColors paragraph (this is the part
    //of the form where we ask for favorite colors)
    const colorInput = document.querySelector('#favoriteColorsParagraph')

    //adding another input color to colorInput's children elements
    const inputColorToAppend = document.createElement('input')
    inputColorToAppend.setAttribute('type', 'color')
    inputColorToAppend.setAttribute('name', 'favoriteColors')
    inputColorToAppend.setAttribute('value', '#000000')

    //creating some space between color inputs
    inputColorToAppend.style.marginLeft = '.3rem'

    colorInput.appendChild(inputColorToAppend)

}

//resets the favorite color input label and input
//to its original html
const resetFavoriteColors = function(){

    //getting the favoriteColors paragraph (this is the part
    //of the form where we ask for favorite colors)
    const colorInput = document.querySelector('#favoriteColorsParagraph')
    
    //emptying the colorInput of all of its children
    while (colorInput.hasChildNodes()) {
        colorInput.removeChild(colorInput.firstChild)
    }

    //recreating the label for the favorite color input
    const colorInputLabel = document.createElement('label')
    colorInputLabel.setAttribute('for', 'favoriteColors')
    colorInputLabel.textContent = 'Favorite colors:'

    //appending the colorInputLabel to the favorite color input
    colorInput.appendChild(colorInputLabel)

    //adding a color to the favorite color input
    addColor()

}

const handleSubmit = function(ev) {
    
    //preventing the form from its default submit
    ev.preventDefault()

    //f is the form we are targeting
    const f = ev.target

    //getting the values of the form's input elements
    const userName = f.userName.value
    const age = f.age.value

    //getting all of the inputs with name favoriteColors (this will return a Node list of inputs)
    const favoriteColors = document.querySelectorAll('input[name="favoriteColors"]')

    //creating the list from the form inputs
    const list = renderList(userName, age, favoriteColors)

    //adding the list to the html page 
    //(users is an empty div on that page)
    const users = document.querySelector('#users')
    users.appendChild(list)

    //resetting the form and colors and focusing on userName
    f.reset()
    resetFavoriteColors()
    f.userName.focus()
    
}

//adding a submit event listener to the form
form.addEventListener('submit', handleSubmit)

//the add favorite color button
const addColorButton = document.querySelector('#addFavoriteColor')

//we will now listen for when the add color button is clicked
addColorButton.addEventListener('click', addColor)