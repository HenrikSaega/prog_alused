const { Console } = require('node:console');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*rl.question("Siseta õhutemperatuur: ", ohutemperatuur => {
    if(ohutemperatuur > 4.0)
    {
        console.log("Ei ole jäätumise ohtu.");
    } 
    else
    {
        console.log("On jäätumise oht.");
    } 
    rl.close();

});*/

rl.question("Sisesta õhutemperatuur: ", ohutemperatuur =>{
    (ohutemperatuur > 4.0) ? console.log("Ei ole jäätumise ohtu."):console.log("On jäätumise oht.");
    rl.close();
})