import React, { useState } from 'react'


const Person = ({contact}) => {
  console.log(contact)
  return(
  <div>{contact.name}: {contact.number}</div>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const nameInput = event => setNewName(event.target.value)
  const numberInput = event => setNewNumber(event.target.value)
  const searchInput = event => setSearchValue(event.target.value)

  const peopleToDisplay = searchValue.length > 0
  ? persons.filter(object => object.name.toLowerCase().includes(searchValue.toLowerCase()) )
  : persons
  const submitForm = event => {
    event.preventDefault()
    persons.map(object => object.name).includes(newName)
    ? alert(`${newName} already added to the phonebook`)  
    : setPersons(persons.concat({name: newName, number: newNumber}))   
      }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={searchValue} onChange={searchInput} />
      </div>
      <h2>Add new</h2>
      <form onSubmit={submitForm}>
        <div>
          name: <input value={newName} onChange={nameInput} />
        </div>
        <div>
          nubmer: <input value={newNumber} onChange={numberInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {peopleToDisplay.map(object => <Person key={object.name} contact={object} />)}
    </div>
  )
}

export default App