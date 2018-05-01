var w = window.innerWidth;
var h = window.innerHeight;

var stars = [];
var starCount = 300;

var speed = 0;

function setup(){
	createCanvas(w, h);
	background(0);

	for (var i = 0; i < starCount; i++){
		stars.push(new Star());
	}
}

function draw(){
	background(0, 0, 0, map(speed, 3, 10, 150, 50));
	translate(w/2, h/2);
	for (var i = 0; i < starCount; i++){
		stars[i].update();
		stars[i].show();
	}
	if (mouseX >= 0 && mouseX <= w){
		speed = map(mouseX, 0, w, 0, 10);
	}
}


function Star() {
	this.x = floor(random(-w/2, w/2));
	this.y = floor(random(-h/2, h/2));
	this.z = floor(random(w/2));

	this.r = 0;
	this.maxR = floor(random(5, 16));

	this.drawX = this.x;
	this.drawY = this.y;

	this.update = function() {
		this.drawX = map (this.x / this.z, -1, 1, -w/2, w/2);
		this.drawY = map (this.y / this.z, -1, 1, -h/2, h/2);
		this.r = map(this.z, 0, w/2, this.maxR, 0);
		this.z -= speed;
		if (this.z < 1){
			this.x = floor(random(-w/2, w/2));
			this.y = floor(random(-h/2, h/2));
			this.z = w/2;
		}
	}

	this.show = function() {
		fill(255);
		ellipse(this.drawX, this.drawY, this.r, this.r);
	}
}