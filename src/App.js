import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Events from './Components/Events'
import Contact from './Components/Contact'
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/events" element={<Events/>} />
      <Route exact path="/contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
