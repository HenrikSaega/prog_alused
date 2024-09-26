const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisestage oma nimi: ", nimi =>{
    rl.question("Sisestage lubatud kiirus: ", lubatud_kiirus =>{
        rl.question("Siestage tegelik kiirus: ", tegelik_kiirus =>{
            let trahv = (tegelik_kiirus-lubatud_kiirus)*3;
            trahv = Math.min(trahv, 190);
            console.log(`${nimi}, kiiruse ületamise eest on teie trahv ${trahv} €`);
            rl.close();
        })
    })
});