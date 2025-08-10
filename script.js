function rollDice(){
    const numOfDiceRolls=document.querySelector("#numOfRolls").value;
    const diceResult=document.querySelector("#diceResult");
    const diceImages=document.querySelector("#diceImages");
    const Images=[];
    const values=[];

    for (let i=0;i<numOfDiceRolls;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        Images.push(`<img src="images/dice${value}.png" alt="Dice ${value}">`);
    }


    diceResult.innerText = `Dice: ${values.join(", ")}`;
    diceImages.innerHTML = Images.join("");

}

