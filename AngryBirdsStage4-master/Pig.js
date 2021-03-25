class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.alpha=255;
  }
display(){
if(this.body.speed>3){
  //when the speed is more than the pig it means the pig is killed
  World.remove(world, this.body);
  push ();
  tint (255,this.alpha);
  this.alpha=this.alpha-5;
  image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
  pop ();
}
else{
super.display();
}

}
}