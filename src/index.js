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

const palettes = [['#fefaf4', '#6399c8', '#8dac60', '#fcd424', '#638e74', '#d41b4b', '#f66d3a'],    
                  ['#1b1c1f', '#084ba4', '#739761', '#e9b130', '#da2845', '#123f2f', '#e3dbdb'],
                  ['#eae9e4', '#5b9fcc', '#deab12', '#e62747', '#014e2e'],
                  ['#f1eee7', '#b8331a', '#32221e', '#f2a90e', '#8b884b', '#22608c', '#174f42', '#76aa68'],
                  ['#eae9e4', '#003588', '#056470', '#02203c'],
                  ['#473d3e', '#f5f2eb', '#598847', '#6397cc', '#f22e83', '#6d2924'],
                  ['#faf9ee', '#e82822', '#fae808', '#598847', '#6397cc', '#f22e83', '#6d2924'],
                  ['#faf9ee', '#e82822', '#fae808', '#598847', '#6397cc', '#f22e83', '#6d2924'],
                  ['#fafbf6', '#4d67b2', '#d83e27', '#6b3d57', '#fff209', '#999db4', '#52745a', '#dd4a70'],
                  ['#e7193d', '#e5b103', '#e4e1dc', '#e4e1dc', '#3b7340'],
                  ['#f7f3ed', '#013a9d', '#ce0139', '#402533', '#a3a9b9', '#0f6c50', '#7dad4b', '#efd855', '#f76722'],
                  ['#f7f3ed', '#013a9d', '#ce0139', '#402533', '#a3a9b9', '#0f6c50', '#7dad4b', '#efd855', '#f76722'],
                  ['#f5f2ea', '#04488a', '#1f7bfa', '#f20f1e', '#6e6968'],
                  ['#f2efe8', '#3b2321', '#676f94', '#676f94'],
                  ['#f4f6f8', '#7da825', '#0473c4', '#ee8605', '#aa090f', '#e2e0d2', '#01993b', '#e2e0d2', '#dc318b'],
                  ['#34303a', '#7da825', '#0473c4', '#ee8605', '#aa090f', '#e2e0d2', '#01993b', '#e2e0d2', '#dc318b'],
                  ];

var fonts=['/Alibaba-PuHuiTi-Heavy.TTF','hei.TTF','kuaile.ttf','/pinsong.otf']
let s = (sk) => {    
  let fontRegular, fontItalic, fontBold;
  sk.preload=()=>{
    let i = (parseInt(100*fxrand()))%2;
    console.log('i',i)
  
    fontRegular = sk.loadFont(fonts[i]);
  }
  sk.setup = () =>{
    var base=160;
        sk.createCanvas(window.innerWidth,window.innerHeight);
        sk.translate(window.innerWidth/2,window.innerHeight/2);
        let x_= parseInt(10*fxrand());
        console.log('x_',x_)
        // let y= parseInt(10*fxrand());
        sk.background(palettes[x_][2]);
        sk.textFont(fontRegular);
        // sk.stroke(100*fxrand(),100*fxrand(),100*fxrand());

        // sk.textFont('Georgia');
        // sk.textFont('Helvetica');
        let x=palettes[x_][1];
        sk.stroke(x);

        
        sk.noFill();
        let ellipseVar1 =  (80+50*fxrand());
        sk.ellipse(150-base,150-base,ellipseVar1,100);
        sk.fill(x);
        sk.textSize(28);
        sk.text('丁', 135-base, 149-base);
        sk.textSize(12);
        sk.noFill();
        sk.ellipse(140-base,140-base,8,10);
        sk.ellipse(160-base,140-base,8,10);
       
        sk.fill(x);
        sk.text('三', 145-base, 120-base);
       
        sk.text('四', 145-base, 170-base);
       
       
        sk.text('三', 145-base-ellipseVar1/2, 150-base);
        sk.text('三', 145-base+ellipseVar1/2, 150-base);

        sk.push();
        let angle3 = sk.radians(90);
        sk.rotate(angle3);
        sk.text('三', 93-base, 2);
        sk.pop();

        sk.text('三', 145-base, 200-base);
       
        sk.noFill();
        sk.rect(100-base, 200-base, 100, 100+50*fxrand(), 20+parseInt(50*fxrand()));
        sk.fill(x);
        sk.textSize(38);
        sk.text('6', 80-base, 260-base);
        sk.push();
        sk.textSize(35);
        // let angle2 = sk.radians(180);
        // sk.rotate(angle2);
        sk.scale(-1,1);
        sk.text('6', 100-base, 260-base);
        sk.pop();

        sk.textSize(60);
        
        let angle1 = sk.radians(90);
        sk.rotate(angle1);
        sk.text('二', 295-base, 189-base);
  }

  sk.draw = () =>{

  }

}

const P5 = new p5(s);