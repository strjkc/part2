import React, { useState } from 'react'


const Person = ({name}) => {
  return(
    <div>{name}</div>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const nameInput = event => setNewName(event.target.value)
  
  const submitForm = event => {
    event.preventDefault()
    const listOfNames = persons.map(object => object.name)
    if (listOfNames.includes(newName)){
      alert(`${newName} already added to the phonebook`)  
    } else {
      const newPerson = {name: newName}
      setPersons(persons.concat(newPerson))  
    } 
      }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitForm}>
        <div>
          name: <input value={newName} onChange={nameInput} />
        </div>
        <div>debug: {newName}</div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(object => <Person key={object.name} name={object.name} />)}
    </div>
  )
}

export default App