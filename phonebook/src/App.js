import React, { useState, useEffect } from 'react'
import Persons from './Persons'
import PersonForm from './PersonForm'
import Filter from './Filter'
import personServices from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchValue] = useState('')

  useEffect( () => {
    personServices.getAll()
    .then( allPersons => setPersons(allPersons))
    .catch(error => console.error('Unable to fetch persons', error))
  },[])

  const removePerson = id => {
    const user = persons.find(person => person.id === id)
    if (window.confirm(`Delete user ${user.name}?`))
    {
      personServices.remove(id)
      .then( () => setPersons(persons.filter(person => person.id !== id)))
      .catch(error => console.error('Unable to remove user ', error))
    }
    return
    }

  const peopleToDisplay = searchValue.length > 0
  ? persons.filter(object => object.name.toLowerCase().includes(searchValue.toLowerCase()) )
  : persons

  const searchInput = event => setSearchValue(event.target.value)
  const nameInput = event => setNewName(event.target.value)
  const numberInput = event => setNewNumber(event.target.value)
  
  const updateUser = () => {
    if(window.confirm(`${newName} already added to the phonebook, do you want to replace the existing number`))
        {
          const userToUpdate = persons.find(person => person.name === newName)
          const updatedUser = {...userToUpdate, number: newNumber}
          personServices.update(userToUpdate.id, updatedUser)
          .then( changedUser => setPersons(persons.map(person => person.id === changedUser.id ? changedUser : person)))
        }
  } 

  const createUser = () => {
    const newPerson = {name: newName, number: newNumber}
      personServices.create(newPerson)
      .then(savedPerson => setPersons(persons.concat(savedPerson)))
      .catch(error => console.error('Unable to save contact ',error))
  }

  const submitForm = event => {
    event.preventDefault()
    if (persons.map(object => object.name).includes(newName))
        updateUser()
    else
      createUser()
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
      <Persons peopleToDisplay={peopleToDisplay} removePerson={removePerson} />
    </div>
  )
}

export default App