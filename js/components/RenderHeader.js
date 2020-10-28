//import { URL } from '../../utils/URL.js';

class RenderHeader {
    constructor(params) {
        this.selector = params.selector;
        this.logo = params.logo;
        this.menuLinks = params.menu;

        this.DOM = null;
   //     this.baseURL = URL.baseURL();

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return;
        }

        this.render();
        this.addEvents();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);  // false -> DOM = null
        if (DOM) {
            this.DOM = DOM;
            return true;
        }
        return false;
    }

    generateLogo() {
            return `<a class="logo" href="#">Namų Tvarkytojos</a>`;
        
    }

    isValidMenuLink(menuItem) {
        return true;
    }

    generateNav() {
        let HTML = '';
        for (let i = 0; i < this.menuLinks.length; i++) {
            const menuItem = this.menuLinks[i];
            if (!this.isValidMenuLink(menuItem)) {
                continue;
            }
            let url = this.baseURL + menuItem.link;
            if (url[url.length - 1] !== '/') {
                url += '/';
            }

            HTML += `<a href="${url}" class="${location.href === url ? 'active' : ''}">${menuItem.text}</a>`;
        }
        return HTML;
    }

    isValidMenu() {
        if (!Array.isArray(this.menuLinks)) {
            return false;
        }
        if (this.menuLinks.length === 0) {
            return false;
        }
        return true;
    }

    generateHTML() {
        // validation
        if (!this.isValidMenu()) {
            return '';
        }

        // output
        return `${this.generateLogo()}
                <i class="hamburger fa fa-bars"></i>
                <nav>
                    ${this.generateNav()}
                </nav>`;
    }

    render() {
        this.DOM.innerHTML = this.generateHTML();
    }

    addEvents() {
        // registruojame scroll event listener
        // priklausomai nuo aukscio, kuriame esu: prideda/atima .scroll klase nuo/ant header elemento
        addEventListener('scroll', () => {
            if (scrollY > 100) {
                this.DOM.closest('header').classList.add('scroll');
            } else {
                this.DOM.closest('header').classList.remove('scroll');
            }
        })

        // hamburgerio click'ai
        const hamburger = this.DOM.querySelector('.hamburger');
        const nav = this.DOM.querySelector('nav');
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('visible');
            hamburger.classList.add('new');
        })

        const bodyDOM = document.querySelector('main');
        bodyDOM.addEventListener('click', () => {
            hamburger.classList.remove('new');
            
            });
      
    }
}

export { RenderHeader }