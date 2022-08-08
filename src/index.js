import p5 from 'p5'

// these are the variables you can use as inputs to your algorithms
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

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
    let gfx = sk.createGraphics(window.innerWidth,window.innerHeight);
        let gfx2;

        sk.createCanvas(window.innerWidth,window.innerHeight);
        sk.angleMode(sk.DEGREES);
        sk.imageMode(sk.CENTER);
        sk.translate(window.innerWidth/2,window.innerHeight/2);
        sk.background(40);
        gfx.stroke(200);
        gfx.strokeWeight(3);
        gfx.line(0,0,window.innerWidth,0);
        for(let i=0;i<1000;i++){
          // gfx.point(Math.random()*window.innerWidth, Math.random()*window.innerHeight);
            gfx.point(fxrand()*window.innerWidth, fxrand()*window.innerHeight);
        }

        gfx2 = {...gfx};
        sk.image(gfx,0,0);
        sk.rotate(1);
        sk.image(gfx2,0,0);
  }

  sk.draw = () =>{

  }

}

const P5 = new p5(s);