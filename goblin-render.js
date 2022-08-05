export function renderGoblin(newGoblin) {

    const nameDiv = document.createElement('div');
    const hpTag = document.createElement('p');

    nameDiv.textContent = newGoblin.name;
    hpTag.textContent = `HP: (${newGoblin.HP})`;
    nameDiv.classList.add('goblin');

    if (newGoblin.HP <= 0) {
        nameDiv.classList.remove('goblin');
        nameDiv.classList.add('slain-goblin');
    }

    nameDiv.append(hpTag);
    return nameDiv;
}