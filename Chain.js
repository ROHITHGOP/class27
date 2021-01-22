class Chain
{
    constructor(bodyA,bodyB) {
        var option =
        {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        this.chain=Constraint.create(option)

        World.add(world,this.chain)
        
    }
    display(){
pointA=this.chain.bodyA.position.x;
pointB=this.chain.bodyB.position.y;
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.X,pointB.y)
    }
}
