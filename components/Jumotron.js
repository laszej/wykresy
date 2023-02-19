import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Jumbotron() {
  const router = useRouter();

  return (
    <div className="jumotron">
      <div className="jumbotron jumbotron-fluid" id="jumbotron">
        <div className="container">
          <h1 className="display-4">Technologie webowe</h1>
          <p className="lead">    Witam wszystkich serdecznie na mojej stronie! Jestem programistą korzystającym z technologii webowych do tworzenia: </p>
        <ul>
          <li style={{display:"flex"}}><Image src="/check.svg" alt="checked" height={20} width={20}/><h5 style={{marginLeft: "0.1rem"}}>Stron internetowych</h5> </li>

          <li style={{display:"flex"}}><Image src="/check.svg" alt="checked" height={20} width={20}/><h5 style={{marginLeft: "0.1rem"}}>Aplikacji webowych</h5> </li>

          <li style={{display:"flex"}}><Image src="/check.svg" alt="checked" height={20} width={20}/><h5 style={{marginLeft: "0.1rem"}}>Aplikacji mobilnych</h5> </li>

          <li style={{display:"flex"}}><Image src="/check.svg" alt="checked" height={20} width={20}/><h5 style={{marginLeft: "0.1rem"}}>Aplikacji desktopowych</h5> </li>

          <li style={{display:"flex"}}><Image src="/check.svg" alt="checked" height={20} width={20}/><h5 style={{marginLeft: "0.1rem"}}>Trzech ostatnich razem!</h5> </li>


    </ul>
          <button type="button" className="btn btn-primary" onClick={() => router.push('/about')}>
            o mnie
          </button>
        </div>
      </div>
    </div>
  );
}
