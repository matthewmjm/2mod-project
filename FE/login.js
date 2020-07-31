const usernameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')
const submitButton = document.querySelector('#submit-button')
// console.log(submitButton)
submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    const username = usernameInput.value
    const password = passwordInput.value
    const token = login(username, password)
    window.location = 'index.html'

})


function login(username, password) {
    fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })
        .then(response => response.json())
        .then(result => {
            const user = JSON.stringify({
                id: result.user[0].id,
                token: `token-${result.user[0].user_name}`,
            })
            localStorage.setItem('token', user)
        })
}


// Rails.application.routes.draw do
//   get "dogs", to: "dogs#index"
//   get "dogs/:id", to: "dogs#show"
//   delete "dogs/:id:", to: "dogs#destroy"
//   update "dogs/:id", to: "dogs#update"
//   post "dogs", to: "dogs#create"
// end