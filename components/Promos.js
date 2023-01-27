import React from 'react'

export default function Promos() {
  return (
    <div className='Promos-Wrapper'>
        <div className='Promos-OfferCard'>
            <div className='Promos-Title'>
                Yield earned
            </div>
            <div className='Promos-Description'>Earn upto 3.14% APY on your cypto</div>
            <div className='Promos-Placeholder'></div>
            <div className='Promos-Additional' style={{size:"1.5rem"}}>
                $0.000066 <span>3.14% APY</span>
            </div>
        </div>
        
        <div className='Promos-OfferCard'>
            <div className='Promos-Title'>
                Learn and Earn
            </div>
            <div className='Promos-Description'>Earn upto 3.14% APY on your cypto</div>
            <div className='Promos-Placeholder'></div>
            <div className='Promos-Additional' style={{color:"#3773f5"}}>
                Verify Identity
            </div>
        </div>
    </div>
  )
}
