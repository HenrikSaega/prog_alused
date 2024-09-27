const { Console } = require('node:console');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisestage kirja suurus(MB): ", kirjaSuurus =>{
    rl.question("Sisestage kirja pealkiri: ", kirjaPealkiri =>{
        rl.question("Kas kirjaga on kaasas fail: ", failiOlek =>{
            if(kirjaPealkiri == "")
            {
                console.log("Kiri on spämm!");
            }
            else if(failiOlek == "jah" && kirjaSuurus > 1.0)
            {
                console.log("Kiri on spämm");
            }
            else
            {
                console.log("Kiri ei ole spämm!");
            } 
            rl.close();
        } )
    });
});