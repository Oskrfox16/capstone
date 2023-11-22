import NavBar from "../component/NavBar";
const Home = () => {
    return (
      <div>
        <NavBar />
        <div className="justify-content-center">
          <h1>Juego de Tronos</h1>
        </div>
        <div className="justify-content-center">
          {/* <Col sm="8" className="homeContent"> */}
          <h2>API that serves as a wiki</h2>
          <p className="homeContentBody">
        
          </p>
          {/* </Col> */}
        </div>

      </div>
    );
  };
  
  export default Home;