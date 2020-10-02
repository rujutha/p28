class Tree {
    constructor(x, y, width, height,w,h) {
      var options = {
          'isStatic':true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.w=300;
      this.h=500
      
      this.image = loadImage("sprites/tree.png");
      World.add(world, this.body);

     
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
        image(this.image, pos.x,pos.y, this.w, this.h);
      
    }
  }