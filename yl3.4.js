const { Console } = require('node:console');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let Õunad = 14;
let JagatudÕun;
rl.question("Mitu pöialpoissi tahav õunu: ", PoisteArv =>{
    for(let i = 1; i <= PoisteArv; i++)
    {
        JagatudÕun = Math.ceil(Math.random() * 2);
        console.log(JagatudÕun);
        Õunad -= JagatudÕun;

    } 
    console.log(`Lumivalgekesele jä ${Õunad} õuna.`);
    rl.close();
});