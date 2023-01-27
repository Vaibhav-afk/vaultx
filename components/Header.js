import { getJsonWalletAddress } from 'ethers/lib/utils'
import React from 'react'

export default function Header({walletAddress,connectWallet}) {
  return (
    <div className='Header-Wrapper'>
      <div className='Header-Title'>Assets</div> 
      <div className='Header-ButtonsContainer'>
        <div className='Header-WalletLink'>
          <div className='Header-WalletLinkTitle'>
            Wallet Connected
          </div>
          <div className='Header-WalletAddress'>
            {walletAddress.slice(0,7)}...{walletAddress.slice(35)}
          </div>
        </div>
        <button className='Header-Button' style={{ backgroundColor: '#3773f5', color: '#000' }}>Buy / Sell</button>
        <button className='Header-Button'>Send / Receive</button>
      </div> 
    </div>
  )
}
