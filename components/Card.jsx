import React from 'react'

const Card = ({ coins }) => {
  return (
    <>
        {coins?.map((item, index) => (
        <div key={index} className='flex spacing box'>
            
            <div className='flex header'>
                <p>{item.rank} {item.symbol}</p>
                <img src={item.icon} />
            </div>
            <div>
                <p>Name: {item.name}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
            </div>
             
        </div>
        
      ))}
    </>
  )
}

export default Card