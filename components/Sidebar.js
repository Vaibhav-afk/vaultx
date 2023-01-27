import React,{useState} from 'react'
import Image from 'next/image';
import CoinbaseLogo from '../assets/cb-logo.png'
import { navItems } from '../static/navItems'

export default function Sidebar() {

    const [activeIcon, setActiveIcon] = useState(navItems[0].title);

  return (
    <div className='Sidebar-Wrapper'>
        <div className='Sidebar-LogoContainer'>
            <div className="Sidebar-Logo">
                <Image src={CoinbaseLogo} alt='Coinbase Logo' height={32} width={150}/>
            </div>
        </div>

        <div className='Sidebar-NavItemsContainer'>
        {navItems.map((item,idx) => (
            <div key={idx} className='Sidebar-NavItems' onClick={() => setActiveIcon(item.title)}>
                <div className='Sidebar-NavIcon' style={{color: item.title === activeIcon && '#3773f5'}}>
                    {item.icon}
                </div>
                <div className='Sidebar-NavTitle'>
                    {item.title}
                </div>
            </div>
        ))
        }
        </div>
    </div>
  )
}
