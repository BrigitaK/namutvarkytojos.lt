
"use strict";
//import header
import { headerData } from '../data/header.js';
import { RenderHeader } from '../js/components/RenderHeader.js';

//hero
import { herotypeanim } from '../js/herotypeanim.js';
import { heroData } from '../data/hero.js';
//choose-us 
import { chooseData } from '../data/choose.js';
import { renderChoose } from '../js/components/choose/renderChoose.js';
// faq import
import { faqData } from '../data/faq.js';
import { renderFaq } from '../js/components/faq/renderFaq.js';

//import data
import data from '../data/data.js';

//service
import { servicesData } from '../data/services.js';
import { renderServices } from '../js/components/services/renderServices.js';
//import meniu from './menu-mob.js';
//import rendering functions
//execute

//pliuso issiskleidimas, susiskleidimas
   // pliuso click'ai
  //
//header
new RenderHeader(headerData);

//hero
herotypeanim(heroData);

// choose
renderChoose(chooseData);

// faq logic
renderFaq(faqData);

//services logic
renderServices(servicesData);