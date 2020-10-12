
    // elemento paieska html
    //perrasome html elemento turini
    //darome interakcijas
   /* const burgerDOM = document.querySelector('header .mob-menu-icon');
    const menuDOM = document.querySelector('header .menu');
    const menDOM = document.querySelector('header .show');
    let menuExpanded = false
    //
    burgerDOM.addEventListener('click', () => {
        //susirandame artimiausia tevini elementa div
        menuExpanded = !menuExpanded;
        if (menuExpanded ) {
            menuDOM.classList.remove('show');
        } else {
            menuDOM.classList.add('show');
        }
    //jeigu buvo paspausta yra true, o jeigu true tuomet remove show
    
    });*/

const burgerDOM = document.querySelector('header .mob-menu-icon');
    const menuDOM = document.querySelector('header .menu');
    //
    burgerDOM.addEventListener('click', () => {
        //susirandame artimiausia tevini elementa div
  
            menuDOM.classList.toggle('show');
    
    //jeigu buvo paspausta yra true, o jeigu true tuomet remove show
    
    });
    