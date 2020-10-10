function renderServices(selector, data) {
    //validation

    //logic
    const DOM = document.querySelector(selector);
    let HTML = '';
    const size = data.length;

    for ( let i=0; i<size; i++)
    {
        const service = data[i];
        HTML += ` <div class="service">
        <a  href="#">${service.title}</a>
        <img src="./photo/${service.photo}" alt="Photo">
        <p class="btn">${service.par}</p>
    </div>`;
    }
    
    return DOM.innerHTML = HTML;
}
