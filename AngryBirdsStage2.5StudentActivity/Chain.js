class Chain{
    constructor(bodyA,bodyB){
       var options= {
           bodyA:bodyA,
           bodyB:bodyB,
           stiffness=0.4,
           length=10
       }
       this.chain=Constraint.create(options);
       World.add(world,this.chain);
       
    }
    display(){
        
        strokeWeight(4);
        line(pthis.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
    }
}