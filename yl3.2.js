const { Console } = require('node:console');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let porgandite_arv = 0;
rl.question("Sisesta ringide arv: ", ringide_arv => {
    for(let i = 1; i <= ringide_arv; i++){
        if( i % 2 === 0){
            porgandite_arv += i;
        } 
    }
    console.log(`Porgandite koguarv on ${porgandite_arv}`);
    rl.close() 
});