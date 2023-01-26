import { coins } from '@/static/coins'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

import Coin from "./Coin"

export default function Portfolio() {
  return (
    <div className='Portfolio-Wrapper'>
      <div className='Portfolio-Content'>
    
        <div className='Portfolio-TableItem'>
            <div className='Portfolio-Title'>Your Assets</div>
        </div>

        <div className='Portfolio-Divider'></div>

        <div className='Portfolio-Table'>
            <div className='Portfolio-TableItem'>
                <div className='Portfolio-TableRow'>

                    <div style={{flex:3}}>Name</div>
                    <div style={{flex:2}}>Balance</div>
                    <div style={{flex:1}}>Price</div>
                    <div style={{flex:1}}>Allocation</div>
                    <div style={{flex:0}}>
                        <div><BsThreeDotsVertical/></div>
                    </div>
        
                </div>
            </div>

            <div className='Portfolio-Divider'></div>

            <div>{coins.map((coin) => (
                <div>
                    <Coin coin={coin}/>
                    <div className='Portfolio-Divider'></div>
                </div>
            ))}</div>

        </div>
      </div>
    </div>
  )
}
