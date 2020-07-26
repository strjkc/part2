import React from 'react'

const PersonForm = ({submitForm, inputHandlers, stateValues}) => {

    const [nameInput, numberInput] = inputHandlers
    const [newName, newNumber] = stateValues
    return (
        <>
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
        </>
    )
}

export default PersonForm