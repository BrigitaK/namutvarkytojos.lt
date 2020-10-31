function renderServices(data) {
    //input validation
    //logic
    let HTML = '';
    const DOM = document.querySelector(data.selector);

    const servicesData = data.services;
    if(!DOM){
        return;
    }
    for (let i = 0; i < servicesData.length; i++) {
        const service = servicesData[i];
        HTML += `<div class=" row service col-12 col-small-12 col-sm-4 col-md-4">
        <div class="block1"></div>
        <h2>${service.title}</h2>
        <p>${service.paragraph}</p>
        <a href="${service.link}" class="service-btn">Plačiau</a>
        </div>`;
    }
console.log(HTML);
    // post logic validation

    //output
    DOM.innerHTML = `<div class="row col-12">
                        <h1>Teikiamos paslaugos</h1>
                        <div class="line"></div>
                    </div>
                    ${HTML}`;
    console.log(HTML);
}

export { renderServices }