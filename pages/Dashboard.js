import React from 'react'
import Header from "../components/Header"

export default function Dashboard({address}) {
  return (
    <div className='Dashboard-Wrapper'>
      <div className='Dashboard-MainContainer'>
        <Header/>
      </div>
    </div>
  )
}
