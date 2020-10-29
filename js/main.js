"use strict";
//import header
import { headerData } from '../data/header.js';
import { RenderHeader } from '../js/components/RenderHeader.js';
//import data
import data from '../data/data.js';
//import meniu from './menu-mob.js';
//import rendering functions
//execute

//pliuso issiskleidimas, susiskleidimas
   // pliuso click'ai
   const plus = document.querySelector('#duk .circle');
   const par = document.querySelector('.questions .par');
   plus.addEventListener('click', () => {
       par.classList.toggle('visible');
   });
//header
new RenderHeader(headerData);