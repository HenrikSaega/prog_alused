const { Console } = require('node:console');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Siseta vanus: ", vanus =>{
    rl.question("Siseta sugu(M, m või  N, n): ", sugu =>{
        rl.question("Treenigutüüp(1 - tervisetreening, 2 - põhivastupidavuse treening, 3 - intensiivne aeroobne treening): ", treeningtuup =>{
            let pulss;
            let minPulss;
            let maxPulss;
            
            if(sugu == "m"|| sugu == "M"){
                pulss = 220 - vanus;
            }
            else if(sugu == "n"|| sugu == "N"){
                pulss = 206 - vanus * 0.88;
            } 
            console.log(pulss);
            
            if(treeningtuup == 1)
                {
                    maxPulss = pulss*0.7;
                    minPulss = pulss*0.5;
                } 
            else if(treeningtuup == 2)
                {
                    maxPulss = pulss*0.8;
                    minPulss = pulss*0.7;
                } 
            else if(treeningtuup == 2)
                {
                    maxPulss = pulss*0.87;
                    minPulss = pulss*0.8;
                }  
        console.log(`Pulss peaks jääma vahemikku ${Math.round(minPulss)} kuni ${Math.round(maxPulss)}`);
        rl.close();
        }); 
    }); 
});