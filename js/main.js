
"use strict";
//import header
import { headerData } from '../data/header.js';
import { RenderHeader } from '../js/components/RenderHeader.js';

// faq import
import { faqData } from '../data/faq.js';
import { renderFaq } from './components/faq/renderFaq.js';

//import data
import data from '../data/data.js';
//import meniu from './menu-mob.js';
//import rendering functions
//execute

//pliuso issiskleidimas, susiskleidimas
   // pliuso click'ai
  //
//header
new RenderHeader(headerData);

// faq logic
renderFaq(faqData);