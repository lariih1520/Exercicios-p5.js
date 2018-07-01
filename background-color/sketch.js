var barWidth = 20;
var lastBar = -1;
var canvas;

function setup() {
    princAlt = $('#principal').height();
    princLarg = $('#principal').width();
	canvas = createCanvas(princLarg, princAlt);
    canvas.position(0, 0);
    
    colorMode(HSB, height, height, height);
    noStroke();
    background(0);
}

function draw() {
    var witchBar = mouseX;
    
    if(lastBar !== witchBar){
        fill(mouseY, height, height);
        rect(witchBar, 0, barWidth, height);
        lastBar = witchBar;
        
    }
    
}