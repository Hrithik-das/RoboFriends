import React from 'react'

export default function card({name, email, id}) {
  return (
    <div className='tc dib bg-light-green pa3 ma2 br3 grow bw2 shadow-5  '>
        <img src={`https://robohash.org/${id}?200x200`} alt="Robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}
