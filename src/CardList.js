import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
    
    const CardComponent = robots.map((user, index) => {
        return <Card key={index} id={user.id} name={user.name} email={user.email} />
    })

    return (
        <div>
            {CardComponent}
        </div>
    );
}

export default CardList;