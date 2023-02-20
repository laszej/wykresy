import styles from "portfolio.module.css"

export default function Projects() {
  return (
    
    <div id="projects-container">
      <div className={styles.projects}>
        <p>
          <strong>Amazorron</strong>
          <br />
          <br />
          Frontendowy klon Amazona. Za bazę danych służy local storage przeglądarki.
          Projekt stworzony w "czystej triadzie" (HTML, CSS, JavaScript). Nie planuję rozwijać dalej. Czas na React! Poznajmy się lepiej!
        </p>
        <br />
        <a href="https://laszej.github.io/amazorron2/" target="blank">
          <strong>Przetestuj tutaj</strong>
          <br />
          <br />
        </a>
        <img src="/projects/amazorron.png" className={styles['p-images']} />
      </div>

      <div className={styles.projects}>
        <p>
          <strong>Simple Chat App</strong>
          <br />
          <br />
          Prosty czat oparty na popularnym json-server, który zainstalowałem w serwisie Heroku. Dostępny również poprzez aplikację na system Android.
        </p>
        <br />
        <div className={styles['left-right']}>
          <div>
            <a href="https://laszej.github.io/chat/" target="blank">
              <strong>Przetestuj tutaj</strong>
            </a>
          </div>
          <div>
            <a href="https://drive.google.com/drive/folders/1z1aDtfu5iPta1-jawEi4ps9mtVjwDNtZ?usp=sharing" target="blank">
              <strong>Pobierz na Android tutaj</strong>
            </a>
          </div>
        </div>
        <img src="/projects/chat.png" className={styles['p-images']} />
      </div>

      <div className={styles.projects}>
        <p>
          <strong>NoteTaker</strong>
          <br />
          <br />
          Aplikacja webowa, z pomocą której zapiszesz ważne notatki w pamięci przeglądarki urządzenia
        </p>
        <br />
        <a href="https://laszej.github.io/notetaker/" target="blank">
          <strong>Przetestuj tutaj</strong>
          <br />
          <br />
        </a>
        <img src="/projects/notetaker.png" className={styles['p-images']} />
        </div>

      <div className={styles.projects}>
        <p>
          <strong>Countries of the World</strong>
          <br />
          <br />
          Państwa i terytoria zależne świata wraz z najważniejszymi o nich informacjami. Aplikacja korzysta z anglojęzycznego API, więc dla konsekwencji, całość w języku angielskim.
        </p>
        <br />
        <a href="https://laszej.github.io/countries/" target="blank">
          <strong>Przetestuj tutaj</strong>
          <br />
          <br />
        </a>
        <img src="/projects/countries.png" className={styles['p-images']} />
        </div>

        </div>

       
        
        )}

