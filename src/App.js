import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './Landing';
import About from './components/About';
import Project from './components/Project';
import Services from './components/Services';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}>
        </Route>

        <Route path='/About' element={<About/>}>
        </Route>

        <Route path='/Project' element={<Project/>}>
         </Route>

         <Route path='/Services' element={<Services/>}>
         </Route>

         <Route path='/Contact' element={<Contact/>}>
         </Route>


      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
