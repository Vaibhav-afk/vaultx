import React from 'react'

export default function Header() {
  return (
    <div className='Header-Wrapper'>
      <div className='Header-Title'>Assets</div> 
      <div className='Header-ButtonsContainer'>
        <button className='Header-Button' style={{ backgroundColor: '#3773f5', color: '#000' }}>Buy / Sell</button>
        <button className='Header-Button'>Send / Receive</button>
      </div> 
    </div>
  )
}
