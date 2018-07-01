let bubbles = [];

function setup() {
	createCanvas(800, 800);
}

function mouseMoved(){

    let b = new Bubble(mouseX, mouseY);
    bubbles.push(b);
}

function draw() {
    background(0);
    
    for (let i = 0; i < bubbles.length; i++){
        bubbles[i].show();
        bubbles[i].move();
    }
    
    if(bubbles.length > 100){
        bubbles.splice(0, 1);
    }
}

class Bubble {
    
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.r = random(0,255);
        this.b = random(0,255);
        this.g = random(0,255);
        this.tmn = random(20,50);
        //this.altura = this.tmn;
        this.mais = random(2, 10);
    }
    
    move(){
        //this.altura = this.altura + this.mais;
        this.y = this.y + this.mais/2;
    }
    
    show(){
        noStroke(0);
        fill(this.r, this.b, this.g);
        ellipse(this.x, this.y, this.tmn, this.tmn);
    }

}