import React from 'react'
import state from '../store'

const Last = () => {
  const open = ()=>{
    state.show3dOnly=true
  }
  return (
    <section id='section3'>
      <div className="hero">
        <p>New</p>
        <h1>Brilliant</h1>
        <h6>A display that`s upto 2x brighter</h6>
        <div className="button-holder">
          <button className="btn1" onClick={open}>Try me in 3d</button>
        </div>
      </div>
      <div className="blank"></div>
    </section>
  )
}

export default Last