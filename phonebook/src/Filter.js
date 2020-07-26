import React from 'react'

const Filter = ({searchValue, searchInput}) => {
    
    return (
        <div>
            filter shown with: <input value={searchValue} onChange={searchInput} />
        </div>   
    )
}

export default Filter