import React, { PureComponent } from 'react'
import './About.scss'

export class About extends PureComponent {
    render() {
        return (
            <div>
                <section class="about-section " id="about">
                    <h2 class="section-title">About</h2>
                    <div class="about__container-bd-grid">
                    <div class="about__img">
                        <img src={process.env.PUBLIC_URL + '/images/icon.png'} height="50px" />
                    </div>
                    <div class="about__txt">
                        <h2 class="about__subtitle">I'am Marlon</h2>
                        <p class="about__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.</p>           
                    </div>                                   
                    </div>
                </section>
            </div>
           
        )
    }
}

export default About
