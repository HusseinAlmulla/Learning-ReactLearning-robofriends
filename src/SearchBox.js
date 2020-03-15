import React from 'react'

const SearchBox = ({searchChange}) =>{
    return(
        <div>
            <input  className='pa3 ba b--green bg-light-blue' type='search' placeholder=' Search robot' onChange={searchChange}/>
        </div>
    )
}

export default SearchBox;