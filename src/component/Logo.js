import React from 'react'
import './Logo.scss'
import logo from './icon.png';

function Logo() {
    return (
        <div className="logo-container">
            <ul class="c-rainbow">
                <li class="c-rainbow__layer c-rainbow__layer--white">Hushbox</li>
                <li class="c-rainbow__layer c-rainbow__layer--orange">Hushbox</li>
                <li class="c-rainbow__layer c-rainbow__layer--red">Hushbox</li>
                <li class="c-rainbow__layer c-rainbow__layer--violet">Hushbox</li>
                <li class="c-rainbow__layer c-rainbow__layer--blue">Hushbox</li>
                <li class="c-rainbow__layer c-rainbow__layer--green">Hushbox</li>
                <li class="c-rainbow__layer c-rainbow__layer--yellow">Hushbox</li>
            </ul>
            <img src={logo} alt="logo" height="50px"/>
        </div>

    )
}

export default Logo