"use strict";
//import data
import data from '../data/data.js';
//import rendering functions
//execute
function mobMeniu() {
    const burgerDOM = document.querySelector('#header .mob-menu-icon');
        burgerDOM.addEventListener('click', () => {
            const contentDOM = burgerDOM.closest('.menu-mob-h');
            contentDOM.classList.add('show');
        })
    
    }

