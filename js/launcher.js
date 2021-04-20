class launcherObject {
    constructor(body1,pointB){
        var options ={
            bodyA : body1,
            pointB : pointB,
            length : 100,
            stiffness : 0.05
        }
        this.pointB = pointB
        this.launcherObj = Constraint.create(options)
        World.add(world,this.launcherObj)
    }
    
    fly(){
        this.launcherObj.bodyA = null
    }
    
     display(){
         if(this.launcherObj.bodyA){
            line(this.launcherObj.bodyA.position.x,this.launcherObj.bodyA.position.y,this.pointB.x,this.pointB.y)
         }
         
     }
    }