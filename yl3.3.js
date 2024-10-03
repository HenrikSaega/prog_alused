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
        arv = Math.ceil(Math.random() * 6);

        console.log(arv);
    } 
    rl.close();
});