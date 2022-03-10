// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  const usernameInputRef = React.useRef();
  const [error, setError] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(usernameInputRef.current.value);
  }

  const handleChange = (event) => {
    const {value} = event.target;
    const isLowerCase = value === value.toLowerCase();
    setError(isLowerCase ? null : 'Username must be lower case');
  }

  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input ref={usernameInputRef} id="usernameInput" type="text" onChange={handleChange}/>
      </div>
      <div style={{color: 'red'}}>{error}</div>
      <button disabled={Boolean(error)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
