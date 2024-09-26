const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisesta ainepunktide arv: ", ainepunktide_arv =>{
    rl.question("Sisesta nädalate arv: ", nädalate_arv =>{
        let eeldatav_ajakulu =  Math.round(ainepunktide_arv * 26 / nädalate_arv);
        console.log(eeldatav_ajakulu);
        rl.close();
    });
});