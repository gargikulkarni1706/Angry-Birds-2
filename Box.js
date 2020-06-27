class Box extends BaseClass {
  constructor(x, y, width, height)
  {
    super(x, y, 100, 100);
    this.image = loadImage("sprites/wood1.png");
  }
  display()
  {
    super.display();
  }
}