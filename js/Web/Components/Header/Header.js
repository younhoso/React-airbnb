import React from 'react';
import {Header} from './style.js';
import Logo from './images/logo.png';

const Index = () => {
    return (
        <Header>
            <div>
                <img src={Logo} alr="에어비앤비"/>
            </div>
            <nav>
                <ul>
                    <li><a href="#0">숙소호스팅</a></li>
                    <li><a href="#0">숙소호스팅</a></li>
                </ul>

            </nav>
        </Header>
    )
}

export default Index;