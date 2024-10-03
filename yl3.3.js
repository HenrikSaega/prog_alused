const { Console } = require('node:console');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisesta täringute arv: ", TaringuteArv =>{
    let arv;
    for(let i = 0; i < TaringuteArv; i++)
    {
        arv = Math.floor(Math.random() * 7);

        console.log(arv);
    } 
    rl.close();
});