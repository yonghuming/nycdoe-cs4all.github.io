function setup() {
    createCanvas(600, 240);
    background(0)
}

function draw() {
    noStroke();

    if(keyIsPressed){//if a key is pressed
        if(key == 'g'){//if that key is g
            fill(0,255,0)//change the fill to green
        }else{//if no key is pressed
            //don't add a fill
        }
    }

    //only draw when the mouse is pressed
    if(mouseIsPressed){
        ellipse(mouseX,mouseY,20,20)
    }
}
