

const Gallery = () => {
  return (
    <div className="container" style={{marginTop:"2rem", width: "80%"}}>
      <div className="row">
        <div className="col -md-8" style={{ margin: 0, padding: 0 }}>
          <img src="/projects/amazorron.png" alt="Image 1" style={{width: "100%", height: "auto", margin: "0", padding:"0"}} />
        </div>
        <div className="col-md-2" style={{ margin: 0, padding: 0 }}>
          <img src="/projects/amazorron.png" alt="Image 2" width={300} height={200} style={{width: "100%", height: "100%"}}/>
        </div>
        <div className="col-md-2" style={{ margin: 0, padding: 0 }}>
          <img src="/projects/amazorron.png" alt="Image 3" width={300} height={200} style={{width: "100%", height: "100%"}}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4" style={{ margin: 0, padding: 0 }}>
          <img src="/projects/amazorron.png" alt="Image 4" width={300} height={200} style={{width: "100%", height: "auto"}}/>
        </div>
        <div className="col-md-4" style={{ margin: 0, padding: 0 }}>
          <img src="/projects/amazorron.png" alt="Image 5" width={300} height={200} style={{width: "100%", height: "auto"}}/>
        </div>
        <div className="col-md-4" style={{ margin: 0, padding: 0 }}>
          <img src="/projects/amazorron.png" alt="Image 6" width={300} height={200} style={{width: "100%", height: "auto"}}/>
        </div>
      </div>
   
    </div>
  )
}

export default Gallery


