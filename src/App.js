import React, {useEffect} from 'react'
import './styles/App.scss'

import Header from './components/Header'
import Banner from './components/Banner'
import Cases from './components/Cases'

function App() {

  //calculate height in any device and set on the variable --vh
  useEffect(() => {
    let vh =window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])

  return (
    <div className="App">
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
 