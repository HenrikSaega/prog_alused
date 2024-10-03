const { Console } = require('node:console');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Kas soovite ise istekoha valida(ise/loos):", valimine =>{
    let tõenäosus;
    let istekoht;
    if(valimine == "ise")
    {
        rl.question("Kas soovite istuda akna ääres(jah/ei): ", aken =>
        {
            if(aken == "jah")
            {
                console.log("Valisite ise istekoha. Valisite aknakoha.")
            }
            else if(aken =="ei")
            {
                console.log("Valisite ise istekoha. Valisite vahekäigukoha.")
            }
            rl.close();
        });
    }
    else if(valimine == "loos")
    {
        tõenäosus = Math.random()
        if(tõenäosus < 0.33)
        {
            console.log("Istekoht loositi. Aknakoht.")
        } 
        else
        {
            console.log("Istekoht loositi. Vahekäigukoht.")
        } 
        rl.close();
    } 
});