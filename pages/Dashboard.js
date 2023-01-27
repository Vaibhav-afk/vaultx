import Sidebar from '@/components/Sidebar'
import React from 'react'
import Header from "../components/Header"
import Main from "../components/Main"

export default function Dashboard({address}) {
  return (
    <div className='Dashboard-Wrapper'>
      <Sidebar/>
      <div className='Dashboard-MainContainer'>
        <Header walletAddress={address}/>
        <Main/>
      </div>
    </div>
  )
}
