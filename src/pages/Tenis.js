import React, { useEffect, useRef } from 'react'
import { TweenMax, TimelineLite, Power3 } from 'gsap'

const Tenis = () => {

    //variables globales
    let images = useRef(null)
    let firstRow = useRef(null)
    let containerDos = useRef(null)


    let tl = new TimelineLite({ delay: 0.27 })

    useEffect(() => {
        //variables
        const firstImage = images.firstElementChild;
        const secondImage = images.children[1]
        // const secondContainer = container.children[1]

        tl.from(firstImage, 1.5, { y: 500, ease: Power3.easeOut })
            .from(firstImage, 1.5, { scale: 1.6, ease: Power3.easeOut }, 0.2)
            .from(secondImage, 1.5, { y: 500, ease: Power3.easeOut }, 0.3)
            .from(secondImage, 1.5, { scale: 1.6, ease: Power3.easeOut }, 0.2)
            .from(firstRow, 1.6, { opacity: 0, ease: Power3.easeOut }, .5)
            .from(firstRow, 1.6, { translateX: 300, ease: Power3.easeOut }, .3)
            .from(containerDos, 1.6, { translateY: -200, opacity: 0, ease: Power3.easeOut }, .3)

    }, []);


    return (
        <div className="page">
            <div className="tenis">
                {/* PRIMER FILA */}
                <div className="container">
                    <div className="first-row" ref={el => firstRow = el}>
                        <div className="title">
                            <h2>
                                Tenis.
                            </h2>
                        </div>
                        <div className="description">
                            <h4>¿Qué es el Tenis?</h4>
                        </div>
                        <div className="content">
                            <p>El tenis, también llamado tenis de campo, es un deporte de raqueta practicado sobre una pista rectangular (compuesta por distintas superficies, las cuales pueden ser cemento, tierra batida o hierba), delimitada por líneas y dividida por una red. 
                            Se disputa entre dos jugadores (individuales) o entre dos parejas (dobles). El objetivo del juego es lanzar una pelota golpeándola con la raqueta de modo que rebote en la otra cancha pasando la red dentro de los límites permitidos del campo del rival, procurando que este no pueda devolverla para conseguir un segundo rebote en el suelo y por ende un punto.
                            </p>
                        </div>
                    </div>
                    <div className="second-row">
                        <div className="image-container" ref={el => images = el}>
                            <img className="first-image" src="data:image/jpeg;base64,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" alt="tenis" />
                            <img className="second-image" src="https://static4.abc.es/media/bienestar/2019/08/02/tenis-abecedario-kgNF--620x349@abc.jpg" alt="Tenis 2" />
                        </div>
                    </div>
                </div>
                {/* SEGUNDA FILA */}
                <div className="container" ref={el => containerDos = el}>
                    <div className="second-row">
                        <div className="image-container">
                            <img className="first-image" src="https://www.tennisworldes.com/imgb/34727/jugar-tenis-durante-el-coronavirus-cuales-son-las-ultimas-reglas-de-seguridad.jpg" alt="Tenis 3" />
                        </div>
                    </div>
                    <div className="first-row">
                        <div className="description">
                            <h4>¿Cómo es la puntuacion?</h4>
                        </div>
                        <div className="content">
                            <p>El juego lleva una puntuación inusual: el primer punto se contabilizará como 15 puntos, el segundo como 30 puntos y el tercero como 40 puntos. El partido se gana con 2 sets o con 3 sets dependiendo si se juega al mejor de 3 o al mejor de 5. </p>
                        </div>
                    </div>
                </div>
                {/* Mas informacion */}
                <div className="Mas-informacion">
                    <h3>Origen</h3>
                    <p>
                    El tenis tiene su origen en un antiguo juego surgido en Francia al final de la Edad Media, concretamente en el siglo XIII conocido como «juego de palmas». Este primer juego de tenis, según indican los historiadores, habría sido inventado por un grupo de monjes para hacer algo de ejercicio.
                    </p>
                    <h3>Reglas del tenis</h3>
                    <div className="posicion-jugadores-container">
                        <ul>
                            <li>El jugador solo puede golpear la pelota una vez por turno.</li>
                            <li>El juego lleva una puntuación inusual: el primer punto se contabilizará como 15 puntos, el segundo como 30 puntos y el tercero como 40 puntos.</li>
                            <li>El partido se gana con 2 sets o con 3 sets dependiendo si se juega al mejor de 3 o al mejor de 5.</li>
                            <li>La pelota solo puede rebotar una vez antes de ser impactada.</li>
                            <li>Ningún jugador podrá tocar en la disputa del punto la red, esto se considera punto perdido para el mismo.</li>
                            <li>Los jugadores van cambiando de lado de pista a lo largo del partido, en los juegos determinados, al final del primero, tercero y quinto juego.</li>
                        </ul>
                        <div className="image-container">
                            <img src="https://quieroserdeportista.com/wp-content/uploads/2020/12/Cuales-son-las-reglas-del-tenis2.jpg" alt="reglas del tenis" />
                        </div>
                    </div>
                    <h3>Duracion de partido</h3>
                    <p>
                    Algunos partidos de tenis pueden durar media hora; otros cinco horas. El caso más extremo hasta el momento se registró en el campeonato de Wimbledon de 2010 (en el que el partido superó nada más y nada menos que las once horas de duración).
                    </p>
                    
                </div>


            </div>
        </div>
    )
}

export default Tenis
