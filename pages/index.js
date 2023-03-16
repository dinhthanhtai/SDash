import Head from 'next/head'
import Image from 'next/image'
import Accordian from '../components/asset-detail/Accordian'
import ChainMenu from '../components/asset-detail/ChainMenu'
import WalletTotal from '../components/asset-detail/WalletTotal'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <ChainMenu/>
      
      <Accordian />
    </>
    
  )
}
