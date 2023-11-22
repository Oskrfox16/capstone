import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Houses from './pages/Houses';
import NavBar from './component/NavBar';
import Characters from './pages/Characters';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/MainPage" element={<Home />}/>
        <Route path='/Houses' element={<Houses />}/>
        <Route path='/Characters' element={<Characters />}/>

        <Route
            path="/*"
            element={
              <div>
                <NavBar />
                <h1
                  style={{
                    margin: "auto",
                    textAlign: "center",
                    color: "red",
                    fontSize: "5rem",
                  }}
                >
                  404 ERROR
                </h1>
              </div>
            }
          />

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
