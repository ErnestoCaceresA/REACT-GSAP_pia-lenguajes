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
                                <li className="nav-info-label">Label sin asignar</li>
                                <li>
                                    <NavLink to="#">
                                        NavLink sin asignar
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">
                                        NavLink sin asignar Dos
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Label sin asignar</li>
                                <li>Route du Jura 49</li>
                                <li>1700 Fribourg</li>
                                <li>Switzer land</li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Phone</li>
                                <li>+41 (0) 75 510 28 70</li>
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
