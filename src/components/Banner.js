import React from 'react'
import {ReactComponent as RightArrow} from '../assets/arrow-right.svg'

function Banner() {
    return (
        <section className='main'>
            <div className="container">
                <div className="row">
                    <h2>
                        <div className="line">
                            <span>El exito es el resultado de un </span>
                        </div>
                        <div className="line">
                            <span>entranamiento duro.</span>
                        </div>
                    </h2>
                    <div className="btn-row">
                        <a href="https://cnnespanol.cnn.com/seccion/deportes/" target="_BLANK"> Noticias sobre deportes. <RightArrow /> </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
