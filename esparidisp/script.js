//1. far scegliere all'utente se pari o dispari
//2. scegliere un numero tra 1 e 5
//3. far estrarre al pc un numero  tra 1 e 5
//4. confrontare i due numeri e verificare il vincitore

document.getElementById('gioca').addEventListener('click',funPariDispari);

function funPariDispari(){
  const userScelta = document.getElementById('scelte').value;
  const userNumber = parseInt(document.getElementById('numero').value);
  //facendo così prendiamo il valore presente in option--> value.
  const pcNumber = getRandomNumber(1,5);
  const sum = userNumber + pcNumber;
  console.log(userNumber);
  console.log("l'utente ha scelto " + userScelta);
  console.log('il pc ha scelto il numero ' + pcNumber);
  console.log( 'la somma è ' + sum);
  console.log(pariDispari(sum));
  let outMessage;
  if(userScelta === pariDispari(sum)){
    outMessage= 'hai vinto!!';
    console.log(outMessage);
  }else{
    outMessage= 'hai perso!!';
    console.log(outMessage);
  }
  document.getElementById('out-mes').innerHTML=outMessage;
  

}
/**
 * genera numeri casuali
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */

function getRandomNumber(min,max){
  return Math.floor(Math.random()*(max - min + 1)+ min);
}


/**
 * verifichiamo pari o dispari
 * @param {number} n 
 * @returns 
 */

function pariDispari (n){
  if(n % 2) {return 'dispari';
}
  return 'pari';
}