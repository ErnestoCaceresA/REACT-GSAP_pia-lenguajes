import React, {useEffect, useState} from 'react'
import { Route } from 'react-router';
import {gsap} from 'gsap'
import './styles/App.scss'

//componentes
import Header from './components/Header'
import Home from './pages/Home';
import Navigation from './components/Navigation';

//pages components
import Futbol from './pages/Futbol'
import Basketbol from './pages/Basketbol'
import Atletismo from './pages/Atletismo'
import Tenis from './pages/Tenis'

//routes
/* importar BrowserRouter as Router on index.js and put the <App /> inside of the "<Router></Router>" component otherwise this ain't gonna work*/
const routes = [
  {path: '/', name: 'Home', Component: Home},
  {path: '/futbol', name: 'Futbol', Component: Futbol},
  {path: '/basketbol', name: 'Basketbol', Component: Basketbol},
  {path: '/atletismo', name: 'Atletismo', Component: Atletismo},
  {path: '/tenis', name: 'Tenis', Component: Tenis}
]


function App() {

  //height and width of the viweport
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    //calculate height in any device and set on the variable --vh
    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    //para evitar flashing al recargar pagina que se pone blanco
    gsap.to('body', 0, { css: { visibility: "visible" } })

  });

  return (
    <>
      {/* the idea is tha the <Navigation /> is always hidden behind the .App and when we click on the Header the .App will slides down and shows the <Navigation />*/}
      <Header dimensions={dimensions} />
      {/* Routes */}
      <div className="App">
        {routes.map( ({path, Component}) => (
          <Route key={path} exact path={path} >
            <Component />
          </Route>
        ) )}
      </div>
      <Navigation />
    </>
  );
}

export default App;
 