import React from 'react'

const Person = ({contact}) => {
    return(
    <div>{contact.name}: {contact.number}</div>
    )
  }

const Persons = ({peopleToDisplay}) => {
    return (
        <>
            {peopleToDisplay.map(object => <Person key={object.name} contact={object} />)}
        </>
    )
}

export default Persons