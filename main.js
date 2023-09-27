let infoForm = document.getElementById('info-form')

infoForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    let firstName = document.getElementById("first-name")
    let lastName = document.getElementById("last-name")
    let email = document.getElementById("email")
    let age = document.getElementById("age")

    let nameTag = document.createElement('h1')
    nameTag.innerHTML = 'Name: ' + firstName.value + ' ' + lastName.value
    document.body.appendChild(nameTag)
    let emailTag = document.createElement('h1')
    emailTag.innerHTML = 'Email: ' + email.value
    document.body.appendChild(emailTag)
    let ageTag = document.createElement('h1')
    ageTag.innerHTML = 'Age: ' + age.value
    document.body.appendChild(ageTag)

    firstName.value = ''
    lastName.value = ''
    email.value = ''
    age.value = ''
}) 