
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Details from './pages/Details';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  <Home />
  return(
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:service" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:title/:Desc" element={<Details />} />

      </Routes>
      </BrowserRouter>




    </div>



    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </BrowserRouter>,
    // document.getElementById("root")

  );


}

export default App;
