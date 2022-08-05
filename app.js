import { renderGoblin } from './goblin-render.js';

const goblinListEl = document.querySelector('.goblin-list');

const goblinInputEl = document.querySelector('.goblin-input');
const goblinAddButt = document.querySelector('.goblin-button');



let goblinHP = 5;

const goblinsArr = [
    {
        name: 'Jeff',
        HP: 5,
    },
    {
        name: 'Sara',
        HP: 6,
    },
    {
        name: 'Brodie',
        HP: 5,
    },
];


// Input and button to add in new challengers to the goblin list
function addGoblin() {
    const newChallenger = {
        name: goblinInputEl.value,
        HP: 3
    };
    goblinsArr.push(newChallenger);
    renderGoblin(newChallenger);
}

goblinAddButt.addEventListener('click', () => {
    addGoblin();
    displayGoblins();
});

//function to display goblins and control of their event listeners to manipulate HP 
function displayGoblins() {
    goblinListEl.textContent = '';

    for (let goblin of goblinsArr) {

        const goblinEl = renderGoblin(goblin);
  
        goblinEl.addEventListener('click', () => {
            if (Math.random() > .5) {
                alert(`You hit ${goblin.name}!`);
                goblin.HP--;}
            displayGoblins();
        });
  
        goblinListEl.append(goblinEl);
    }
  
}



displayGoblins();