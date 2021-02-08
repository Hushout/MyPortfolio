import React, { PureComponent } from 'react'
import './About.scss'
import { motion } from "framer-motion";
import Bounce from 'react-reveal/Bounce';

export class About extends PureComponent {
    render() {
        return (
            <motion.div className="animated" initial="hidden" animate="visible" variants={{}}>
                <Bounce right>
                <section class="about-section" id="about">
                    <div><h1 class="section-title">About Me</h1></div>
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
                </Bounce>
            </motion.div>
           
        )
    }
}

export default About
