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

//start game
playBtnElement.addEventListener('click', function(){
    
    let rndNumList = generateRndIntegerNumList(5);
    console.log(rndNumList);
    
    pcInput(rndNumList);
    
    counter = 5;
    time = 1000;
    clock = setInterval(userAnswer, time, rndNumList);

    //valuto prompt

})



//////////////////////////////////////////////////
//////////////// FUNCTION ////////////////////////
//////////////////////////////////////////////////

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
    console.log(counter);

    userInput = '';
    if (counter === 0) {
        //interrompere
        clearInterval(clock);
        let userInput = prompt('insert numbers');
        userInputResult(userInput, rndNumList);

    }

}


function userInputResult (userInput, rndNumList){
    //ctrl
    let userInputCtrlArray = [];
    for (let i = 0; i < userInput.length; i++){
        userInputCtrlArray.push(parseInt(userInput[i]));
    }
    
    //points count
    let pointsCounter = 0;
    let rigthInputList = []
    for (let i = 0; i < rndNumList.length; i++){
        if (rndNumList.includes(userInputCtrlArray[i])){
            pointsCounter++;
            rigthInputList.push(userInputCtrlArray[i]);
        }
        
    }
    
   console.log('user points', pointsCounter);
   console.log('rigth inputs', rigthInputList);

}