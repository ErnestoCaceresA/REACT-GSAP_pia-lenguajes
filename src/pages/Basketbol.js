import React from 'react'

const Basketbol = () => {
    return (
        <div className="page">
            <div className="basketbol">
                {/* PRIMER FILA */}
                <div className="container">
                    <div className="first-row">
                        <div className="title">
                            <h2>
                                Basquetbol.
                            </h2>
                        </div>
                        <div className="description">
                            <h4>¿Qué es el baloncesto?</h4>
                        </div>
                        <div className="content">
                            <p>El baloncesto es un deporte de equipo, jugado entre dos conjuntos de cinco jugadores cada uno durante cuatro períodos o cuartos de diez o doce minutos cada uno. El objetivo del equipo es anotar puntos introduciendo un balón por la canasta, un aro a 3,05 metros sobre la superficie de la pista de juego del que cuelga una red.</p>
                        </div>
                    </div>
                    <div className="second-row">
                        <div className="image-container">
                            <img className="first-image" src="https://elceo.com/wp-content/uploads/2021/04/basketball.jpeg" alt="" />
                            <img className="second-image" src="https://www.competize.com/blog/wp-content/uploads/2020/11/basquetbol-historia-origen-reglas-fundamentos.jpg" alt="" />
                        </div>
                    </div>
                </div>
                {/* SEGUNDA FILA */}
                <div className="container">
                    <div className="second-row">
                        <div className="image-container">
                            <img className="first-image" src="http://www.fiba.basketball/images.fiba.com/Graphic/0/8/D/A/kDeniMsSbk2Ii2nKUbnaMg.jpg?v=20190917204445770" alt="" />
                        </div>
                    </div>
                    <div className="first-row">
                        <div className="description">
                            <h4>¿Cómo es la puntuacion?</h4>
                        </div>
                        <div className="content">
                            <p>La puntuación por cada canasta o cesta es de dos o tres puntos, dependiendo de la posición desde la que se efectúa el tiro a canasta, o de uno, si se trata de un tiro libre por una falta de un jugador contrario. El equipo ganador es el que obtiene el mayor número de puntos. </p>
                        </div>
                    </div>
                </div>
                {/* Mas informacion */}
                <div className="Mas-informacion">
                    <h3>Origen</h3>
                    <p>
                        El baloncesto nació como una solución a la necesidad de realizar alguna actividad deportiva durante el invierno, en la escuela de la YMCA (Young Men's Christian Association) de Springfield, Massachusetts. En 1891 James Naismith, profesor de educación física en la escuela, ideó el baloncesto como juego de pelota basado en trece reglas. El juego se extendió por Estados Unidos, Canadá y el resto del mundo, experimentando algunas modificaciones durante el curso del tiempo. Muchas de las reglas iniciales se mantienen hasta la actualidad, aunque algunos aspectos del juego tuvieron que modificarse para responder a desarrollos en la técnica de los jugadores y aspectos no previstos en el desarrollo del juego, normalmente como consecuencia de la manipulación de las reglas por parte de los entrenadores y jugadores para inclinar los partidos.
                    </p>
                    <h3>Posicion de los jugadores</h3>
                    <div className="posicion-jugadores-container">
                        <ul>
                            <li>BASE (Point Guard, Playmaker)</li>
                            <li>ESCOLTA (Alero Bajo, Shooting Guard)</li>
                            <li>ALERO (Alero Alto, Small Forward)</li>
                            <li>ALA-PIVOT (Power Forward)</li>
                            <li>PIVOT (Center)</li>
                        </ul>
                        <div className="image-container">
                            <img src="https://static.wixstatic.com/media/413fbc_57da4eab2fa247c79191092e5a113581~mv2.png/v1/fit/w_825%2Ch_549%2Cal_c/file.png" alt="" />
                        </div>
                    </div>
                    <h3>Duracion de partido</h3>
                    <p>
                        EL PARTIDO se compone de 4 períodos de 10 minutos cada uno, con un intervalo de 2 minutos entre el primero y el segundo y entre el tercero y el cuarto; y con un descanso de 5 minutos entre el segundo y el tercero.
                    </p>
                    <h3>Videos relacionados</h3>
                    <div className="videos-container">
                        <ul>
                            <li><a href="https://www.youtube.com/watch?v=aoxy6yNNv54" target="_BLANK">Historia del Basketball</a></li>
                            <li><a href="https://www.youtube.com/watch?v=5F_HNvP0nZY" target="_BLANK">Reglas basicas</a></li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Basketbol
