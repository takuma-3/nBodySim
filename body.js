class Body{
  constructor(id,x,y,z,mass,vX,vY,vZ){
    this.id = id;
    this.x = x;
    this.y = y;
    this.z = z;
    this.mass = mass;
    this.vX = vX;
    this.vY = vY;
    this.vZ = vZ;
  }
}
module.exports = Body;