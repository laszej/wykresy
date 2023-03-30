import Image from "next/image"
import Link from "next/link"
import Comments from "../components/Comments";
import Head from "next/head";

const Gallery = () => {

  const handlePortfolioClick = () => {
    const portfolioDropdown = document.querySelector('.dropdown-menu');
    const navbarCollapse = document.querySelector('#navbarNav');
  
    if (portfolioDropdown.classList.contains('show')) {
      portfolioDropdown.classList.remove('show');
      navbarCollapse.classList.remove('show');
    } else {
      portfolioDropdown.classList.add('show');
      navbarCollapse.classList.add('show');
    }
  };


  return (

   
    <div className="gridGalleryContainer">

    <div className="jumbotron jumbotron-fluid" id="gridGalleryJumbo">
      <div className="container text-center">
          <h1 className="display-4 mt-4">Moje poglądy</h1>
      </div>

    <div style={{display: "flex", marginTop:"2rem"}}>
    <Image src="pis.svg"alt="PiS" height={60} width={60} style={{marginRight:"1rem"}}/>
        <h5 className="jumboItems"> Członek partii <strong>Prawo i Sprawiedliwość.</strong> Dokładnie od 19 czerwca 2017 r. Partia ta jako jedyna jest poważną i stabilną siłą polityczną w Polsce, w której odnaleźć się może osoba o moim światopoglądzie. </h5>
        </div>
      <hr className="my-10" />

      <div style={{display: "flex", marginTop:"2rem"}}>
      <Image src="/check.svg"alt="checked" height={20} width={20}/>
        <h5 className="jumboItems"> <strong>Katolik</strong> bardzo daleki od ideału, ale od zawsze  &quot;odczuwający&quot; Boską obecność. Uważający ateizm za najwyższą formę naiwności.</h5>
        </div>
      <hr className="my-10" />

      <div style={{display: "flex", marginTop:"2rem"}}>
      <Image src="/check.svg"alt="checked" height={20} width={20}/>
        <h5 className="jumboItems"><strong>Tradycyjna gradacja wartości.</strong> Nie jestem w stanie roztrzygnąć czy największy wpływ mają tu cechy wrodzone czy też wychowanie w duchu tych wartości czy po prostu trzeźwe rozumowanie kim jest człowiek i co w jego życiu powinno być najważniejsze, co ważne, a co jest bezwartościowe.<br/><br/>
        
        Otrzymałem solidną edukację w zakresie historii myśli polityczno-prawnej. Na swojej życiowej ścieżce poznałem również ludzi o rozmaitych poglądach (i zachowaniach). Oczywiście, pamięć bywa zawodna, ale od Platona, przez Hegla, Marksa aż do Czerwonych Khmerów, nabyłem wiedzę i nie miało to większego wpływu na moją osobę. Pozostaje pod pewnym wpływem poglądów Lon Luvois Fullera, ale uznaje je za trochę życzeniowe i trudne do implementacji. Uważam, że wierność wartościom naturalnym i umiarkowanie są drogą, którą iść <strong>warto</strong>. 
        </h5>
        </div>
        <hr className="my-10" />

        <div style={{display: "flex", marginTop:"2rem"}}>
      <Image src="/check.svg"alt="checked" height={20} width={20}/>
        <h5 className="jumboItems"><strong>Wyzwania już teraz.</strong> Temat bardzo długi. Bardziej od tego, że ilość nowonarodzonych Polaków spada, martwi mnie kompletny rozkład instytucji Rodziny. Dzieci, które wychowują się od maleńkości w rodzinach niepełnych, konkubinatach, często w patologii &quot;pełną gębą&quot; i instytucje państwowe (Sądy), które wbrew zapisom Konstytucji (i wbrew interesowi Państwa oraz Narodu) promują i nagradzają taką degrengoladę. Władza sądowa, która działa przeciwko Państwu i swym Obywatelom. Koniec końców - przeciwko Narodowi. To szaleństwo może ograniczyć władza ustawodawcza.  <br/><br/>
        
        <strong>Ucieczka od podmiotowości obywateli.</strong> Ponownie szerszy temat, więc zaprezentuje tylko mały wycinek: zarówno portale społecznośiowe jak i smartfony są projektowane dokładnie tak, by wprowadzić nas w rzeczywistość alternatywną, zantagonizować, zdobyć o nas dane (waluta XXI wieku) i ogłupić. Przeciętny smartfon jest całkiem wydajnym komputerem, ale stworzonym wyłącznie po to byśmy konsumowali i tworzyli bezwarrtościowe treści. Mało to, człowiek na portalach społecznościowych zamienia się na własne życzenie w produkt. Najwybitniejszym tego przykładem jest bodaj instagram. Człowiek, który na własne życzenie sprowadza swoją osobę do zdjęć (oczywiście tylko tych najlepszych, jakie uda się zrobić) i do lajk buttona? To ma być miara tego, kim jesteśmy? Ucieczka od podmiotowości jest tematem znacznie szerszym. Podaje tylko przykład, z którym przypuszczalnie każdy, kto czyta ten tekst ma styczność (choć może nie zdawać sobie sprawy, że portale społecznościowe gromadzą danę o <strong>każdym</strong> naszym zachowaniu na stronie).<br/><br/>

        <strong>Powrót marksizmu</strong> niekiedy nazywanego neomarksizmem. Połączenie &quot;nowych&quot; inwazyjnych ideologii (które mocno relatywizują człowieczeństwo) wraz z pozbawieniem ludzi &quot;na ich własne życzenie&quot; podmiotowości plus rozwój sztucznej inteligencji (AGI/GAI), która musi doprowadzić do załamania rynku pracy w ciągu kilku, góra kilkunastu lat, stwarza idealne warunki do powrotu myśli komunistycznej. Nawet przy zachowaniu formalnej wolności jednostki, jej faktyczna wolność może stać się niewiele warta, gdy procesy gospodarcze zostaną kompletnie zautomatyzowane. Jeśli prawica zignoruje to zagrożenie, to władzę będą zdobywali neomarksiści, którzy opodatkują zautomatyzowane korporacje i wydadzą ludziom dochód podstawowy (który niekoniecznie musi być taki niski) w zamian za &quot;punkty poprawności politycznej&quot;. Takie zjawiska obserwujemy już dzisiaj np. w Chinach, które błędnie są nazywane państwem autorytarnym. Jest to komunistyczne państwo totalitarne, potężnie wsparte nowoczesnymi technologiami, które kontrolują <span style={{ textDecoration: "line-through" }}>obywateli</span> mieszkańców. W okolicznościach, o których wspominam nawet formalna demokracja faktycznie nie będzie różniła się zbytnio od komunistycznych Chin. Obserwujcie Chiny, a dowiecie się, gdzie sami za chwilę żyć możecie.  <br/><br/>

        <hr className="my-10" />
        
        Wiem, pewnie myślicie, że przydługawo i &quot;pewnie przesadza&quot;. <br/><br/>
        
        Nie sądzę.<br/><br/> Tematy, które dziś rozgrzewają dyskurs polityczny w Polsce rzecz jasna, będę poruszał, ale staram się patrzeć <strong>również</strong> we wcale tak nieodległą przyszłość.
        
        </h5>



        </div>
      <hr className="my-10" />

     

        <div style={{display: "flex", flexDirection: "column", marginLeft:"2rem"}}>
        <p className="lead" style={{marginTop:"2rem"}}> Zapraszam do odwiedzenia mojego</p>
        <Link href="#" className="btn btn-primary btn-lg"
         style={{marginLeft: "2rem", marginTop: "1rem", maxWidth: "150px"}}
         onClick={handlePortfolioClick}>
        bloga
        </Link>
        </div>

    
  
    </div>
   

  
   
   

    <div className="container" style={{marginTop:"2rem", maxWidth: "40%", marginLeft: "auto", marginRight:"1rem"}}>
    <h1 style={{textAlign: "center"}}>Obecnie</h1>  
      <div className="row">
        <div className="col -md-4 gridGallItem" >
          <img src="/grid/html.PNG" alt="Image 1" width={300} height={200}style={{width: "100%", height: "100%"}} />
        </div>
        <div className="col-md-4 gridGallItem" >
          <img src="/grid/css.PNG" alt="Image 2" width={300} height={200} style={{width: "100%", height: "100%"}}/>
        </div>
        <div className="col-md-4 gridGallItem">
          <img src="/grid/javascript.PNG" alt="Image 3" width={300} height={200} style={{width: "100%", height: "100%"}}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 gridGallItem">
          <img src="/grid/bootstrap.PNG" alt="Image 4" width={300} height={200} style={{width: "100%", height: "100%"}}/>
        </div>
        <div className="col-md-4 gridGallItem">
          <img src="/grid/react.PNG" alt="Image 5" width={300} height={200} style={{width: "100%", height: "100%"}}/>
        </div>
        <div className="col-md-4 gridGallItem">
          <img src="/grid/next.PNG" alt="Image 6" width={300} height={200} style={{width: "100%", height: "100%"}}/>
        </div>
        <div className="col-md-6 gridGallItem">
          <img src="/grid/cordova.PNG" alt="Image 4" width={300} height={200} style={{width: "100%", height: "100%"}}/>
        </div>
       
        <div className="col-md-6 gridGallItem">
          <img src="/grid/electron.PNG" alt="Image 6" width={300} height={200} style={{width: "100%", height: "100%"}}/>
        </div>
      </div>
      <h1 style={{marginTop: "2rem", textAlign: "center"}}>Mocno zainteresowany</h1>    

      <div className="row">
        <div className="col -md-4 gridGallItem" >
          <img src="/grid/typescript.PNG" alt="Image 1" width={300} height={200}style={{width: "100%", height: "100%"}} />
        </div>
        <div className="col-md-4 gridGallItem" >
          <img src="/grid/node.PNG" alt="Image 2" width={300} height={200} style={{width: "100%", height: "100%"}}/>
        </div>
        <div className="col-md-4 gridGallItem">
          <img src="/grid/express.PNG" alt="Image 3" width={300} height={200} style={{width: "100%", height: "100%"}}/>
        </div>

        </div>

        <div className="row">
        <div className="col -md-4 gridGallItem" >
          <img src="/grid/mongo.PNG" alt="Image 1" width={300} height={200}style={{width: "100%", height: "100%"}} />
        </div>
        <div className="col-md-4 gridGallItem" >
          <img src="/grid/native.PNG" alt="Image 2" width={300} height={200} style={{width: "100%", height: "100%"}}/>
        </div>
        <div className="col-md-4 gridGallItem">
          <img src="/grid/data1.PNG" alt="Image 3" width={300} height={200} style={{width: "100%", height: "100%"}}/>
        </div>

        
        </div>
    <Comments collection="aboutpage"/>

    </div>

    
    </div>
  
    )}







    

export default Gallery


