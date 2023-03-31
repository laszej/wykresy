import React from 'react'
import Link from 'next/link'

const index = () => {
  return (
    <div><h1>Wybierz konkretny adres, by wyświetlić bloga</h1>
    <p>Niektóre z dostępnych blogów:</p>
    <Link href="/blogs/second">Minister Czarnek w Poznaniu</Link>
    <br/><br/>
    <Link href="/blogs/first">Nowy Pełnomocnik</Link>
    </div>
  )
}

export default index