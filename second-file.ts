interface Character {
    life: number
}


function damage(characterToDamage: Character, amount: number): number {
    characterToDamage.life -= amount;
    return characterToDamage.life;
}
const result = damage({ life: 100 }, 12);
console.log(result);

