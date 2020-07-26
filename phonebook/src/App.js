import React, { useState } from 'react'
import Persons from './Persons'
import PersonForm from './PersonForm'
import Filter from './Filter'

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

  const peopleToDisplay = searchValue.length > 0
  ? persons.filter(object => object.name.toLowerCase().includes(searchValue.toLowerCase()) )
  : persons

  const searchInput = event => setSearchValue(event.target.value)
  const nameInput = event => setNewName(event.target.value)
  const numberInput = event => setNewNumber(event.target.value)
  
  const submitForm = event => {
    event.preventDefault()
    persons.map(object => object.name).includes(newName)
    ? alert(`${newName} already added to the phonebook`)  
    : setPersons(persons.concat({name: newName, number: newNumber}))
    setNewNumber('')
    setNewName('')  
  }  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchValue={searchValue} searchInput={searchInput} />
      <h2>Add new</h2>
      <PersonForm submitForm={submitForm} stateValues={[newName, newNumber]} inputHandlers={[nameInput, numberInput]}  />
      <h2>Numbers</h2>
      <Persons peopleToDisplay={peopleToDisplay} />
    </div>
  )
}

export default App