import React from 'react'
import Image from "next/image"
import { BsThreeDotsVertical } from 'react-icons/bs'

export default function Coin({coin}) {
  return (
    <div className='Coin-Wrapper'>
        <div>
            <div style={{flex:3}}>
                <div className='Coin-NameCol'>
                    <div className='Coin-Icon'>
                        <Image src={coin.logo} alt={coin.name} height={25} width={25} style={{objectFit:"cover"}}/>
                    </div>
                    <div className='Coin-Primary'>{coin.name}</div>
                    <div className='Coin-Secondary'>&nbsp;&nbsp;{coin.sign}</div>
                </div>
            </div>

            <div style={{flex: 2}}>
                <div className='Coin-Primary'>{'$'}{coin.balanceUsd}</div>
                <div className='Coin-Secondary'>{coin.balanceCoin} {coin.sign}</div>
            </div>

            <div style={{flex:1}}>
                <div className='Coin-Primary'>{'$'}{coin.balanceUsd}</div>
                <div style={{color: coin.change < 0 ? '#f0616d' : '#26ad75'}}>
                    {coin.change > 0 && '+'}
                    {coin.change}%
                </div>
            </div>

            <div style={{flex: 1}}>{coin.allocation}%</div>
            <div style={{flex: 0}}><BsThreeDotsVertical/></div>
        </div>
    </div>
  )
}
