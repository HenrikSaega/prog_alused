const { Console } = require('node:console');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisesta leedu pereknnanimi: ", perekonnanimi => {
    if(perekonnanimi.slice(-2) == "ne"){
        console.log("Abielus");
    } 
    else if(perekonnanimi.slice(-2) == "te")
    {
        console.log("Vallaline");
    } 
    else if(perekonnanimi.slice(-1) != "te"|| "ne" )
    {
        console.log("Pole leedulanna perekonnanimi");
    }
    rl.close();
});