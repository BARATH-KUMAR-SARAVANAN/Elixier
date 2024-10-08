import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {  Component } from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Events from './Components/Events'
import Contact from './Components/Contact'
import TechEvents from './Components/TechEvents'
import NonTechEvents from './Components/NonTechEvents'
import EventDetailedView from './Components/EventDetailedView'
import NonTechEventDetailedView from './Components/NonTechEventDetailedView'
import NonTechEventsSplit from './Components/non_tech_events_split'
import './App.css';

class App extends Component {
  
  render(){
    return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/events" element={<Events/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/events/tech_events" element={<TechEvents/>} />
        <Route exact path="/events/tech_events/:id" element={<EventDetailedView/>} />
        <Route exact path="/events/non_tech_events/:id" element={<NonTechEventDetailedView/>} />
        <Route exact path="/events/non_tech_events" element={<NonTechEvents/>} />
        <Route exact path="/events/non_tech_events_split" element={<NonTechEventsSplit/>} />
        
      </Routes>
      </BrowserRouter>
      
    )
  }
}

export default App;
