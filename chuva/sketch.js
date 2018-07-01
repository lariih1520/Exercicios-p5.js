let pingos = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
    
    for(let cont = 0; cont < 300; cont++){
        let pingo = new Pingo();
        pingos[cont] = pingo;
    }
}

function draw() {
    background(50, 170, 255);
    
    for(let cont = 0; cont < 300; cont++){
        pingos[cont].criar();
        pingos[cont].atualizar();
    }
    
}

class Pingo{
    
    constructor(){
        this.px = random(5, windowWidth); 
        this.py = 0;
        this.fall = random(4, 10);
        this.larg = random(2, 5);
        this.alt = this.larg * 10;
    }
    
    criar(){
        noStroke();
        fill(0, 0, 250);
        rect(this.px, this.py, this.larg, this.alt);
    }
    
    
    atualizar(){
        this.py = this.py + this.fall;
        
        if(this.py > windowHeight){
           this.py = 0;
           this.px = random(5,windowWidth);
        }
    }
}