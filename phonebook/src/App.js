import React, { useState, useEffect } from 'react'
import Persons from './Persons'
import PersonForm from './PersonForm'
import Filter from './Filter'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchValue] = useState('')

  useEffect( () => {
    axios
    .get('http://localhost:3001/persons')
    .then( response => { console.log(response); setPersons(response.data) })
  },[])


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