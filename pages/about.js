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

   <div id="aboutPage">
  

    <div className="jumbotron jumbotron-fluid" id="gridGalleryJumbo">
      <div className="container text-center">
          <h1 className="display-4 mt-4">Moje poglądy</h1>
      </div>

    <div style={{display: "flex", marginTop:"2rem"}}>
    <Image src="new.svg"alt="PiS" height={60} width={60} style={{marginRight:"1rem"}}/>
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
        <h5 className="jumboItems">
        Z wielką uwagą obserwuje <strong>zmiany</strong> jakie zachodzą w świecie oraz ich dynamikę. Nigdy w historii ludzkości w trakcie życia jednostki nie dochodziło do tak ogromnych przeobrażeń technologicznych i społeczno-gospodarczych. Myśl konserwatywna musi za tymi zmianami nadążyć i im przewodzić zamiast się biernie&quot;przyglądać&quot;. Unikanie tematu sprawia, że warunki dyktują ideologie lewicowe.</h5></div>
         

        <hr className="my-10" />
        <div style={{display: "flex", marginTop:"2rem"}}>
        <Image src="/check.svg"alt="checked" height={20} width={20}/>
        <h5 className="jumboItems"> Oczywiście, będę również bardzo mocno skupiał się na tematach dużo bliższych Czytelnikowi. Proszę obserwować blog, który zalinkuje poniżej.
        
        </h5></div>

      <hr className="my-10" />
    

     
        
            
           <div style={{display: "flex", flexDirection: "column", justifyContent:"center"}}>
            <p className="lead" style={{marginTop:"2rem", marginBottom:"2rem"}}> Zarówno bieżące informacje jak i moje przemyślenia zamieszczam na swoim </p>
            <Link href="#" className="btn btn-primary btn-lg"
             style={{marginLeft: "2rem", marginTop: "1rem", maxWidth: "150px"}}
             onClick={handlePortfolioClick}>
              blogu
            </Link>
            <Comments collection="politicalAboutPage"/>
        </div>
        
  
    </div>
   

  
   
   

    <div id="aboutRightSide">

    <h1 style={{marginTop:"2rem"}}>Polak</h1>
    <img src='/flaga.svg' id="flaga"/>
    <h1 style={{marginTop:"2rem"}}>Poznaniak</h1>
    <img src='/poznań.svg' id="flaga"/> 
    <h1 style={{marginTop:"2rem"}}>Działacz PiS</h1>
    <img src='/new.svg' id="flaga" style={{marginBottom:"2rem", width: "90%"}}/> 
    
    

    </div>

    </div>

  
    )}







    

export default Gallery


