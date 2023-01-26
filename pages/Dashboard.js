import React from 'react'
import Header from "../components/Header"
import Main from "../components/Main"

export default function Dashboard({address}) {
  return (
    <div className='Dashboard-Wrapper'>
      <div className='Dashboard-MainContainer'>
        <Header/>
        <Main/>
      </div>
    </div>
  )
}
