import React from 'react'

export const JoinScreen = ({start}) => {
  return (
    <div className='join-screen'>
        <h2>Join Quiz</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, corrupti.</p>
        <button  id='next-button' onClick={start}>Start</button>
    </div>
  )
}
