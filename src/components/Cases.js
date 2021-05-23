import React from 'react'
import { ReactComponent as CasesNext } from '../assets/arrow-right.svg'
import { ReactComponent as CasesPrev } from '../assets/arrow-left.svg'

const caseStudies = [
    {
        id: 1,
        subtitle: 'Curology',
        title: 'A custom formule for yout skins unique needs',
        img: 'https://www.bbva.com/wp-content/uploads/2017/08/bbva-balon-futbol-2017-08-11-1024x622.jpg'
    },
    {
        id: 2,
        subtitle: 'Yourspace',
        title: 'Open space floor plans for you next venture',
        img: 'https://media.iatiseguros.com/wp-content/uploads/2019/07/04011620/deportes-de-raqueta-3.jpg'
    },
    {
        id: 3,
        subtitle: 'Lumin',
        title: 'For your best look ever',
        img: 'https://www.thoughtco.com/thmb/aX1fRuyUBed64O873TX8xt61HGk=/2588x1456/smart/filters:no_upscale()/GettyImages-550929069-basketball-dunk-58f263745f9b582c4d57f701.jpg'
    }
];

const Cases = () => {
    return (
        <section className="cases">
            <div className="container-fluid">
                <div className="cases-navigation">
                    <div className="cases-arrow prev disabled">
                        <CasesPrev />
                    </div>
                    <div className="cases-arrow next">
                        <CasesNext />
                    </div>
                </div>
                <div className="row">
                    {caseStudies.map((caseItem) => (
                        <div className="case" key={caseItem.id}>
                            <div className="case-details">
                                <span>{caseItem.subtitle}</span>
                                <h2>{caseItem.title}</h2>
                            </div>
                            <div className="case-image">
                                <img
                                    src={caseItem.img}
                                    alt={caseItem.title}
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Cases
