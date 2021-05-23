import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'

//componentes
import Banner from '../components/Banner'
import Cases from '../components/Cases'
import IntroOverlay from '../components/IntroOverlay'


//--------------
//GSAP ANIMATION
//--------------

/*----- TIMELINE -------- */
/* 
FROM: lo que pongas de propiedades ahí y con el tiempo de animacion que pongas, ira desde esas propiedades hacia su estado original
TO: lo que pongas de propiedades ahí y con el tiempo de animacion que pongas, ira de donde esta esa propiedad hacia las nuevas propiedades que pusiste, y se quedará asi al final
*/
const tl = gsap.timeline();
const homeAnimation = (completeAnimation) => {

    //primero anima el texto inicial y cuando acaba, agarra los .overlay-top y les de una altura de 0 envez de 50% para desaparecerlos y que vuelva lo que estaba atras y despues lo mismo para los tiltes de abajo
    tl.from('.line span', 1.8, {
        y: 100,
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
    }).to('.intro-overlay', 0, { css: { display: 'none' } }) //quitar el componente fondo negro por completo de css
        .from('.case-image img', 1.6, {
            scale: 1.4, //efecto de zoom-out a las imagenes
            ease: 'expo.in-out',
            delay: -2,
            stagger: {
                amount: 0.4
            },
            onComplete: completeAnimation //set animationComplete as true
        })
}


const Home = () => {

    //variable para know if the animation is completed
    const [animationComplete, setAnimationComplete] = useState(false)
    //function for setting the animationComplete as true
    const completeAnimation = () => {
        setAnimationComplete(true)
    }

    useEffect(() => {
        //solo cargar una vez la animacion
        homeAnimation(completeAnimation);
    }, [])

    return (
        <>
            {/* solo renderizar la animacion si el state se animationComplete es false */}
            {animationComplete === false ? <IntroOverlay /> : ""} 
            <Banner />
            <Cases />
        </>
    )
}

export default Home
