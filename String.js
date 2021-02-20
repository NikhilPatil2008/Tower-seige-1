class String{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:250
        }
     
        this.string=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.string);
    }

    fly(){
        this.string.bodyA=null;
    }

    display(){
        if(this.string.bodyA){
            var pointA=this.string.bodyA.position;
            var pointB=this.pointB;
            push();
            strokeWeight(4);
            stroke(48,22,8);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }


    }
}