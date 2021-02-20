class Polygon{
    constructor(x,y,width,height){
        var options={
            frictionAir:0.005,
            density:1.0
        }
        polygon=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("polygon.png");
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        World.add(world,polygon);
    }
    display(){
        var pos=polygon.position;
        var angle=polygon.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("brown");
        rect(0,0,this.width,this.height);
        imageMode(CENTER);
        image(this.image,0,angle*2,angle*2);
        pop();
    }
}