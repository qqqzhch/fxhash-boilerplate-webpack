let backs=[];
let ground=[];
let rocks=[];
let grass=[];
let plants=[];
let flowers=[];
let pepes=[];
let borders=[];

let showCreature = 0;
let time = 0;

function preload() {

 for(let i=0;i<5;i++){
    ground[i] = loadImage('assets/ground'+str(i+1)+'.png')
    rocks[i] = loadImage('assets/rock'+str(i+1)+'.png')
    grass[i] = loadImage('assets/grass'+str(i+1)+'.png')
    plants[i] = loadImage('assets/plant'+str(i+1)+'.png')
    flowers[i] = loadImage('assets/flower'+str(i+1)+'.png');

  }
 for(let i=0;i<5;i++){
    pepes[i] = loadImage('assets/pepe'+str(i+1)+'.png');
   backs[i] = loadImage('assets/back'+str(i+1)+'.png');
   
  }
  borders[0] = loadImage('assets/Border1.png');

}

function setup() {
  noLoop();
  createCanvas(min(windowHeight, windowWidth), min(windowHeight, windowWidth));
  
  placeBackground(backs);
  imageMode(CORNER);
  
  // placeObjects(array, name, minNum, maxNum);
  placeObjects(ground, "ground", 1, 3);
  placeObjects(rocks, "rocks", 1, 2);
  placeObjects(grass, "grass", 1, 5);
  placeObjects(plants, "plants", 2, 5);
  placeObjects(flowers, "flowers", 2, 3);
  if(showCreature != 0){
    placeObjects(pepes, "pepes", 1, 1);
  }

  placeBorder(borders);
}

function placeBackground(array) {
  var chosenBackground = int(map(fxrand(), 0, 1, 0, 5)); 
  let bg = array[chosenBackground]
  bg.resize(width,height)
    if (time == 1) {
    tint(50, 50, 53);
  }
  image (bg,0,0);
}

function placeBorder(array) {
  var chosenBorder = int(map(fxrand(), 0, 1, 0, 1)); 
  let border = array[chosenBorder]
  border.resize(width,height);
  image (border,0,0);
}

function placeObjects(array, arrayName, minAmount, maxAmount) {
  
  var chosenAmount = int(map(fxrand(), 0, 1, minAmount, maxAmount + 0.5));
  
  for(let i=0; i<chosenAmount; i++) {
      var chosenAsset = int(map(fxrand(), 0, 1, 0, 5));
      push();
        xPos = map(fxrand(), 0, 1, 0, width - width/2);
        yPos = map(fxrand(), 0, 1, height/10, height - height/2.75)
        translate(xPos, yPos);
        let img = array[chosenAsset];
        if(showCreature != 0 && arrayName == "pepes") {
          img = array[showCreature - 1];
        }
        scale(map(yPos**2, 0, height**2, 0.2, 1.2))
  
        img.resize(1000 * (width/1000), 0);
    
        if (time == 1) {
          tint(100, 100, 105);
        }
  
        // flip with 50% probability
        if (arrayName == "pepes" && fxrand() < .5){
              push();
                scale(-1, 1)
                image(img, 0,0);
              pop();
        }
        else {
          image (img, 0, 0);
        }
      pop();
  }
}

function getCreatureString(value) {
  if (value < 0.04) {
    showCreature = 1;
    return "Flower Pepe" 
  }
  if (value < 0.08){
    showCreature = 2;
    return "Bird Pepe" 
  } 
  if (value < 0.12) {
    showCreature = 3;
    return "Cat Pepe" 
  } 
  if (value < 0.16) {
    showCreature = 4;
    return "Strawberry Pepe" 
  } 
  if (value < 0.20) {
    showCreature = 5;
    return "Cheese Pepe" 
  }
  else return "None"
}

function getTimeString(value) {
  if (value < 0.85) {
    time = 0;
    return "Day" 
  }
  else {
    time = 1;
    return "Night"
  }
}

window.$fxhashFeatures = {
  "Creature": getCreatureString(fxrand()),
  "Time": getTimeString(fxrand())
}