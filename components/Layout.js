import Wdznav from "./Wdznav";



const Layout = ({ children }) => {
  return (
    <>
   
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Wdznav/>
      <main style={{ flexGrow: 1 }}>
        {children}
      </main>
     
    </div>
    </>
  );
};

export default Layout;