const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisesta astme alus:`, astme_alus => {
  rl.question("Sisesta astendaja: ", astendaja =>{
    let tulemus = astme_alus**astendaja;
    console.log(tulemus);
    rl.close();
  })
});