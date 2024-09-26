const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisest astme alus:`, astendaja => {
  let astme_alus = 2;
  let tulemus = astme_alus**astendaja;
  console.log(tulemus);
  rl.close();
});
