import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Routes , Route } from "react-router-dom";
import { About } from './Components/About/About';
import { Skills } from './Components/Skills/Skills';
import { Project } from './Components/Project/Project';
import { Navbar } from './Components/Navbar';
import { Contact } from './Components/ContactMe/Contact';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<About/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/skills' element={<Skills/>}></Route>
        <Route exact path='/project' element={<Project/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
      </Routes>
      
      </div>
  );
}

export default App;
