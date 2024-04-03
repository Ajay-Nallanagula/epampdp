npm install @mui/material @emotion/react @emotion/styled 

**What is emotion w.r.t react?**
https://emotion.sh/docs/introduction
*Emotion is a library designed for writing css styles with JavaScript. It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities. Both string and object styles are supported.*

There are two primary methods of using Emotion. The first is framework agnostic and the second is for use with React.

Framework Agnostic: npm i @emotion/css
With React: npm i @emotion/react

For examples see the documentation.

React Authentication:
https://dev.to/miracool/how-to-manage-user-authentication-with-react-js-3ic5


How do you encrypt the login password?
https://medium.com/boca-code/how-to-encrypt-password-in-your-react-app-before-you-send-it-to-the-api-6e10a06f0a8e
import bcrypt from 'bcryptjs'

// SALT should be created ONE TIME upon sign up
const salt = bcrypt.genSaltSync(10)
// example =>  $2a$10$CwTycUXWue0Thq9StjUM0u => to be added always to the password hash

function App() {
  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  function handleLoginForm() {
    const email = emailInputRef.current.value
    const password = passwordInputRef.current.value
    const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u') // hash created previously created upon sign up

    fetch('https://api.sampleapis.com/beers/ale', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: hashedPassword,
      }),
    })
  }

  <span>Your new SALT: {salt}</span>
        <br />
        <span>
          Save this Salt, UPON sign up <br /> if you refresh it will generate a new SALT!!!
        </span>