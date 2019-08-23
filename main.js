let Body = require('./body.js');
let fs = require('fs');
let readline = require('readline');
let calculate = require('./calculator.js');


class System{
  constructor(simTime,timeIncrement,numberOfBodies,nBodyDataURL){
    this.SIM_TIME = simTime;
    this.TIME_INCREMENT = timeIncrement;
    this.bodyList = [];
    this.tempBodyList = [];
    this.nBodyDataURL = nBodyDataURL;
    this.G_CONSTANT = 6.67408E-11;
  }

  readNbodyData(){
    if(this.nBodyDataURL){
      let rl = readline.createInterface({
        input: fs.createReadStream(this.nBodyDataURL),
        crlfDelay: Infinity
      });
      //On a new line event, process the one line
      console.log("\nReading data-file...........\n");
      let inc = 0;
      rl.on('line',(line) => {
        let arr = line.split(" ");
        this.bodyList.push(new Body(inc++,...arr));
      });
      //On the readStream close event log some data
      rl.on('close', () => {
        console.log(`Total body count: ${this.bodyList.length}`);
        console.log(this.bodyList);
        
      });
    }
  }


}

let initialize = () => {
  console.log("Initializing nBody Data.......... \n");
  let system;
  let config = fs.readFile("./config.json","utf8", (err, data) => { 
    if(!err){
      configJson = JSON.parse(data).simSettings;
      console.log(
        `SimTime: ${configJson.simTime} Seconds \n` +
        `TimeIncrement: ${configJson.timeIncrement} Seconds \n` +
        `Number of Bodies: ${configJson.numberOfBodies} \n` +
        `nBodyDataURL: ${configJson.nBodyDataUrl}`
      );
      system = new System(configJson.simTime, configJson.timeIncrement, configJson.numberOfBodies, configJson.nBodyDataUrl);
      system.readNbodyData();
    }
  });
}

initialize();
