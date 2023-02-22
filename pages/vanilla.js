import React from 'react'
import Link from 'next/link'
import styles from './vanilla.module.css'

const Vanilla = () => {
  return (
    <>
    <div className={styles.projectsContainer} style={{marginTop: '3rem'}}>

        <div className={styles.projects}><p><strong>Amazorron</strong><br/><br/>Frontendowy klon Amazona. Za bazę danych służy local storage przeglądarki. Projekt stworzony w &quot;czystej triadzie&quot; (HTML, CSS, JavaScript). Nie planuję rozwijać dalej. Czas na React! Poznajmy się lepiej!</p><br/>Przetestuj<Link href='https://laszej.github.io/amazorron2/' target='blank'><strong> tutaj</strong><br/><br/></Link><img src='/projects/amazorron.png' className={styles.pImages}/></div>
        
        <div className={styles.projects}><p><strong>Simple Chat App</strong><br/><br/>`Prosty czat oparty na popularnym json-server, który zainstalowałem w serwisie Heroku. Dostępny również poprzez aplikację na system Android.``  </p><br/>
            <div className={styles.leftRight}>
                <div>Przetestuj<Link href='https://laszej.github.io/chat/' target='blank'><strong> tutaj
                 </strong></Link></div>
                 <div>Pobierz na Android<Link href='https://drive.google.com/drive/folders/1z1aDtfu5iPta1-jawEi4ps9mtVjwDNtZ?usp=sharing' target='blank'><strong> tutaj</strong></Link></div></div><img src='/projects/chat.png'className={styles.pImages} /></div>
        
        
           <div className={styles.projects}><p><strong>NoteTaker</strong><br/><br/>npm run build
           Aplikacja webowa, z pomocą której zapiszesz ważne notatki w pamięci przeglądarki urządzenia</p><br/>Przetestuj<Link href='https://laszej.github.io/notetaker/' target='blank'><strong> tutaj</strong><br/><br/></Link><img src='/projects/notetaker.png' className={styles.pImages} /></div>


        <div className={styles.projects}><p><strong>Countries of the World</strong><br/><br/>Państwa i terytoria zależne świata wraz z najważniejszymi o nich  informacjami. Aplikacja korzysta z anglojęzycznego API, więc dla konsekwencji, całość w języku angielskim. </p><br/>Przetestuj<Link href='https://laszej.github.io/countries/' target='blank'> <strong>tutaj</strong><br/><br/></Link><img src='/projects/countries.png' className={styles.pImages} /></div> 
        
        <div className={styles.projects}><p><strong>Odgadnij nazwę Państwa</strong><br/><br/>Znasz wszystkie? :) Zadbałem o to, by pojawiły się w grze nazwy państw, o których wielu nie słyszało, ale spokojnie - wystarczy cierpliwość w podążaniu za prawidłową nazwą!</p><br/>Przetestuj<Link href='https://laszej.github.io/gra2/' target='blank'> <strong>tutaj</strong><br/><br/></Link><img src='/projects/odgadnij.png' className={styles.pImages} /></div>
        
        <div className={styles.projects}><p><strong>Kamień, papier, nożyce</strong><br/><br/>Popularna gra z dzieciństwa przeniesiona do świata wirtualnego :)  </p><br/><div className={styles.leftRight}>
                <div>Przetestuj<Link href='https://laszej.github.io/kamien/' target='blank'><strong> tutaj
                 </strong></Link></div>
                 <div>Pobierz na Android<Link href='https://drive.google.com/file/d/11j6ouvHx0ejfoN3hS_XZayYVAuVcOUIS/view?usp=sharing' target='blank'><strong> tutaj</strong></Link></div></div><img src='/projects/kamień.png'className={styles.pImages} /> </div>
        
        <div className={styles.projects}><p><strong>Gorączka złota</strong><br/><br/>Gra, w której przemieszczamy się postacią i zbieramy złoto. Działa również na smartfonach, ale przeznaczona raczej na desktopy. Planuje rozbudować i lepiej zoptymalizować pod kątem urządzeń mobilnych po opanowaniu canvas</p><br/>Przetestuj<Link href='https://laszej.github.io/gra1/' target='blank'> <strong>tutaj</strong><br/><br/></Link><img src='/projects/złoto.png' className={styles.pImages} /></div>

           <div className={styles.projects}><p><strong>Liquid calculator</strong><br/><br/>Aplikacja webowa, dzięki której obliczysz jaką moc liquidu otrzymasz po zmieszaniu dwóch baz nikotynowych o różnej wielkości i mocy.</p><br/>Przetestuj<Link href='https://laszej.github.io/liquidcalc/' target='blank'> <strong>tutaj</strong><br/><br/></Link><img src='/projects/liquidcalc.png' className={styles.pImages} /></div>

           <div className={styles.projects}><p><strong>Kalkulator</strong><br/><br/>Jedna z pierwszych aplikacji, które napisałem (zapewne nie ja jedyny). Podszedłem do tematu używając eventów i użyłem stosunkowo krótkiego kodu jak na kalkulator. Banalny projekt dla początkujących, a jednak często odpalam tę apkę gdy nie chcę zaśmiecać kalkulatora systemowego na desktopie.</p><br/>Przetestuj<Link href='https://laszej.github.io/calculator/' target='blank'> <strong>tutaj</strong><br/><br/></Link><img src='/projects/calculator.png' className={styles.pImages} /></div> 
        

        

        
        
        
         

         
           
    </div>

    </>
  )
}

export default Vanilla