import React, {useState, useEffect} from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {gsap} from 'gsap'

import {ReactComponent as UpArrow} from '../assets/up-arrow-circle.svg'

//timeline para animacion de menu opended
let tl = gsap.timeline()

function Header({history, dimensions}) {

    //variable para saber el estado de el menu, si esta abierto o cerrado
    const [menuState, setMenuState] = useState({menuOpened: false});


    useEffect(() => {

        //para que cuando se seleccione un NavLink del Nav se cierre en automatico la barra de
        history.listen(() => {
            setMenuState({menuOpened: false})
        })

        if(menuState.menuOpened === true){
            //RUN OPEN MENU ANIMATION
            gsap.to('nav', {css: {display: "block"}}) //quitar el display: none del nav para mostrarlo
            gsap.to('body', {css: {overflow: "hidden"}}) //disable the scroll on the body

            tl.to('.App', {
                duration: 0.7,
                y: dimensions.width <= 654 ? '90vh' : dimensions.height / 1.5, //si esta en dimensiones de movil abrir el menu a 90vh, si esta en desktop abrirlo solo a la mitad 50vh
                ease: "expo.inOut"
            }).to('.hamburger-menu span', { //encojer boton de abrir menu y desaparecerlo
                duration: .6,
                delay: -1,
                scaleX: 0,
                transformOrigin: '50% 0%',
                ease: "expo.inOut"
            })
            //manipular paths de imagen svg con clases path para que aparezca de forma animada
            .to('#Path_1', {
                duration: .4,
                delay: -.6,
                css: {
                    strokeDashoffset: 10,
                    strokeDasharray: 5
                }
            })
            .to('#Path_2', {
                duration: .4,
                delay: -.6,
                css: {
                    strokeDashoffset: 10,
                    strokeDasharray: 20
                }
            })
            .to('#Line_1', {
                duration: .4,
                delay: -.6,
                css: {
                    strokeDashoffset: 10,
                    strokeDasharray: 18
                }
            })
            .to('#circle', {
                duration: .6,
                delay: -.8,
                css: {
                    strokeDashoffset: 0,
                }
            })
            .to('.hamburger-menu-close', { //quitar el display: none de el menu close
                duration: .6,
                delay: -.8,
                css: {
                    display: "block"
                }
            })
        }else{
            //RUN CLOSE MENU ANIMATION
            tl.to('.App', { //volver a llevar el .App a su posicion original osea en y: 0px y que el nav se quede atras escondido
                duration: 1,
                y: 0,
                ease: 'expo.inOut'
            }).to('#circle', { //animar circulo del svg para cerrarse
                duration: .6,
                delay: -.6,
                css: {
                    strokeDashoffset:-193,
                    strokeDasharray: 227
                }
            })
            //animar paths del svg para que desaparezca
            .to('#Path_1', { //animar circulo del svg
                duration: .4,
                delay: -.6,
                css: {
                    strokeDashoffset: 10,
                    strokeDasharray: 10
                }
            })
            .to('#Path_2', { //animar circulo del svg
                duration: .4,
                delay: -.6,
                css: {
                    strokeDashoffset: 10,
                    strokeDasharray: 10
                }
            })
            .to('#Line_1', { //animar circulo del svg
                duration: .4,
                delay: -.6,
                css: {
                    strokeDashoffset: 40,
                    strokeDasharray: 40
                }
            })
            .to('.hamburger-menu span', { //desencojer el boton de abrir menu escalandolo de nuevo a 1
                duration: .6,
                delay: -0.6,
                scaleX: 1,
                transformOrigin: '50% 0%',
                ease: "expo.inOut"
            })
            //BRING THE OPEN MENU BUTTON BACK ONCE IS CLOSED
            .to('.hamburger-menu-close', { //desaparecer el boton de cerrar menu
                duration: 0,
                css: {
                    display: "none"
                }
            }).to('body', { //permitir hacer scroll en la pagina de nuevo
                css: {
                    overflow: 'auto'
                }
            }).to('nav', { //volver a poner el nav en display:none para desaparecerlo por completo y que no consuma recursos
                css: {
                    display: "none"
                }
            })

        }
    }, [menuState.menuOpened])

    return (
        <div className="header">
            <div className="container">
                <div className="row v-center space-between">
                    <div className="logo">
                        <NavLink to="/">DEPORTES .</NavLink>
                    </div>
                    <div className="nav-toggle">
                        <div onClick={() => setMenuState({menuOpened: true})} className="hamburger-menu">
                            <span></span>
                            <span></span>
                        </div>
                        <div onClick={() => setMenuState({menuOpened: false})} className="hamburger-menu-close">
                            <UpArrow />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Header)
