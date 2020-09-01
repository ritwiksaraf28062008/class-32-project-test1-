class Dustbin {
    constructor(x,y,w,h) {
        var options = {
            friction:0.5,
            restitution: 0.3,
            isStatic:false,
            density:0.2 
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world, this.body);
        this.Visiblity = 5;
        this.width = w;
        this.height = h;   
    }

    
    display(){
    var pos =this.body.position;
    if(this.body.speed < 3){
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y,this.width,this.height);
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         pop();
       }
      }

      score(){
        if(this.Visiblity === 0){
          score = score+1
        }   
      }

     
}