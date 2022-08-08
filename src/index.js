import p5 from 'p5'

// these are the variables you can use as inputs to your algorithms
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log('fxrand()',fxrand()) // deterministic PRNG function, use it instead of Math.random()
console.log('fxrand()',fxrand()) // deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function 
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//
// window.$fxhashFeatures = {
//   "Background": "Black",
//   "Number of lines": 10,
//   "Inverted": true
// }

// this code writes the values to the DOM as an example
// const container = document.createElement("div")
// container.innerText = `
//   random hash: ${fxhash}\n
//   some pseudo random values: [ ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()},... ]\n
// `
// document.body.prepend(container)
function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

let s = (sk) => {    
  sk.setup = () =>{
    var base=160;
        sk.createCanvas(window.innerWidth,window.innerHeight);
        sk.translate(window.innerWidth/2,window.innerHeight/2);
        // sk.stroke(100*fxrand(),100*fxrand(),100*fxrand());
        let x=255- parseInt(200*fxrand()),y=255- parseInt(200*fxrand()),z=255- parseInt(200*fxrand());
        sk.stroke(x,y,z);

        
        sk.noFill();
        sk.ellipse(150-base,150-base,(80+50*fxrand()),100);
        sk.fill(x,y,z);
        sk.text('丁', 143-base, 155-base);
        sk.noFill();
        sk.ellipse(140-base,140-base,8,10);
        sk.ellipse(160-base,140-base,8,10);
       
        sk.fill(x,y,z);
        sk.text('三', 145-base, 120-base);
       
        sk.text('四', 145-base, 170-base);
       
       
        sk.text('三', 105-base, 150-base);
        sk.text('三', 185-base, 150-base);
       
        sk.text('3', 145-base, 100-base);
       
        sk.text('三', 145-base, 200-base);
       
        sk.noFill();
        sk.rect(100-base, 200-base, 100, 100+50*fxrand(), 20);
        sk.fill(x,y,z);
        sk.text('6', 95-base, 260-base);
        sk.text('6', 200-base, 260-base);
        sk.textSize(60);
        
        let angle1 = sk.radians(90);
        sk.rotate(angle1);
        sk.text('二', 295-base, 189-base);
  }

  sk.draw = () =>{

  }

}

const P5 = new p5(s);