import React from 'react'

import arrow from '../assets/arrow-right-white.svg'

const Futbol = () => {
    return (
        <div className="page">
            <div className="futbol">
            <div className="container"> <br /><br /><br />
                <div className="futbol-inner">
                    <div className="futbol-content">
                        <div className="futbol-content-inner">
                            <h1>
                                <div className="futbol-content-line">
                                    <div className="futbol-content-line-inner">Relieving the bruden</div>
                                </div>
                                <div className="futbol-content-line">
                                    <div className="futbol-content-line-inner">of disease caused</div>
                                </div>
                                <div className="futbol-content-line">
                                    <div className="futbol-content-line-inner">by behavior.</div>
                                </div>
                            </h1>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatum ad itaque deserunt animi nulla? Est facere aut illo facilis harum adipisci, doloremque doloribus, ullam tempora ut perferendis eaque quisquam.</p>
                            <div className="btn-row">
                                <button className="explore-button">
                                    Explore
                                    <div className="arrow-icon">
                                        <img src={arrow} alt="arrow" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="futbol-images">
                        <div className="futbol-images-inner">
                            <div className="futbol-image first">
                                <img src="https://st1.uvnimg.com/dims4/default/ce759a0/2147483647/thumbnail/1240x698/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2F3c%2Fa6%2F921400d0499cb2980b77c519307e%2Ffutbol-generic-entry-point.jpg" alt="first image futbol" />
                            </div>
                            <div className="futbol-image second">
                                <img src="https://img.blogs.es/anexom/wp-content/uploads/2018/08/mitos-futbol-ansiedad-1024x683.jpg" alt="second image futbol" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Futbol
