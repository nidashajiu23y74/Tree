class Mango {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          restitution : 0,
          friction: 1
      }
      this.image = loadImage("PM/mango.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
