

const goblinListEl = document.querySelector('.goblin-list');

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

for (let goblin of goblinsArr) {

    const goblinEl = renderGoblin(goblin);
    
    goblinEl.addEventListener('click', () => {
        if (Math.random() > .5) 
            alert(`You hit ${goblin.name}!`); // need to subtract HP from goblins when hit
    });

    goblinListEl.append(goblinEl);
}


function renderGoblin(newGoblin) {

    const nameDiv = document.createElement('div');
    const hpTag = document.createElement('p');

    nameDiv.textContent = newGoblin.name;
    hpTag.textContent = `HP: (${newGoblin.HP})`;
    nameDiv.classList.add('goblin');

    nameDiv.append(hpTag);
    return nameDiv;
}

// set default HP for when the new goblin generates upon add challenger 