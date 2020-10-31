import { isValidFaq } from './isValidFaq.js'

function generateSingleFaq(faq, expanded = false) {
    // input validation
    if (!isValidFaq(faq)) {
        return '';
    }

    // logic 
    const HTML = `<div class="qa ${expanded ? 'show' : ''}">
                    <div class="question-and-icon">
                        <p class="question">${faq.question}</p>
                        <div class="circle">
                        <i class="line"></i>
                        <i class="line1 ${expanded ? 'remove' : ''}"></i>
                    </div>
                    </div>
                    <p class="answer hidden">${faq.answer}</p>
                </div>`;

    // output 
    return HTML;
}

export { generateSingleFaq }