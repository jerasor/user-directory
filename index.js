const form = document.querySelector('#userForm')

const renderColor = function(color) {

    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '1rem'

    return colorDiv

}

const renderListItem = function(text, childToAppend) {

    const listItem = document.createElement('li')
    listItem.textContent = text

    if (childToAppend !== undefined) {
        
        for (let index = 0; index < childToAppend.length; index++) {
            
            const child = childToAppend[index];
            listItem.appendChild(child)
            
        }

    }

    return listItem

}

const renderList = function (name, age, color) {

    const nameItem = renderListItem(`Name: ${name}`)

    const ageItem = renderListItem(`Age: ${age}`)

    const colorItem = renderListItem('Favorite Color: ', [renderColor(color)])

    const list = document.createElement('ul')
    list.appendChild(nameItem)
    list.appendChild(ageItem)
    list.appendChild(colorItem)

    return list

}

const handleSubmit = function(ev) {
    
    ev.preventDefault()
    const f = ev.target
    const userName = f.userName.value
    const age = f.age.value
    const favoriteColor = f.favoriteColor.value

    const list = renderList(userName, age, favoriteColor)

    const users = document.querySelector('#users')
    users.appendChild(list)

    f.reset()
    f.userName.focus()
}

form.addEventListener('submit', handleSubmit)