class Cannon{
    constructor(x,y,w,h,angle){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.angle = angle;
        this.cannonImg = loadImage("assets/canon.png");
        this.cannonbase = loadImage("assets/cannonBase.png");


    }
    display(){

        //canhão
        push();
        imageMode(CENTER);
        image();
        pop();
        //base do canhão

        image();
    }
}