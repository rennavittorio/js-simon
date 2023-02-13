// CONSEGNA
// Visualizzare in pagina 5 numeri casuali con alert.
// Dopo che l’utente ha chiuso l’alert fate partire un timer di 30 secondi.
// Allo scadere dei 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali numeri sono stati individuati tramite console.log
// BONUS
// aggiungete una interfaccia per il gioco:
// almeno un pulsante play per poter ripetere il gioco al click sul pulsante
// e almeno gestite la stampa del risultato in pagina

//setup iniziale gioco
let playBtnElement = document.querySelector('.play-btn');
let counter;
let clock = undefined;
let time;
let level = 0;

//start game
playBtnElement.addEventListener('click', startGame);



//////////////////////////////////////////////////
//////////////// FUNCTION ////////////////////////
//////////////////////////////////////////////////
function startGame(){
    level++;
    let rndNumList = generateRndIntegerNumList(level);
    // console.log(rndNumList);
    
    pcInput(rndNumList);
    
    counter = 1;
    time = 1000;
    clock = setInterval(userAnswer, time, rndNumList);
}


//genera lista num rnd da 0 a numItems
function generateRndIntegerNumList (numItems){
    let rndList = []
    while (rndList.length < numItems){
        let rndNum = Math.floor(Math.random()*10);
        if (!rndList.includes(rndNum)){
            rndList.push(rndNum);
        }
        
    }
    
    return rndList;
    
}


function pcInput (list){
    for (let i = 0; i < list.length; i++){
        alert(list[i]);
    }

}


function userAnswer(rndNumList) {
    counter--;
    playBtnElement.removeEventListener('click', startGame)
    console.log(counter);

    userInput = '';
    if (counter === 0) {
        //interrompere
        clearInterval(clock);
        let userInput = prompt('insert numbers');
        let userRightNums = userInputResult(userInput, rndNumList);
        let userPoints = userRightNums.length;
        
        if (userPoints === rndNumList.length){
            console.log('user right', userRightNums);
            console.log('user points', userPoints);
            console.log('you complete level:', level);
            playBtnElement.addEventListener('click', startGame);
        } else {
            console.log('user rigth', userRightNums);
            console.log('user points', userPoints);
            console.log('your max level reached is', level - 1);
            playBtnElement.removeEventListener('click', startGame);
        }

    }

}


function userInputResult (userInput, rndNumList){
    //trasforma input in array
    let userInputCtrlArray = [];
    for (let i = 0; i < userInput.length; i++){
        userInputCtrlArray.push(parseInt(userInput[i]));
    }
    
    //points count
    let rigthInputList = []
    let wrongInputList = []
    let errorCounter = 0;
    for (let i = 0; i < rndNumList.length; i++){
        if (rndNumList.includes(userInputCtrlArray[i])){
            rigthInputList.push(userInputCtrlArray[i]);
        } else {
            wrongInputList.push(userInputCtrlArray[i]);
            errorCounter++;
        }
        
    }

    console.log('num shown:', rndNumList);
    console.log('num err:', wrongInputList);
    console.log('count err:', errorCounter);
    return rigthInputList;

}