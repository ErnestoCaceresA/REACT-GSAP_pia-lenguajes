import React, {useEffect} from 'react'
import './styles/App.scss'
import {gsap} from 'gsap'

//componentes
import Header from './components/Header'
import Banner from './components/Banner'
import Cases from './components/Cases'
import IntroOverlay from './components/IntroOverlay'

function App() {


  useEffect(() => {
    //calculate height in any device and set on the variable --vh
    let vh =window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    //--------------
    //GSAP ANIMATION
    //--------------

    //para evitar flashing al recargar pagina que se pone blanco
    gsap.to('body', 0, {css: {visibility: "visible"} })

    /*----- TIMELINE -------- */
    /* 
    FROM: lo que pongas de propiedades ahí y con el tiempo de animacion que pongas, ira desde esas propiedades hacia su estado original
    TO: lo que pongas de propiedades ahí y con el tiempo de animacion que pongas, ira de donde esta esa propiedad hacia las nuevas propiedades que pusiste, y se quedará asi al final
    */
    const tl = gsap.timeline();
    //primero anima el texto inicial y cuando acaba, agarra los .overlay-top y les de una altura de 0 envez de 50% para desaparecerlos y que vuelva lo que estaba atras y despues lo mismo para los tiltes de abajo
    tl.from('.line span', 1.8, {
      y:100,
      ease: 'power3.out',
      delay: 1,
      skew: 7,
      stagger: {
        amount: 0.3
      }
    }).to('.overlay-top', 1.6, {
      height: 0, //para quitarle la altura y que desaparezca el fondo negro
      ease: 'expo.in-out',
      stagger: 0.4
    }).to('.overlay-bottom', 1.6, {
      width: 0, //para quitarle toda la anchura y que desaparezca el fondo negro
      ease: 'expo.in-out',
      delay: -.8, //para que empieze antes de lo que debería
      stagger: {
        amount: 0.4
      }
    }).to('.intro-overlay', 0, {css:{display: 'none'}}) //quitar el componente fondo negro por completo de css
    .from('.case-image img', 1.6, {
      scale: 1.4, //efecto de zoom-out a las imagenes
      ease: 'expo.in-out',
      delay: -2,
      stagger: {
        amount: 0.4
      }
    })



  }, [])

  return (
    <div className="App">
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
 