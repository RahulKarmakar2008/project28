class Slingshot {
    constructor(b1,p1){
        var options={
            bodyA:b1,
            pointB:p1,
            stiffness:0.1,
            length:20
        }
        this.sling=Constraint.create(options);
        World.add(world,this.sling);

    }
    fly(){
        this.sling.bodyA=null;
        

    }
    attach(body){
        this.sling.bodyA=body;

    }
    
    
    display (){
        if(this.sling.bodyA){
        var pA=this.sling.bodyA.position;
        var pB=this.sling.pointB;
        push();
        strokeWeight(3);
        line(pA.x,pA.y,pB.x,pB.y);
        pop();
        }

    }

    
}