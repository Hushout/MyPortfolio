import React from 'react'
import './Social.css';
import Bounce from 'react-reveal/Bounce';

function Social() {
    return (
        <div>
            <div id='contact-info'>
                <div class='links'>
                    <Bounce top delay={100}>
                    <a href='https://www.linkedin.com/in/anh-cao-79a7071b4/' class='orange-border' target='https://www.linkedin.com/in/anh-cao-79a7071b4/'>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>
                                <i class="fab fa-linkedin-in"></i>
                            </span>
                        </div>
                    </a>
                    </Bounce>
                    <Bounce top delay={200}>
                    <a href='https://www.youtube.com/channel/UCYM6tldewlhuKt6glewIJvg' class='orange-border' target='https://www.youtube.com/channel/UCYM6tldewlhuKt6glewIJvg'>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>
                                <i class="fab fa-youtube"></i>
                            </span>
                        </div>
                    </a>
                    </Bounce>
                    <Bounce top delay={300}>
                    <a href='https://twitter.com/Rabbeatz' class='orange-border' target='https://twitter.com/Rabbeatz'>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>
                                <i class="fab fa-twitter"></i>
                            </span>
                        </div>
                    </a>
                    </Bounce>
                    <Bounce top delay={400}>
                    <a href='https://github.com/Hushout' class='orange-border' target='https://github.com/Hushout'  >
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>
                                <i class="fab fa-github"></i>
                            </span>

                        </div>
                    </a>
                    </Bounce>
                    <Bounce top delay={500}>
                    <a href='https://www.facebook.com/caoanhlam/' class='orange-border' target='https://www.facebook.com/caoanhlam/'>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>
                                <i class="fab fa-facebook-f"></i>
                            </span>
                        </div>
                    </a>
                    </Bounce>
                    <Bounce top delay={600}>
                    <a href='https://www.instagram.com/hushout/' class='orange-border' target='https://www.instagram.com/hushout/'>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>
                                <i class="fab fa-instagram"></i>
                            </span>
                        </div>
                    </a>
                    </Bounce>
                </div>
            </div>

        </div>
    )
}

export default Social
