import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Events from './Components/Events'
import Contact from './Components/Contact'
import TechEvents from './Components/TechEvents'
import NonTechEvents from './Components/NonTechEvents'

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/events" element={<Events/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/events/tech_events" element={<TechEvents/>} />
      <Route exact path="/events/non_tech_events" element={<NonTechEvents/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
