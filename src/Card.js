import React from 'react'


const Card = (props) => {
    return (
        <div className='tc bg-light-blue dib br3 pa2 ma2 grow bw2 shadow-5'>
            <img alt='Robot' src={`https://robohash.org/${props.id}?200x200`}></img>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;