import React, { useRef, useEffect } from 'react'
import { TweenMax, TimelineLite, Power3 } from 'gsap'

import arrow from '../assets/arrow-right-white.svg'

const Atletismo = () => {

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
            <div className="atletismo" ref={el => app = el}>
                <div className="container"> <br /><br /><br />
                    <div className="futbol-inner">
                        <div className="futbol-content">
                            <div className="futbol-content-inner" ref={el => content = el}>
                                <h1>
                                    <div className="futbol-content-line">
                                        <div className="futbol-content-line-inner">ATLETISMO</div>
                                    </div>
                                    <div className="futbol-content-line">
                                        <div className="futbol-content-line-inner">"No te puedes poner ningun limite</div>
                                    </div>
                                    <div className="futbol-content-line">
                                        <div className="futbol-content-line-inner">no hay nada imposible."</div>
                                    </div>
                                </h1>
                                <p> Es el arte de superar el de los adversarios en velocidad o en resistencia llamados también fondo, en distancia o en mayor altura. El número de pruebas, y los tipos ya sean individuales o en grupos, ha variado con el paso del tiempo.</p>
                                <div className="btn-row">
                                    <button className="explore-button">
                                        Explorar
                                    <div className="arrow-icon">
                                            <a href="https://cnnespanol.cnn.com/category/atletismo/" target="_BLANK"> <img src={arrow} alt="arrow" /> </a>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="futbol-images">
                            <div className="futbol-images-inner" ref={el => images = el}>
                                <div className="futbol-image first">
                                    <img src="https://s1.eestatic.com/2019/11/11/deportes/otros-deportes/otros_deportes-deporte_femenino-atletismo_443717491_137696408_1706x960.jpg" alt="atletismo primera foto" />
                                </div>
                                <div className="futbol-image second">
                                    <img src="https://concepto.de/wp-content/uploads/2015/03/atletismo-2-e1550019283931.jpg" alt="atletismo segunda fotol" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Mas-informacion">
                        <div className="content-container">
                            <div className="fila-uno">
                                <div className="columna-uno">
                                    <h3>¿Desde cuando se practica?</h3>
                                    <p>
                                        Desde el siglo XIX, debido a las carreras pedestres que se llevaban a cabo en el País Vasco, Aragón y Cataluña. Sin embargo, las primeras competiciones en pista se remontan al siglo XX, cuando en 1907 se celebró el Campeonato de España 10 Km en Barcelona. Cinco años después, en 1912, se creó la primera organización de atletismo, el Club Sport Atlético Barcelonés, y desde entonces se ha convertido en uno de los deportes más seguidos.
                                    </p>
                                </div>
                                <div className="columna-dos">
                                    <div className="image-container">
                                        <img src="https://image.freepik.com/foto-gratis/atleta-masculino-listo-comenzar-carrera-pista-atletismo_23-2148162125.jpg" alt="atletismo origen" />
                                    </div>
                                </div>
                            </div>
                            <div className="fila-dos">
                                <div className="columna-uno">
                                    <h3>Pruebas de atletismo</h3>
                                    <ul>
                                        <li>Carreras de Velocidad</li>
                                        <li>Vallas</li>
                                        <li>Carreras de Relevo</li>
                                        <li>Salto de Altura</li>
                                        <li>Salto de Pértiga o Garrocha</li>
                                        <li>Salto de Longitud</li>
                                        <li>Lanzamiento de Peso</li>
                                        <li>Lanzamiento de la Jabalina</li>
                                    </ul>
                                </div>
                                <div className="columna-dos">
                                    <div className="image-container">
                                        <img src="https://mejorconsalud.as.com/fitness/wp-content/uploads/2018/09/las-pruebas-de-atletismo-mas-populares.jpg" alt="Posicion de juagadores futbol" />
                                    </div>
                                </div>
                            </div><br /><br />
                            <div className="fila-tres">
                                <h3> Atletismo en los Juegos Olimpicos </h3>
                                <p>
                                    El atletismo es una de las disciplinas tradicionales de los Juegos Olímpicos modernos, realizada desde la edición inaugural en 2020 . Actualmente se compone de carreras de velocidad, marcha, saltos, lanzamiento y pruebas combinadas, completando 24 eventos de varones y 23 de mujeres.
                                </p>
                                <p>
                                    El atletismo está directamente relacionado con el establecimiento de los juegos olímpicos, que constituyen la manifestación deportiva más grande a nivel mundial, la cual reúne a los más destacados atletas de todo el mundo y se lleva a cabo cada cuatro años en una ciudad que hace las veces de sede de los juegos.
                                </p>
                                <p>
                                    El requerimiento para que una disciplina pase a conformar el conjunto de pruebas de los juegos olímpicos es que la disciplina sea practicada en los cinco continentes. De este modo van ingresando nuevas disciplinas que en el origen de los juegos no eran parte, en el caso contrario varias competiciones deportivas atléticas han desaparecido de estos, como ser el Polo o el Rugby.
                                </p>
                                <p>
                                    La maratón es la prueba atlética legendaria, y que recuerda la hazaña lograda por un corredor griego que fue enviado desde Maratón, la aldea de Ática, hasta la ciudad de Atenas en el año 490 a. J. C. con el objetivo de anunciar la victoria de los atenienses sobre los persas. Esta disciplina es el ícono más representativo de la totalidad de los juegos olímpicos.
                                </p>
                                <p>
                                    El decatlón es la una disciplina que combina diez pruebas (cuatro carreras, tres saltos y tres lanzamientos), si bien se disputa en dos jornadas consecutivas, requiere que el atleta desarrolle a la vez habilidades de resistencia, fuerza, potencia y velocidad, se entiende con esto que es la disciplina atléticas más completa, y más dura en cuanto a su nivel de exigencia. Existe el heptathlón, que es el equivalente al decatlón, pero compuesto por atletas mujeres. La clasificación de estas dos disciplinas es según el puntaje que vaya acumulando como resultado obtenido por su desempeño en cada una de las actividades, en base a esto se conforma una tabla comparativa entre los atletas.
                                </p>
                                <img src="https://cnnespanol.cnn.com/wp-content/uploads/2017/10/urlhttps_3a_2f_2fcdn-expansion-mx_2f0a_2fc5_2f52a50bb34a078b1f864490c50e7d_2fshutterstock-322328156-1.jpg?quality=100&strip=info" alt="juegos olimpicos" />
                                <br /><br />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Atletismo
