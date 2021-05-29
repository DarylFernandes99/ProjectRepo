import React,{useState} from 'react'
import './App.css';
import Llie from './components/Projects/LLIE/Llie'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Colorize from './components/Projects/Colorize/Colorize';
import Poem from './components/Projects/Poem/Poem';
import Projects from './components/Projects/Projects'
import Error from './components/404/Error'
import Contact from './components/Contact/Contact'
import About from './components/About/About'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(window.localStorage.getItem("dark-mode") === 'true' ? true : false);
  window.localStorage.setItem("dark-mode",isDarkMode);
  
  return (
    <Router>
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <Navbar setIsDarkMode={() => setIsDarkMode(!isDarkMode)} />
      <div className='container-fluid'>
        <Switch>
          <Route exact path="/">
            <Home isDarkMode={isDarkMode}/>
          </Route>
          <Route path="/contact">
            <Contact isDarkMode={isDarkMode}/>
          </Route>
          <Route path="/about">
            <About isDarkMode={isDarkMode}/>
          </Route>
          <Route exact path="/projects">
            <Projects isDarkMode={isDarkMode}/>
          </Route>
          <Route path="/projects/colorize">
            <Colorize isDarkMode={isDarkMode}/>
          </Route>
          <Route path="/projects/poem">
            <Poem isDarkMode={isDarkMode}/>
          </Route>
          <Route path="/projects/lowlight">
            <Llie isDarkMode={isDarkMode}/>
          </Route>
          <Route path='*'>
            <Error isDarkMode={isDarkMode}/>
          </Route>
        </Switch>
      </div>
      <Footer isDarkMode={isDarkMode}/> 
    </div>
  </Router>
  );
}

export default App;