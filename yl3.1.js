const { Console } = require('node:console');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisesta äratuste arv: ", aratusarv => {
    for(let kordus = 0; kordus < aratusarv; kordus++)
    {
        console.log("Tõuse ja Sära!");
    }
    rl.close();
});