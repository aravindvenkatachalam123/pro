class Paper {
    constructor(x, y, width, height) {
      var options ={
        'density':1.0,
        'friction':1.0,
        isStatic:false
      }
      this.body = Bodies.elipse(56, 46, 55, 55);
      
      World.add(world, this.body);
    }
    display(){
      fill("blue");
      elipse(56, 46, 55, 55);
  
  }
  
  }