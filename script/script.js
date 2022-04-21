// 1. evento scatenato dal click del bottone 
// 2. verificare la parola
// 3. girarla e verificare 
// 4. stampare in uscita il risultato


// cliccando il bottone in pagina scateniamo l'evento sottostante
document.getElementById('verifica').addEventListener('click', funVerifica);
// passiamo all'evento la nostra funzione funVerifica



// strutturiamo la funzione
function funVerifica(){
  const parolaUtente = document.getElementById('parola').value;
  const parolaReverse = giraParola(parolaUtente);
  // aggiungiamo alla nostra costante parola reverse la nostra nuova funzione giraParola 
  console.log(parolaReverse);
  let outputMessage;
  if(parolaUtente.toLowerCase() === parolaReverse.toLowerCase()){
    outputMessage = `la parola ${parolaUtente} è palindroma`;
  }else{
    outputMessage = `la parola ${parolaUtente} non è palindroma`;
  }
  document.getElementById('out-poli').innerHTML=outputMessage;
}

function giraParola(str){
  let reverseString = '';

  // metodo per girare stringhe usando queste proprietà
  // con split, trasformiamo una stringa in un array, ogni elemento dell'rray è una lettera
  // giriamo con reverse l'array
  //join mi trasforma l'array in stringa in base a un separatore e in questo caso trasformiamo l'array girato.
  // per verificare se funziona poi usiamo return str.split.....
  // console.log(str.split('').reverse().join('--'))

  for(let i = str.length -1; i >= 0; i--){
    
    reverseString +=str[i];
  }
  // con questa (sopra) sintassi è possibile leggere elementi interni a stringa come se fosse un array 

  return reverseString;
}

