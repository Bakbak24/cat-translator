let catTranslator = document.querySelector('#inpCat');
let engTranslator = document.querySelector('#inpEn');
let letterCount = document.querySelector('#letters');

let count = 0;
letterCount.textContent = count + ' / 5000';

const catTranslations = ["I plan to conquer the world today, but first... a nap.", "Human, fetch me a snack.", "I demand treats, puny servant!", "Attention, hooman! Attend to my feline needs!", "I command you to pet me, inferior being!", "Bow before me, for I am the ruler of this household!", "Bring forth the sacred tuna, peasant!", "Prepare my royal cushion at once, human!"];

catTranslator.addEventListener('keyup', (event) => {
    let catInput = event.target.value;
    let textareaHeight = 165;

    if (catInput.length > 5000) {
        catInput = catInput.substring(0, 5000);
    }
    if (catInput.length >= 100) {
        engTranslator.style.fontSize = '18px';
        catTranslator.style.fontSize = '18px';
        catTranslator.style.height = textareaHeight+50+ 'px';
    }
    else{
        engTranslator.style.fontSize = '21px';
        catTranslator.style.fontSize = '21px';
        catTranslator.style.height = textareaHeight + 'px';
    }
    count = catInput.length;
    letterCount.textContent = count + ' / 5000';
    setTimeout(() => {
        if (catInput.length === 0) {
            engTranslator.value = 'Translation';
        }
        else{
            if (/^[a-zA-Z]*$/.test(catInput)) {
                if (/^mea*u*o*w+$/i.test(catInput)) {
                    randomCatTranslations();
                } else {
                    engTranslator.value = "Sorry, only fluent in 'cat' here!";
                }
            } else {
                engTranslator.value = "Only letters plz!";
            }
        }
    }, 1000);
});

function randomCatTranslations() {
    let randomTranslation = Math.floor(Math.random() * catTranslations.length);
    engTranslator.value = catTranslations[randomTranslation];
}
document.addEventListener('DOMContentLoaded', function () {
    catTranslator.value = '';
    engTranslator.value = '';
});

