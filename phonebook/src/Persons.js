import React from 'react'

const Person = ({contact, removePerson}) => {
    return(
    <div>{contact.name}: {contact.number}<button onClick={() => removePerson(contact.id)}>Delete</button></div>
    )
  }

const Persons = ({peopleToDisplay, removePerson}) => {
    return (
        <>
            {peopleToDisplay.map(object => <Person key={object.name} contact={object} removePerson={removePerson} />)}
        </>
    )
}

export default Persons