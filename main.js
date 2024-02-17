catTranslator = document.querySelector('#inpCat');
engTranslator = document.querySelector('#inpEn');
letterCount = document.querySelector('#letters');

let count = 0;
letterCount.textContent = count + ' / 5000';

const catTranslations = ["I plan to conquer the world today, but first... a nap."];

catTranslator.addEventListener('keyup', (event) => {
    let catInput = event.target.value;
    
    if (catInput.length > 5000) {
        catInput = catInput.substring(0, 5000);
    }
    if (catInput.length >= 100) {
        engTranslator.style.fontSize = '18px';
        catTranslator.style.fontSize = '18px';

    }
    count = catInput.length;
    letterCount.textContent = count + ' / 5000';
    if (catInput.toLowerCase().includes('meow')) {
        engTranslator.value = catTranslations[0];
    }
    else {
        let catText = catInput;
        engTranslator.value = catText;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    catTranslator.value = '';
    engTranslator.value = '';
});

