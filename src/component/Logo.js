import React from 'react'
import './Logo.scss'
import logo from './icon.png';

function Logo() {
    return (
        <div className="logo-container">
            <ul class="c-rainbow">
                <li class="c-rainbow__layer c-rainbow__layer--white">Lam</li>
                <li class="c-rainbow__layer c-rainbow__layer--orange">Lam</li>
                <li class="c-rainbow__layer c-rainbow__layer--red">Lam</li>
                <li class="c-rainbow__layer c-rainbow__layer--violet">Lam</li>
                <li class="c-rainbow__layer c-rainbow__layer--blue">Lam</li>
                <li class="c-rainbow__layer c-rainbow__layer--green">Lam</li>
                <li class="c-rainbow__layer c-rainbow__layer--yellow">Lam</li>
            </ul>
            <img src={logo} alt="logo" height="50px"/>
        </div>

    )
}

export default Logo
