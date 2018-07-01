var dot = {
    x: 100,
    y: 50
};

var col = {
    r: 255,
    g: 0,
    b: 0,
    t: 0
};

function setup() {
	createCanvas(800, 600);
    background(20);
}

function draw() {
    
    col.r = random(100, 255);
    col.g = 0;
    col.b = random(100, 190);
    col.t = random(10, 120);
    
    
    dot.x = random(0, 800);
    dot.y = random(0, 600);
    
    noStroke();
    fill(col.b, col.g, col.r, col.t);
    ellipse(dot.x, dot.y, 24, 24);
}

function mousePressed() {
    background(0);
}
