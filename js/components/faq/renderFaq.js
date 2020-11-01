import { generateSingleFaq } from '../faq/generateSingleFaq.js'

function renderFaq(data) {
    //input validation

    //logic
    let HTML = '';
    const faqDOM = document.querySelector(data.selector);
    const faqCount = data.faq.length;
    if(!faqDOM){
        return;
    }
    for (let i = 0; i < faqCount; i++) {
        const faq = data.faq[i];
        
        HTML += generateSingleFaq(faq, i === 0 ? true : false);
    }

    // post logic validation

    //output
    faqDOM.innerHTML = HTML;

    // find .question element
    const allQuestionDOM = document.querySelectorAll('.qa > .qa');
    const allIconDOM = document.querySelectorAll('.circle');

   const min = document.querySelectorAll('.qa .line1');

    // events when clicked on .question-and-icon element
    for (let i = 0; i < allQuestionDOM.length; i++) {
        const question = allQuestionDOM[i];
        const icon = allIconDOM[i];
        const line = min[i];


        question.addEventListener('click', () => { 
            if (question.classList.contains('show')) {
                question.classList.remove('show');
            } else if (document.querySelector('.qa .show') === null) {
                question.classList.add('show');
            } else {
                document.querySelector('.qa .show').classList.remove('show');
                question.classList.add('show');
            }
            if (line.classList.contains('remove')) {
                line.classList.remove('remove');
            } else if (document.querySelector('.line1 .remove') === null) {
                line.classList.add('remove');
            } else {
                document.querySelector('.line1 .remove').classList.remove('remove');
                line.classList.add('remove');
            }
        });
    }
}

export { renderFaq }