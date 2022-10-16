import './App.css';
import Header from './components/header'
import Navbar from './components/navbar'
import About from './components/about'
import Professional from './components/professional'
import Projects from './components/projects'
import Education from './components/education'

import  { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div class="container">
      <Header></Header>

      <div class="container">
        <div class="row">
          <BrowserRouter>
            <Navbar></Navbar>

            <Routes>
              <Route exact path ="/" element={<About/>}/>
              <Route path ="/professional" element={<Professional/>}/>
              <Route path ="/projects" element={<Projects/>}/>
              <Route path ="/education" element={<Education/>}/>
              
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;