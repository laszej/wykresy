import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

export default function Jumbotron() {
  const router = useRouter();

  return (
    <div className="jumotron">
      <div className="jumbotron jumbotron-fluid" id="jumbotron">
        <div className="container">
          <h1 className="display-4">Renesans wartości</h1>
          <p className="lead">Witam wszystkich serdecznie na mojej stronie. Celem tej strony jest przedstawienie alternatywy wobec inwazyjnych ideologii i przemian społecznych, które są niezgodne z naturą ludzką, a które niestety zaczynają przeważać nad zdrowowym rozsądkiem i wrodzoną ludzką godnością. <br/><br/> Na stronie tej odnajdziecie państwo treści dotyczące: </p>
        <ul style={{marginLeft: "auto"}}>

          <li style={{display:"flex"}}>
            <Image src="/check.svg"
           alt="checked"
            height={20}
             width={20}/>
            <h5 className ="jumboItems" >ludzkich wartości przyrodzonych</h5>
             </li>

          <li style={{display:"flex"}}>
            <Image src="/check.svg"
             alt="checked"
              height={20} 
              width={20}/>
              <h5 className="jumboItems">jak ich bronić i dlaczego</h5>
               </li>

          <li style={{display:"flex"}}>
            <Image src="/check.svg"
             alt="checked"
              height={20}
               width={20}/>
               <h5 className="jumboItems">jak zmieni się świat w nadchodzących latach </h5>
                </li>

          <li style={{display:"flex"}}>
            <Image src="/check.svg"
             alt="checked"
              height={20}
               width={20}/>
               <h5 className="jumboItems">dlaczego to prawica musi mieć nadzór nad tymi zmianami </h5> </li>

               <li style={{display:"flex"}}>
            <Image src="/check.svg"
             alt="checked"
              height={20}
               width={20}/>
               <h5 className="jumboItems">szczypta bieżącej polityki, ale w sposób ciekawy</h5> </li>

    </ul>
    <div style={{display:"flex", flexWrap: "wrap"}}>
          <h5 style={{marginTop: "0.5rem"}}>Wstępnie odniosę się do tego na stronie <Link href="/about">moje poglądy i wnioski</Link></h5>
          </div>
        </div>
      </div>
    </div>
  );
}
