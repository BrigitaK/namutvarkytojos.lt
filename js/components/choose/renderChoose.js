function renderChoose(data) {
    //input validation
    //logic
    let HTML = '';
    const DOM = document.querySelector(data.selector);

    const chooseData = data.choose;
    if(!DOM){
        return;
    }
    for (let i = 0; i < chooseData.length; i++) {
        const choose = chooseData[i];
        HTML += `<div class=" row col-12 col-small-12 col-sm-4 col-md-4">
        <div class="row-ch">
            <img class="col-6" src="${choose.img}" alt="Photo">
            <h2 class="col-6">${choose.title}</h2>
        </div>
        <a>${choose.par}</a>
        </div>`;
    }
console.log(HTML);
    // post logic validation

    //output
    DOM.innerHTML = HTML;
    console.log(HTML);
}

export { renderChoose }