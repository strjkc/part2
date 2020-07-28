import React from 'react'

const ListOfCountries = ({country, setCountries}) => {
    return(
        <div>
          {country.name}
          <button onClick={ () => setCountries([country])}>show</button>
        </div>
        )
}

export default ListOfCountries