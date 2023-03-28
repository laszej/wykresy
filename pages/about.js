import Image from "next/image"
import Link from "next/link"

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
   

  
   
   

<div className="jumbotron jumbotron-fluid" id="gridGalleryJumbo1">
  <div className="container text-center">
      <h1 className="display-4 mt-4">Stąd wnioski</h1>
  </div>

<div style={{display: "flex", marginTop:"2rem"}}>
<Image src="pis.svg"alt="PiS" height={60} width={60} style={{marginRight:"1rem"}}/>
    <h5 className="jumboItems"> <strong>Prawo i Sprawiedliwość</strong> pozostaje jedyną stabilną partią polityczną w Polsce, która reprezentuje wartości konserwatywne, i która posiada dość unikalną na naszej scenie politycznej zdolność do samooczyszczania się oraz rozwoju i kreowania nowych planów na Polskę i ich konsekwentnego wdrażania. Obietnice są dotrzymywane.   </h5>
    </div>
  <hr className="my-10" />

  <div style={{display: "flex", marginTop:"2rem"}}>
    <h5 className="jumboItems"> <strong>Zmian społeczno-gospodarczych</strong> wywołanych wykładniczym przyrostem zdolności sztucznej inteligencji <strong>nie da się zatrzymać</strong>. W chwili obecnej, właściciele tych technologii to raczej zwolennicy &quot;lewej strony&quot;<br/><br/>Częściowo może to wynikać z ich przekonań, ale moim zdaniem znacznie ważniejsza jest niechęć do demokracji. Demokracja może pokrzyżować plany korporacji. Tak już często bywało w USA gdzie nowojorscy radni miejscy odmówili Amazonowi współpracy przy budowie centrum firmy gdy przedstawiciel tejże konsekwentnie odmawiał praw związkom zawodowym lub gdy kontrakt na chmurę dla Pentagonu tej samej firmy zablokował demokratycznie wybrany Donald Trump (nie wchodząc już w szczegóły z jakich powodów). Społeczność lokalna również wielokrotnie i na długo przekładała starty rakiet firmy spaceX (ocena środowiskowa). Właściwie wymieniłem dwie firmy, których szefowie (jeden formalnie - były) posiadają majątek większy od budżetu Polski (każdy sam), a demokracja w USA mocno im zaszkodziła w interesach. Również założyciel facebooka odpowiadał przed Kongresem za bardzo poważne niedopatrzenia firmy. Ktoś powie, że to daleko za oceanem. Wszystkie trzy firmy już teraz mają potężne związki z Polską. Nie chodzi zresztą o konkretne firmy. Wielkim korporacjom z demokracją i wolnością człowieka nie po drodze. Korporacje będą się zmieniały, zasada pozostaje ta sama.</h5>
    </div>
  <hr className="my-10" />

  <div style={{display: "flex", marginTop:"2rem"}}>
    <h5 className="jumboItems"><strong>Kapitał ma narodowość</strong> Wspomniałem wyżej o dwóch Panach, których majątek jest większy niż roczny budżet Polski. Na razie jednak takie przypadki są rzadkością, choć tendencja jest oczywista - korporacji o większej projekcji siły niż państwo Polskie będzie coraz więcej. W Polsce nie ma takich zasobów prywatnych, by zbudować korporacje o takiej sile, jak te w USA. Wywołam pewien dysonans poznawczy, ale w Polsce big-tech musi stworzyć i kontrolować Państwo. Dopóki to możliwe. Wynika to z prostego faktu: nikogo innego na to nie stać. Ponad czterdzieści lat komuny, a następnie złodziejska reprywatyzacja zrobiły swoje. Wybór jest prosty: albo Państwo zacznie tworzyć potężne spółki technologiczne albo będziemy uzależnieni od tych z USA lub... Chin. Sytuacja w USA nie prognozuje tam przesadnej stabilności. Zmienia się struktura etniczna. Powstają coraz bardziej radykalne ruchy lewicowe. Kto wie, czy republikanie będą zdobywali w ogóle władzę w przyszłości. Nie mam wątpliwości, iż rząd USA kontroluje big tech, ale kto będzie kontrolował rząd USA, jeśli ten skręci zbyt mocno w lewo? Miejmy świadomość, że inwazja Rosji na Ukrainę, to ostatnia wojna XX wieku. I odciąga naszą uwagę od wieku XXI, w którym niepodległości będzie bronić przewaga technologiczna o zupełnie innej jakości. Ci, którzy zostaną z tyłu, pozostaną tam już &quot;na zawsze&quot;.
    </h5>
    </div>
    <hr className="my-10" />

    <div style={{display: "flex", marginTop:"2rem"}}>
  
    <h5 className="jumboItems"><strong>Ideologia ma znaczenie</strong>Zakładając bardzo optymistycznie, że Polsce uda się stworzyć podmiotowość technologiczną w XXI wieku, otwartym pytaniem pozostaje, kto w Kraju będzie rządził. Automatyzacja pracy jest nieunikniona. Nie ma podstaw, by uważać, że nowa &quot;rewolucja przemysłowa&quot; jedne miejsca pracy zlikwiduje, a inne stworzy. Niby jakie? Jeśli władzę w Polsce przejmną ugrupowania skrajnie lewicowe, to wprowadzą dochód podstawowy, ale w zamian za punkty &quot;poprawności politycznej&quot;, o których wspominałem. Społeczeństwo obywatelskie przestanie istnieć.  
    
    Niesamowicie istotnym jest więc, by społeczeństwo posiadało wolnościowe, podmiotowe, patriotyczne i racjonalne cechy, które trzeba wpajać od kołyski. Po to, by w przyszłości to człowiek pozostał beneficjentem zmian, które już tu są. I nie kroczą. Biegną coraz szybciej.  <br/><br/>

    Kończąc. Mam świadomość, że moje &quot;wywody&quot; mogą budzić różne emocje jak np. niedowierzanie czy nawet coś bardziej pejoratywnego. Wielu pewnie nawet tego nie przeczyta, &quot;bo nudy&quot; lub &quot;androny&quot;. Jako wolnościowiec odpowiadam: Twoja decyzja, Twoje prawo do oceny. 
    </h5>
    
  

    <hr className="my-10" />

  

    </div>
   

    </div>

    
    </div>)}







    

export default Gallery


