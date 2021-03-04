//jshint esversion:9
const cardsContainerEl = document.getElementById('cards__container');
const prevBtnEl = document.getElementById('prev');
const nextBtnEl = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtnEl = document.getElementById('show');
const hideBtnEl = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addCardBtnEl = document.getElementById('add__card');
const clearBtnEl = document.getElementById('clear');
const addContainerEl = document.getElementById('add__contaier');

let currentActiveCard = 0;
const cardsEl = [];
const cardsData = [{
        question: "What must a variable begin with?",
        answer: "A letter, $ or _"
    },
    {
        question: "What is a variable ?",
        answer: "Container for a piece of data"
    },
    {
        question: "Example of Case Sensitive Variable",
        answer: "thisIsVariable"
    }
];

function createCards() {
    cardsData.forEach((data, index) => createCard(data, index));
}

function createCard(data, index) {
    const card = document.createElement('div');
    card.classList.add('card');

    if (index === 0) {
        card.classList.add('active');
    }

    card.innerHTML = `
    <div class="inner__card">
         <div class="inner__card__front">
             <p>
                ${data.question}
             </p>
          </div>
         <div class="inner__card__back">
            <p>
             ${data.answer}
            </p>
        </div>
    </div>
    `;

    card.addEventListener('click', () => {
        card.classList.toggle('show__answer');
    });

    cardsEl.push(card);

    cardsContainerEl.appendChild(card);

    updateCurrentText();

}

function updateCurrentText() {
    currentEl.innerText = `${currentActiveCard + 1} / ${cardsEl.length}`;
}


createCards();

// EVENT LISTENERS

nextBtnEl.addEventListener('click', () => {
    cardsEl[currentActiveCard].className = 'card left';
    currentActiveCard += 1;

    if (currentActiveCard > cardsEl.length - 1) {
        currentActiveCard = cardsEl.length - 1;
    }

    cardsEl[currentActiveCard].className = 'card active';

    updateCurrentText();
});


prevBtnEl.addEventListener('click', () => {
    cardsEl[currentActiveCard].className = 'card right';
    currentActiveCard -= 1;

    if (currentActiveCard < 0) {
        currentActiveCard = 0;
    }

    cardsEl[currentActiveCard].className = 'card active';

    updateCurrentText();
});