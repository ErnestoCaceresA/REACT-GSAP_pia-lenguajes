import React, { useRef, useEffect } from 'react'
import { TweenMax, TimelineLite, Power3 } from 'gsap'

import arrow from '../assets/arrow-right-white.svg'

const Futbol = () => {

    //hook useRef para seleccionar etiquetas de jsx con el ref={el => app = el}
    let app = useRef(null)
    let images = useRef(null)
    let content = useRef(null)

    //new timeLineLite
    let tl = new TimelineLite({ delay: 0.27 }); //para que las animaciones de los timelines empiecen 0.27 segundos despues de recargar el componente

    useEffect(() => {
        //Image variables
        const firstImage = images.firstElementChild;
        const secondImage = images.lastElementChild;
        //content variables
        const headLineFirst = content.children[0].children[0];
        const headLineSecond = headLineFirst.nextSibling;
        const headLineThird = headLineSecond.nextSibling;
        const contentP = content.children[1]
        const contentButton = content.children[2]


        /* 
        FROM: los valores que le demos iran animandose despue ahí hasta quedar en su posicion original
        TO: los valores que le demos iran animandose de donde esta originalmente hacia los nuevos valores que le dimos y se quedará alfinal en ese nuevo estado
        delay: once the first timeline start the delay of the next gonna set the animation start, ejemplo la primer timeline empieza y si el siguiente timeline tiene 0.2 de delay la siguiente linea empezará 0.2s despues de que la primera empezó
        
        --- tl.from(target, duration, properties-to-change, delay, 'tag-start') --
        
        tag-start: si dos timelines tienen el mismo tag-start empezarán al mismo tiempo esas dos timelines
        */

        //-------------
        //GSAP ANIMATION
        //-------------
        TweenMax.to(app, 0, { css: { visibility: 'visible' } }) //make the hole pafe visible
        //timeline

        //image animation
        tl.from(firstImage, 1.5, { y: 1280, ease: Power3.easeOut }, 'start') //bring the first image up
            .from(firstImage.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, 0.2) //take the image itself and make the zoom-out effect with duration of 2 and a delay of 0.2 osea que cuando empize la primer animacion esta empuezara 0.2s despues
            .from(secondImage, 1.5, { y: 1280, ease: Power3.easeOut }, .2) //same
            .from(secondImage.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, 0.2) //same

        //conent animation
        tl.staggerFrom([headLineFirst.children, headLineSecond.children, headLineThird.children], 1, {
            y: 44,
            ease: Power3.easeOut,
            delay: .8
        }, 0.15, 'start') //primero correra la primer lina, despues 0.15s empezará la segunda linea, despues 0.15s empezarña la tercer linea
            .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
            .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)


    }, []);

    return (
        <div className="page">
            <div className="futbol" ref={el => app = el}>
                <div className="container"> <br /><br /><br />
                    <div className="futbol-inner">
                        <div className="futbol-content">
                            <div className="futbol-content-inner" ref={el => content = el}>
                                <h1>
                                    <div className="futbol-content-line">
                                        <div className="futbol-content-line-inner">Futbol soccer.</div>
                                    </div>
                                    <div className="futbol-content-line">
                                        <div className="futbol-content-line-inner">"Cada partido se juega</div>
                                    </div>
                                    <div className="futbol-content-line">
                                        <div className="futbol-content-line-inner">como una final."</div>
                                    </div>
                                </h1>
                                <p> Es un deporte de equipo jugado entre dos conjuntos de once jugadores cada uno y algunos árbitros que se ocupan de que las normas se cumplan correctamente. Es ampliamente considerado el deporte más popular del mundo, pues lo practican unas 270 millones de personas.</p>
                                <div className="btn-row">
                                    <button className="explore-button">
                                        Explorar
                                    <div className="arrow-icon">
                                            <a href="https://www.espn.com.mx/futbol/" target="_BLANK"> <img src={arrow} alt="arrow" /> </a>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="futbol-images">
                            <div className="futbol-images-inner" ref={el => images = el}>
                                <div className="futbol-image first">
                                    <img src="https://st1.uvnimg.com/dims4/default/ce759a0/2147483647/thumbnail/1240x698/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2F3c%2Fa6%2F921400d0499cb2980b77c519307e%2Ffutbol-generic-entry-point.jpg" alt="first image futbol" />
                                </div>
                                <div className="futbol-image second">
                                    <img src="https://img.blogs.es/anexom/wp-content/uploads/2018/08/mitos-futbol-ansiedad-1024x683.jpg" alt="second image futbol" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Mas-informacion">
                        <div className="content-container">
                            <div className="fila-uno">
                                <div className="columna-uno">
                                    <h3>Origen</h3>
                                    <p>
                                        La humanidad ha realizado a lo largo de su historia diversos juegos de pelota, desde la Antigüedad. Se conoce que este entretenimiento existía tanto en la cultura del Mar Mediterráneo como en América.  El hallazgo más antiguo y revelador se remonta a un relieve de la Antigua Grecia (400 a. C.), donde un hombre domina una pelota sobre su muslo. Este deporte era el episkyros, que se jugaba con una pelota de cuero pintada con colores brillantes y dos equipos de 12 a 14 jugadores. La FIFA lo reconoció como una de las formas más antiguas del actual fútbol.
                                    </p>
                                </div>
                                <div className="columna-dos">
                                    <div className="image-container">
                                        <img src="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365e3c066de9087b6a5b4b/futbol7.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="fila-dos">
                                <div className="columna-uno">
                                    <h3>Posición táctica de los jugadores</h3>
                                    <ul>
                                        <li>Defensa</li>
                                        <li>Centrocampista</li>
                                        <li>Delantero</li>
                                    </ul>
                                </div>
                                <div className="columna-dos">
                                    <div className="image-container">
                                        <img src="https://i.ytimg.com/vi/LTOWKpOQPbY/maxresdefault.jpg" alt="Posicion de juagadores futbol" />
                                    </div>
                                </div>
                            </div>
                            <div className="fila-tres">
                                <h3> Inicio del juego </h3>
                                <p>
                                    Cada uno de los dos equipos consta de un máximo de 11 jugadores y un mínimo de 7. Durante el partido se podrán cambiar a estos jugadores por otros, los denominados suplentes o sustitutos. Uno de los jugadores titulares deberá ser el guardameta. Está permitido que un guardameta y otro jugador del equipo se intercambien de posición durante el encuentro, siempre y cuando sea durante una interrupción con el consentimiento del árbitro.
                                </p>
                                <h3>Faltas y reanudación del juego:</h3>
                                <p>
                                    Cada vez que un jugador intente golpear o golpee a otro, lo empuje, lo retenga para sacar una ventaja, lo escupa o toque el balón con sus manos (excepto el guardameta), el árbitro marcará un tiro libre directo a favor del equipo que no cometió la infracción, que se ejecutará desde el lugar de la infracción. Si ocurrió dentro del área penal propia, independientemente de la posición del balón y si el balón está en juego, se marcará un tiro penal en contra del equipo infractor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Futbol
