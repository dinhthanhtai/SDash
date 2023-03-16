import Image from "next/image";
import { useState } from "react";
import WalletDetail from "./WalletDetail";

function WalletTotal () {

    return (
        <div className="flex gap-4 mt-1 ">

            <div className=" flex justify-center bg-blue-400 rounded-full w-12 h-12 ">
                <Image className="mt-1 w-9 h-9" src="/images/wallet-icon.png" width={28} height={16} alt="wallet icon"/>
            </div>

            <div className="flex justify-center gap-4 text-white mt-2">
                    <h4>Wallet</h4> 
                    <p>$98</p>  
                <div>
                    <h3 className="border-2 border-blue-900 w-full h-15 p-1 rounded-lg bg-slate-900 cursor-pointer">BSC</h3>
                </div>
                <div>
                    <h3 className="border-2 border-blue-900 w-full h-15 p-1 rounded-lg bg-slate-900 cursor-pointer">MATIC</h3>
                </div>
            </div>


        </div>
    )
}

export default WalletTotal;