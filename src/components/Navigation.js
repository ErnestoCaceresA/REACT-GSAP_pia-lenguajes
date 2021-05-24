import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <div className="nav-columns">
                    {/* columna uno */}
                    <div className="nav-column">
                        <div className="nav-label">Menu</div>
                        <ul className="nav-links">
                            <li>
                                <NavLink to="/futbol">
                                    Futbol soccer
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/basketbol">
                                    Basketbol
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/atletismo">
                                    Atletismo
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/tenis">
                                    Tenis
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* columna dos */}
                    <div className="nav-column">
                        <div className="nav-label">Mas informacion</div>
                        <div className="nav-infos">
                            <ul className="nav-info">
                                <li className="nav-info-label">Noticias</li>
                                <li>
                                    <a href="https://www.mundodeportivo.com/futbol" target="_BLANK">
                                        Futbol - noticias recientes
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.informador.mx/basquetbol-t243" target="_BLANK">
                                        Basketbol - ultimo momento
                                    </a>
                                </li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Mas Noticias.</li>
                                <li>.-De ultimo momento-.</li>
                                <li><a href="https://cnnespanol.cnn.com/category/atletismo/" target="_BLANK">Atletismo - noticias</a></li>
                                <li><a href="https://www.mundodeportivo.com/tenis" target="_BLANK">Tenis - Mundo deportivo</a></li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Articulos</li>
                                <li><a href="https://blogthinkbig.com/tag/deporte" target="_BLANK">Articulo de Deportes.</a></li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Legal</li>
                                <li>Privacy and Cookies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
