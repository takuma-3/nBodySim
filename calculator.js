const NEGLIGIBLE_DISTANCE = 1000; //in metres
const G_CONSTANT = 6.67408E-11; //

let calculateBodyProperties = (bodyA, bodyB) => {
  //calculate the distance between bodyA and bodyB
  let distance = Math.sqrt(Math.pow(bodyB.x - bodyA.x,2.00) + Math.pow(bodyB.y - bodyA.y,2.00) + Math.pow(bodyB.z - bodyA.z,2.00));
  if(distance < NEGLIGIBLE_DISTANCE){
    return 0.00;
  }else{
    let force = calculateForce(bodyA, bodyB, distance);
    let directionVectorX = directionVector(bodyA.x, bodyB.x, distance);
    let directionVectorY = directionVector(bodyA.y, bodyB.y, distance);
    let directionVectorZ = directionVector(bodyA.z, bodyB.z, distance);
    let fx = directionVectorX * force;
    let fy = directionVectorY * force;
    let fz = directionVectorZ * force;
  }
}

let directionVector = (bodyADirection, bodyBDirection, radius) => {
  return (bodyBDirection - bodyADirection) / radius;
}

let calculateForce = (bodyA, bodyB, radius) => {
  return (G_CONSTANT * bodyA.mass * bodyB.mass) / (radius * radius);
}

function calculateFutureCoords(bodyList, simTime){
  let currentTime = 0.00;
  while(currentTime < simTime){
    bodyList.array.forEach(element0 => {
      bodyList.array.forEach(element1 => {
        if(element0.id != element1.id){
          
        }
      });
    });
  }

};

module.exports = { calculateFutureCoords };

