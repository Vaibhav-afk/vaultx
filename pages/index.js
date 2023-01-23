import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Dashboard from "./Dashboard";

export default function Home() {

  const address = useAddress();

  return (
    <>
    {address ?(
      <Dashboard address={address}/>
      ):(
      <div className="wallet">
      <ConnectWallet colorMode="light" className="walletButton"/>
      <div className="walletDetails">You need Chrome to be <br/> able to run this app.</div>
      </div>
      )
    }
    </>
  )
}
