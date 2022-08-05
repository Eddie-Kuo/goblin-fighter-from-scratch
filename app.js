import { renderGoblin } from './goblin-render.js';

const goblinListEl = document.querySelector('.goblin-list');

const goblinInputEl = document.querySelector('.goblin-input');
const goblinAddButt = document.querySelector('.goblin-button');
const goblinScoreEl = document.querySelector('.score-display');
const userInputEl = document.querySelector('.user-input');
const userAddButt = document.querySelector('.user-button');
const userNameEl = document.querySelector('.player-name');



const playerHealthEl = document.querySelector('.player-health');
const playerAvatarEl = document.querySelector('.player-avatar');


let goblinsSlain = 0;
let playerHP = 3;

const goblinsArr = [
    {
        name: 'Jeff',
        HP: 5,
    },
    {
        name: 'Sara',
        HP: 1,
    },
    {
        name: 'Brodie',
        HP: 1,
    },
];

// function to be able input your name as the player
userAddButt.addEventListener('click', () =>{
    userNameEl.textContent = `${userInputEl.value} the Minion Purifier`;
});


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
            if (Math.random() < .8) {
                alert(`You have been hit by ${goblin.name}!`);
                playerHP--;
                playerHealthEl.textContent = `HP: (${playerHP})`;
            }
            if (playerHP === 0) {
                alert(`You have been defeated!!`);
                playerAvatarEl.textContent = `😵`;
            }
            if (goblin.HP === 0) {
                goblinsSlain++;
                goblinEl.disabled = true;
                goblinScoreEl.textContent = `You have purified ${goblinsSlain} minions(s)`;
                alert(`You have defeated ${goblin.name}`);
            }

            displayGoblins();
        });
        goblinListEl.append(goblinEl);
    }
  
}




displayGoblins();