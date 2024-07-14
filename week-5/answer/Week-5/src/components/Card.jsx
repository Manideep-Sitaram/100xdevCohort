import React from 'react'

function Card({name,description,intrests}) {
  return (
    <div className='card'>
        <h3>{name}</h3>
        <p>{description}</p>
        <h4>Intrests</h4>
        <ul>
            {
                intrests.map((intrest,index) => {
                    return <li key={index}>{intrest}</li>
                })
            }
        </ul>
        <span>
            <button>LinkedIn</button>
            <button>Twitter</button>
        </span>

    </div>
  )
}

export default Card