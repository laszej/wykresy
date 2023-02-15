import React from 'react'
import {useRouter} from 'next/router'
import { useState, useEffect } from 'react'

const Coin =  () => {

    const [coin, setCoin] = useState(null)

    const router = useRouter()
    const { id = '' } = router.query;
    console.log(id)

    

    const fetchCoin = async () =>{
    

        const response = await fetch("https://api.coinstats.app/public/v1/coins?skip=0")
        const data = await response.json()
        console.log(data)
        console.log(typeof data)
        console.log(data.coins)
        console.log(typeof id)
        let coins = data.coins
          return coins}

        const setOurCoin = async ()=>{
        const coins = await fetchCoin()
        const coin1 = coins.filter(coin=> coin.id == id)
        console.log(coin1)
        console.log(coin1)
        setCoin(coin1)}


useEffect(()=>{
    setOurCoin()
}, [id])
  return (
    <div><img src={coin.icon} alt={coin.name}/></div>
  )
}

export default Coin