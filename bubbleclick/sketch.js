//I awlys undertook computers much more than i understood humans
//Because when something goes wrong with the computer you get a error message
//When something goes wrong with the human you get fellings
// -Andrew Tarvin

let bubbles = [];

function setup() {
	createCanvas(600, 400);
//    for (let i = 0; i < 5; i++) {
//        let x = random(width);
//        let y = random(height);
//        let r = random(10, 50);
//
//        let b = new Bubble(x, y, r);
//        bubbles.push(b);
//    }
}

function mouseDragged(){
    let r = 40;

    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
}

function mousePressed(){
    for (let i = 0; i < bubbles.length; i++){
        if(bubbles[i].clicked(mouseX, mouseY)){
           bubbles.splice(i, 1);
        }
    }
}

function draw() {
    background(0);
    
    for (let i = 0; i < bubbles.length; i++){
        if(bubbles[i].clicked(mouseX, mouseY)){
           bubbles[i].changeColor(255);
        }else{
            bubbles[i].changeColor(0);
        }
        bubbles[i].show();
        bubbles[i].move();
    }
    
    if(bubbles.length > 10){
        bubbles.splice(0, 1);
    }
}

class Bubble {
    
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }
    
    changeColor(bright){
        this.brightness = bright;
    }
    
    clicked(px, py){
        let d = dist(px, py, this.x, this.y);
        if(d < this.r){
            return true;  
        }else{
            return false;
        }
        
    }
    
    move(){
        if(this.x < width){
            this.x = this.x + random(-5, 5);
        }
        
        if(this.y < height){
            this.y = this.y + random(-5, 5);
        }
        
    }
    
    show(){
        stroke(255);
        strokeWeight(4);
        fill(this.brightness, 125);
        ellipse(this.x, this.y, this.r * 2);
    }

}