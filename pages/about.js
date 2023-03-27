import Image from "next/image"
import Link from "next/link"

const Gallery = () => {

  const handlePortfolioClick = () => {
    
  };


  return (
   
    <div className="gridGalleryContainer">

    <div className="jumbotron jumbotron-fluid" id="gridGalleryJumbo">
      <div className="container text-center">
          <h1 className="display-4 mt-4">Moge poglądy</h1>
      </div>

    <div style={{display: "flex", marginTop:"2rem"}}>
    <Image src="pis.svg"alt="PiS" height={60} width={60} style={{marginRight:"1rem"}}/>
        <h5 className="jumboItems"> Członek partii <strong>Prawo i Sprawiedliwość.</strong> Dokładnie od 19 czerwca 2017 r. Partia ta jako jedyna jest poważną i stabilną siłą polityczną w Polsce, w której odnaleźć się może osoba o moim światopoglądzie. </h5>
        </div>
      <hr className="my-10" />

      <div style={{display: "flex", marginTop:"2rem"}}>
      <Image src="/check.svg"alt="checked" height={20} width={20}/>
        <h5 className="jumboItems"> <strong>Katolik</strong> bardzo daleki od ideału, ale od zawsze  &quot;odczuwający&quot; Boską obecność. Intelektualnie, uważający ateistów za skrajnie naiwnych.</h5>
        </div>
      <hr className="my-10" />

      <div style={{display: "flex", marginTop:"2rem"}}>
      <Image src="/check.svg"alt="checked" height={20} width={20}/>
        <h5 className="jumboItems"><strong>Tradycyjna gradacja wartości.</strong> Nie jestem w stanie roztrzygnąć czy największy wpływ mają tu cechy wrodzone czy też wychowanie w duchu tych wartości czy po prostu trzeźwe rozumowanie kim jest człowiek i co w jego życiu powinno być najważniejsze, co ważne, a co jest bezwartościowe.<br/><br/>
        
        Otrzymałem solidną edukację w zakresie historii myśli polityczno-prawnej. Na swojej życiowej ścieżce poznałem również ludzi o rozmaitych poglądach (i zachowaniach). Oczywiście, pamięć bywa zawodna, ale od Platona, przez Hegla, Marksa aż do Czerwonych Khmerów, posiadam (posiadałem?) wiedzę i nie miało to większego wpływu na moją osobę. Pozostaje pod pewnym wpływem poglądów Lon Luvois Fullera, ale uznaje je za trochę życzeniowe i trudne do implementacji. Uważam, że wierność wartościom naturalnym i umiarkowanie są drogą, którą iść &quot;<strong>warto</strong>&quot;. 
        </h5>
        </div>
        <hr className="my-10" />

        <div style={{display: "flex", marginTop:"2rem"}}>
      <Image src="/check.svg"alt="checked" height={20} width={20}/>
        <h5 className="jumboItems"><strong>Wyzwania już teraz.</strong> Temat bardzo długi. Bardziej od tego, że ilość nowonarodzonych Polaków spada, martwi mnie kompletny rozkład instytucji Rodziny. Dzieci, które wychowują się od maleńkości w rodzinach niepełnych, konkubinatach, często w patologii &quot;pełną gębą&quot; i instytucje państwowe (Sądy), które wbrew zapisom Konstytucji (i wbrew interesowi Państwa oraz Narodu) promują i nagradzają taką degrengoladę. Władza sądowa, która działa przeciwko Państwu i swym Obywatelom. Koniec końców - przeciwko Narodowi. To szaleństwo może ograniczyć władza ustawodawcza. Nie robi tego. <br/><br/>
        
        <strong>Ucieczka od podmiotowości obywateli.</strong> Ponownie szerszy temat, więc zaprezentuje tylko mały wycinek: Jakkolwiek daleki jestem od krytykowania nowoczesnych technologii w ogóle, to należy mieć świadomość, że zarówno portale społecznośiowe jak i smartfony są projektowane dokładnie tak, by wprowadzić nas w rzeczywistość alternatywną, zantagonizować, zdobyć o nas dane (waluta XXI wieku) i ogłupić. Przeciętny smartfon jest całkiem wydajnym komputerem, ale stworzonym wyłącznie po to byśmy konsumowali i tworzyli bezwarrtościowe treści. Mało to, człowiek na takich portalach społecznościowych zamienia się na własne życzenie w produkt. Najwybitniejszym tego przykładem jest bodaj instagram. Człowiek, który na własne życzenie sprowadza swoją osobę do zdjęć (oczywiście tylko tych najlepszych, jakie uda się zrobić) i do lajk buttona? To ma być miara tego, kim jesteśmy? Ucieczka od podmiotowości jest tematem znacznie szerszym. Podaje tylko przykład, z którym przypuszczalnie każdy ten tekst czytający ma styczność<br/><br/>

        <strong>Powrót marksizmu</strong> niekiedy nazywanego neomarksizmem. Połączenie &quot;nowych&quot; inwazyjnych ideologii (które mocno relatywizują człowieczeństwo) wraz z pozbawieniem ludzi &quot;na ich własne życzenie&quot; podmiotowości plus rozwój sztucznej inteligencji (AGI lub GAI), która musi doprowadzić do załamania rynku pracy w ciągu kilku, góra kilkunastu lat, stwarza idealne warunki do powrotu myśli komunistycznej. Nawet przy zachowaniu formalnej wolności jednostki, jej faktyczna wolność może stać się niewiele warta, jeśli procesy gospodarcze zostaną kompletnie zautomatyzowane. Jeśli prawica zignoruje to zagrożenie, to władzę będą zdobywali neomarksiści, którzy opodatkują zautomatyzowane korporacje i wydadzą ludziom dochód podstawowy (który niekoniecznie musi być taki niski) w zamian za &quot;punkty poprawności politycznej&quot;. Takie zjawiska obserwujemy już dzisiaj np. w Chinach, które błędnie są nazywane państwem autorytarnym. Jest to komunistyczne państwo totalitarne, potężnie wsparte nowoczesnymi technologiami, które kontrolują <span style={{ textDecoration: "line-through" }}>obywateli</span> mieszkańców. W okolicznościach, o których wspominam nawet formalna demokracja faktycznie nie będzie różniła się zbytnio od komunistycznych Chin. Obserwujcie Chiny, a dowiecie się, gdzie sami za chwilę żyć będziecie.  </h5>



        </div>
      <hr className="my-10" />

        <p className="lead" style={{marginTop:"2rem"}}>Wiem, pewnie myślicie, że przydługawo i &quot;pewnie przesadza&quot;. &quot;Przecież on nie piszę o tym co w telewizji. Nie odnosi się do powszechnego dyskursu politycznego. Nie odnosi się do moich problemów&quot; <br/> Tych, którzy to robią jest wielu. Na pewno będę odnosił się do dyskursu polityczno-społeczno-gospodarczego dnia codziennego, ale to robią wszyscy.
         Ja staram się patrzeć <strong>również</strong> we wcale tak nieodległą przyszłość.</p>

        <div style={{display: "flex", flexDirection: "column"}}>
        <p className="lead" style={{marginTop:"2rem"}}> Zapraszam do odwiedzenia mojego</p>
        <Link href="#" className="btn btn-primary btn-lg"
         style={{marginLeft: "2rem", marginTop: "1rem", maxWidth: "150px"}}
         onClick={handlePortfolioClick}>
         portfolio
        </Link>
        </div>

    
  
    </div>
   

  
   
   

<div className="jumbotron jumbotron-fluid" id="gridGalleryJumbo1">
  <div className="container text-center">
      <h1 className="display-4 mt-4">Stąd wnioski</h1>
  </div>

<div style={{display: "flex", marginTop:"2rem"}}>
<Image src="pis.svg"alt="PiS" height={60} width={60} style={{marginRight:"1rem"}}/>
    <h5 className="jumboItems"> Członek partii <strong>Prawo i Sprawiedliwość.</strong> Dokładnie od 19 czerwca 2017 r. Partia ta jako jedyna jest poważną i stabilną siłą polityczną w Polsce, w której odnaleźć się może osoba o moim światopoglądzie. </h5>
    </div>
  <hr className="my-10" />

  <div style={{display: "flex", marginTop:"2rem"}}>
  <Image src="/check.svg"alt="checked" height={20} width={20}/>
    <h5 className="jumboItems"> <strong>Katolik</strong> bardzo daleki od ideału, ale od zawsze  &quot;odczuwający&quot; Boską obecność. Intelektualnie, uważający ateistów za skrajnie naiwnych.</h5>
    </div>
  <hr className="my-10" />

  <div style={{display: "flex", marginTop:"2rem"}}>
  <Image src="/check.svg"alt="checked" height={20} width={20}/>
    <h5 className="jumboItems"><strong>Tradycyjna gradacja wartości.</strong> Nie jestem w stanie roztrzygnąć czy największy wpływ mają tu cechy wrodzone czy też wychowanie w duchu tych wartości czy po prostu trzeźwe rozumowanie kim jest człowiek i co w jego życiu powinno być najważniejsze, co ważne, a co jest bezwartościowe.<br/><br/>
    
    Otrzymałem solidną edukację w zakresie historii myśli polityczno-prawnej. Na swojej życiowej ścieżce poznałem również ludzi o rozmaitych poglądach (i zachowaniach). Oczywiście, pamięć bywa zawodna, ale od Platona, przez Hegla, Marksa aż do Czerwonych Khmerów, posiadam wiedzę i nie miało to większego wpływu na moją osobę. Pozostaje pod pewnym wpływem poglądów Lon Luvois Fullera, ale uznaje je za trochę życzeniowe i trudne do implementacji. Uważam, że wierność wartościom naturalnym i umiarkowanie są drogą, którą iść &quot;<strong>warto</strong>&quot;. 
    </h5>
    </div>
    <hr className="my-10" />

    <div style={{display: "flex", marginTop:"2rem"}}>
  <Image src="/check.svg"alt="checked" height={20} width={20}/>
    <h5 className="jumboItems"><strong>Patologie społeczne już dzisiaj.</strong> Temat bardzo długi. Bardziej od tego, że ilość nowonarodzonych Polaków spada, martwi mnie kompletny rozkład instytucji Rodziny. Dzieci, które wychowują się od maleńkości w rodzinach niepełnych, konkubinatach, często w patologii &quot;pełną gębą&quot; i instytucje państwowe (Sądy), które wbrew zapisom Konstytucji (i wbrew interesowi Państwa oraz Narodu) promują i nagradzają taką degrengoladę. Władza sądowa, która działa przeciwko Państwu i swym Obywatelom. Koniec końców - przeciwko Narodowi. To szaleństwo może ograniczyć władza ustawodawcza. Nie robi tego. <br/><br/>
    
    <strong>Ucieczka od podmiotowości obywateli.</strong> Ponownie szerszy temat, więc zaprezentuje tylko mały wycinek: Jakkolwiek daleki jestem od krytykowania nowoczesnych technologii w ogóle, to należy mieć świadomość, że zarówno portale społecznośiowe jak i smartfony są projektowane dokładnie tak, by wprowadzić nas w rzeczywistość alternatywną, zantagonizować, zdobyć o nas dane (waluta XXI wieku) i ogłupić. Przeciętny smartfon jest całkiem wydajnym komputerem, ale stworzonym wyłącznie po to byśmy konsumowali i tworzyli bezwarrtościowe treści. Mało to, człowiek na takich portalach społecznościowych zamienia się na własne życzenie w produkt. Najwybitniejszym tego przykładem jest bodaj instagram lub tinder. Człowiek, który na własne życzenie sprowadza swoją osobę do zdjęć (oczywiście tylko tych najlepszych, jakie uda się zrobić) i do lajk buttona? To ma być miara tego, kim jesteśmy? Ucieczka od podmiotowości jest tematem znacznie szerszym. Podaje tylko przykład, z którym przypuszczalnie każdy ten tekst czytający ma styczność<br/><br/>

    <strong>Powrót marksizmu</strong> niekiedy nazywanego neomarksizmem. Połączenie &quot;nowych&quot; inwazyjnych ideologii (które mocno relatywizują człowieczeństwo) wraz z pozbawieniem ludzi &quot;na ich własne życzenie&quot; podmiotowości plus rozwój sztucznej inteligencji (AGI lub GAI), która musi doprowadzić do załamania rynku pracy w ciągu kilku, góra kilkunastu lat (przynajmniej na zachodzie) stwarza idealne warunki do powrotu myśli komunistycznej. Nawet przy zachowaniu formalnej wolności jednostki, jej faktyczna wolność może stać się niewiele warta, jeśli procesy gospodarcze zostaną kompletnie zautomatyzowane. Jeśli prawica zignoruje to zagrożenie, to władzę będą zdobywali neomarksiści, którzy opodatkują zautomatyzowane korporacje i wydadzą ludziom dochód podstawowy (który niekoniecznie musi być taki niski) w zamian za &quot;punkty poprawności politycznej&quot;. Takie zjawiska obserwujemy już dzisiaj np. w Chinach, które błędnie są nazywane państwem autorytarnym. Jest to komunistyczne państwo totalitarne, potężnie wsparte nowoczesnymi technologiami, które kontrolują <h5 style={{textDecoration: "line-through"}}>obywateli</h5></h5>



    </div>
  <hr className="my-10" />

    <p className="lead" style={{marginTop:"2rem"}}>Aktualnie skupiam się na front-end, ale widzę duży potencjał (i niezależność przy tworzeniu aplikacji) w technologiach back-endowych. Bardzo ciekawym kierunkiem rozwoju jest też analiza i wizualizacja danych. </p>

    <div style={{display: "flex", flexDirection: "column"}}>
    <p className="lead" style={{marginTop:"2rem"}}> Zapraszam do odwiedzenia mojego</p>
    <Link href="#" className="btn btn-primary btn-lg"
     style={{marginLeft: "2rem", marginTop: "1rem", maxWidth: "150px"}}
     onClick={handlePortfolioClick}>
     portfolio
    </Link></div>

    </div>
    </div>)}







    

export default Gallery


