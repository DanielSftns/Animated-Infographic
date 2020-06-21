var shape = document.getElementById("svg");

// media query event handler
if (matchMedia) {
        var mq = window.matchMedia("(min-width: 826px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
}
// media query change
function WidthChange(mq) {
        if (mq.matches) {
    shape.setAttribute("viewBox", "0 0 765 587");
    shape.setAttribute("enable-background", "0 0 765 587");
        }
        else {
    shape.setAttribute("viewBox", "0 0 592 588");
    shape.setAttribute("enable-background", "0 0 592 588");
        }
};

var $effect = $("#effect"),
    $circ = $(".iconCircle"),
    isFF = !!window.sidebar,
    $m1 = $(".money .one"),
    $m2 = $(".money .two"),
    $m3 = $(".money .three"),
    $eLine = $(".eLine"),
    $green = "#8DAF82",
    $blue = "#BEEAE6",
    $reg = "#414751",
    $orange = "#F47A57",
    $red = "#931429",
    $yellow = "#F9B458",
    $mReg = "#23262C";

TweenMax.set($(".dialog"), {
  visibility: "visible"
});


TweenMax.set($circ, {
  svgOrigin:"239.27, 240.83",
  x: 11.5,
  y: 61
});

//svgOrigin:"321.05, 323.3",

for (var i = 1; i < 15; i++) {
  TweenMax.set($(".d" + i), {
    opacity: 0
  });
}

// rotateInfo
function rotateInfo() {
  var tl = new TimelineMax();

  tl.add("EXBONDS");
  tl.to($(".p1"), 0.3, {
      scale: 1.3,
      transformOrigin: "50% 100%",
      fill: $blue,
      ease: Bounce.easeOut
    }, "EXBONDS")
    .to($effect, 0.3, {
      y: -10,
      ease: Circ.easeOut
    }, "EXBONDS")
    .to($eLine, 0.3, {
      stroke: $orange,
      ease: Sine.easeOut
    }, "EXBONDS")
    .fromTo($(".d1"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, {
      opacity: 1,
      scale: 1,
      ease: Back.easeOut
    }, "EXBONDS")
    .to($m1, 0.3, {
      fill: $green,
      ease: Circ.easeOut
    }, "EXBONDS");
  
  tl.to($(".p1"), 0.3, {
      scale: 1,
      transformOrigin: "50% 100%",
      fill: $reg,
      ease: Back.easeIn
    }, "EXBONDS+=1.25")
    .to($effect, 0.3, {
      y: 0,
      ease: Circ.easeIn
    }, "EXBONDS+=1.25")
    .to($eLine, 0.3, {
      stroke: $red,
      ease: Sine.easeIn
    }, "EXBONDS+=1.25")
    .to($(".d1"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, "EXBONDS+=1.25")
    .to($m1, 0.3, {
      fill: $mReg,
      ease: Circ.easeIn
    }, "EXBONDS+=1.25");
    tl.to($circ, 1, {
      rotation: -23
    }, "EXBONDS+=1.25");
  
    tl.to($(".p2"), 0.3, {
      scale: 1.3,
      transformOrigin: "50% 100%",
      fill: $blue,
      ease: Bounce.easeOut
    }, "EXBONDS+=2")
    .to($effect, 0.3, {
      y: -18,
      ease: Circ.easeOut
    }, "EXBONDS+=2")
    .to($eLine, 0.3, {
      stroke: $orange,
      ease: Sine.easeOut
    }, "EXBONDS+=2")
    .fromTo($(".d2"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, {
      opacity: 1,
      scale: 1,
      ease: Back.easeOut
    }, "EXBONDS+=2")
    .to([$m1, $m2], 0.3, {
      fill: $green,
      ease: Circ.easeOut
    }, "EXBONDS+=2");
  
  tl.to($(".p2"), 0.3, {
      scale: 1,
      transformOrigin: "50% 100%",
      fill: $reg,
      ease: Back.easeIn
    }, "EXBONDS+=3.5")
    .to($effect, 0.3, {
      y: 0,
      ease: Circ.easeIn
    }, "EXBONDS+=3.5")
    .to($eLine, 0.3, {
      stroke: $red,
      ease: Sine.easeIn
    }, "EXBONDS+=3.5")
    .to($(".d2"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, "EXBONDS+=3.5")
    .to([$m1, $m2], 0.3, {
      fill: $mReg,
      ease: Circ.easeIn
    }, "EXBONDS+=3.5");
      tl.to($circ, 1, {
        rotation: -42
      }, "EXBONDS+=3.5");
  
  tl.to($(".p3"), 0.3, {
      scale: 1.3,
      transformOrigin: "50% 100%",
      fill: $blue,
      ease: Bounce.easeOut
    }, "EXBONDS+=4")
    .to($effect, 0.3, {
      y: -20,
      ease: Circ.easeOut
    }, "EXBONDS+=4")
    .to($eLine, 0.3, {
      stroke: $orange,
      ease: Sine.easeOut
    }, "EXBONDS+=4")
    .fromTo($(".d3"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, {
      opacity: 1,
      scale: 1,
      ease: Back.easeOut
    }, "EXBONDS+=4")
    .to([$m1, $m2], 0.3, {
      fill: $green,
      ease: Circ.easeOut
    }, "EXBONDS+=4");
  
    tl.to($(".p3"), 0.3, {
      scale: 1,
      transformOrigin: "50% 100%",
      fill: $reg,
      ease: Back.easeIn
    }, "EXBONDS+=5.5")
    .to($effect, 0.3, {
      y: 0,
      ease: Circ.easeIn
    }, "EXBONDS+=5.5")
    .to($eLine, 0.3, {
      stroke: $red,
      ease: Sine.easeIn
    }, "EXBONDS+=5.5")
    .to($(".d3"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, "EXBONDS+=5.5")
    .to([$m1, $m2], 0.3, {
      fill: $mReg,
      ease: Circ.easeIn
    }, "EXBONDS+=5.5");
       tl.to($circ, 1, {
          rotation: -62
        }, "EXBONDS+=5.5");
  
    tl.to($(".p4"), 0.3, {
      scale: 1.3,
      transformOrigin: "50% 100%",
      fill: $blue,
      ease: Bounce.easeOut
    }, "EXBONDS+=6")
    .to($effect, 0.3, {
      y: -20,
      ease: Circ.easeOut
    }, "EXBONDS+=6")
    .to($eLine, 0.3, {
      stroke: $orange,
      ease: Sine.easeOut
    }, "EXBONDS+=6")
    .fromTo($(".d4"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, {
      opacity: 1,
      scale: 1,
      ease: Back.easeOut
    }, "EXBONDS+=6")
    .to([$m1, $m2], 0.3, {
      fill: $green,
      ease: Circ.easeOut
    }, "EXBONDS+=6");
  
    tl.to($(".p4"), 0.3, {
      scale: 1,
      transformOrigin: "50% 100%",
      fill: $reg,
      ease: Back.easeIn
    }, "EXBONDS+=7.5")
    .to($effect, 0.3, {
      y: 0,
      ease: Circ.easeIn
    }, "EXBONDS+=7.5")
    .to($eLine, 0.3, {
      stroke: $red,
      ease: Sine.easeIn
    }, "EXBONDS+=7.5")
    .to($(".d4"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, "EXBONDS+=7.5")
    .to([$m1, $m2], 0.3, {
      fill: $mReg,
      ease: Circ.easeIn
    }, "EXBONDS+=7.5");
      tl.to($circ, 1, {
        rotation: -84
      }, "EXBONDS+=7.5");
  
    tl.to($(".p5"), 0.3, {
      scale: 1.3,
      transformOrigin: "50% 100%",
      fill: $blue,
      ease: Bounce.easeOut
    }, "EXBONDS+=8")
    .to($effect, 0.3, {
      y: -6,
      ease: Circ.easeOut
    }, "EXBONDS+=8")
    .fromTo($(".d5"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, {
      opacity: 1,
      scale: 1,
      ease: Back.easeOut
    }, "EXBONDS+=8")
    .to([$m1, $m2, $m3], 0.3, {
      fill: $green,
      ease: Circ.easeOut
    }, "EXBONDS+=8");
  
    tl.to($(".p5"), 0.3, {
      scale: 1,
      transformOrigin: "50% 100%",
      fill: $reg,
      ease: Back.easeIn
    }, "EXBONDS+=9.5")
    .to($effect, 0.3, {
      y: 0,
      ease: Circ.easeIn
    }, "EXBONDS+=9.5")
    .to($(".d5"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, "EXBONDS+=9.5")
    .to([$m1, $m2, $m3], 0.3, {
      fill: $mReg,
      ease: Circ.easeIn
    }, "EXBONDS+=9.5");
        tl.to($circ, 1, {
        rotation: -103
      }, "EXBONDS+=9.5");
  
  tl.to($(".p6"), 0.3, {
      scale: 1.3,
      transformOrigin: "50% 100%",
      fill: $blue,
      ease: Bounce.easeOut
    }, "EXBONDS+=10")
    .to($effect, 0.3, {
      y: -40,
      ease: Circ.easeOut
    }, "EXBONDS+=10")
    .to($eLine, 0.3, {
      stroke: $yellow,
      ease: Circ.easeOut
    }, "EXBONDS+=10")
    .fromTo($(".d6"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, {
      opacity: 1,
      scale: 1,
      ease: Back.easeOut
    }, "EXBONDS+=10")
    .to([$m1, $m2], 0.3, {
      fill: $green,
      ease: Circ.easeOut
    }, "EXBONDS+=10");
  
    tl.to($(".p6"), 0.3, {
      scale: 1,
      transformOrigin: "50% 100%",
      fill: $reg,
      ease: Back.easeIn
    }, "EXBONDS+=11.5")
    .to($effect, 0.3, {
      y: 0,
      ease: Circ.easeIn
    }, "EXBONDS+=11.5")
    .to($eLine, 0.3, {
      stroke: $red,
      ease: Sine.easeOut
    }, "EXBONDS+=11.5")
    .to($(".d6"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, "EXBONDS+=11.5")
    .to([$m1, $m2], 0.3, {
      fill: $mReg,
      ease: Circ.easeIn
    }, "EXBONDS+=11.5");
      tl.to($circ, 1, {
        rotation: -124
      }, "EXBONDS+=11.5");
    
    tl.to($(".p7"), 0.3, {
      scale: 1.3,
      transformOrigin: "50% 100%",
      fill: $blue,
      x: 10,
      y: 10,
      ease: Bounce.easeOut
    }, "EXBONDS+=12")
    .to($effect, 0.3, {
      y: -40,
      ease: Circ.easeOut
    }, "EXBONDS+=12")
    .to($eLine, 0.3, {
      stroke: $yellow,
      ease: Circ.easeOut
    }, "EXBONDS+=12")
    .fromTo($(".d7"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, {
      opacity: 1,
      scale: 1,
      ease: Back.easeOut
    }, "EXBONDS+=12")
    .to([$m1, $m2], 0.3, {
      fill: $green,
      ease: Circ.easeOut
    }, "EXBONDS+=12");
  
    tl.to($(".p7"), 0.3, {
      scale: 1,
      x: 0,
      y: 0,
      transformOrigin: "50% 100%",
      fill: $reg,
      ease: Back.easeIn
    }, "EXBONDS+=13.5")
    .to($effect, 0.3, {
      y: 0,
      ease: Circ.easeIn
    }, "EXBONDS+=13.5")
    .to($eLine, 0.3, {
      stroke: $red,
      ease: Sine.easeOut
    }, "EXBONDS+=13.5")
    .to($(".d7"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, "EXBONDS+=13.5")
    .to([$m1, $m2], 0.3, {
      fill: $mReg,
      ease: Circ.easeIn
    }, "EXBONDS+=13.5");
      tl.to($circ, 1, {
        rotation: -149
      }, "EXBONDS+=13.5");

    tl.to($(".p8"), 0.3, {
      scale: 1.3,
      transformOrigin: "50% 100%",
      fill: $blue,
      x: 10,
      y: 10,
      ease: Bounce.easeOut
    }, "EXBONDS+=14")
    .to($effect, 0.3, {
      y: -20,
      ease: Circ.easeOut
    }, "EXBONDS+=14")
    .to($eLine, 0.3, {
      stroke: $orange,
      ease: Circ.easeOut
    }, "EXBONDS+=14")
    .fromTo($(".d8"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, {
      opacity: 1,
      scale: 1,
      ease: Back.easeOut
    }, "EXBONDS+=14")
    .to([$m1, $m2], 0.3, {
      fill: $green,
      ease: Circ.easeOut
    }, "EXBONDS+=14");
  
    tl.to($(".p8"), 0.3, {
      scale: 1,
      x: 0,
      y: 0,
      transformOrigin: "50% 100%",
      fill: $reg,
      ease: Back.easeIn
    }, "EXBONDS+=15.5")
    .to($effect, 0.3, {
      y: 0,
      ease: Circ.easeIn
    }, "EXBONDS+=15.5")
    .to($eLine, 0.3, {
      stroke: $red,
      ease: Sine.easeOut
    }, "EXBONDS+=15.5")
    .to($(".d8"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, "EXBONDS+=15.5")
    .to([$m1, $m2], 0.3, {
      fill: $mReg,
      ease: Circ.easeIn
    }, "EXBONDS+=15.5");
     tl.to($circ, 1, {
        rotation: -176
      }, "EXBONDS+=15.5");
  
    tl.to($(".p9"), 0.3, {
      scale: 1.3,
      transformOrigin: "100% 100%",
      fill: $blue,
      x: 5,
      y: 10,
      ease: Bounce.easeOut
    }, "EXBONDS+=16")
    .to($effect, 0.3, {
      y: -35,
      ease: Circ.easeOut
    }, "EXBONDS+=16")
    .to($eLine, 0.3, {
      stroke: $yellow,
      ease: Circ.easeOut
    }, "EXBONDS+=16")
    .fromTo($(".d9"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, {
      opacity: 1,
      scale: 1,
      ease: Back.easeOut
    }, "EXBONDS+=16")
    .to([$m1, $m2], 0.3, {
      fill: $green,
      ease: Circ.easeOut
    }, "EXBONDS+=16");
  
    tl.to($(".p9"), 0.3, {
      scale: 1,
      x: 0,
      y: 0,
      transformOrigin: "50% 100%",
      fill: $reg,
      ease: Back.easeIn
    }, "EXBONDS+=17.5")
    .to($effect, 0.3, {
      y: 0,
      ease: Circ.easeIn
    }, "EXBONDS+=17.5")
    .to($eLine, 0.3, {
      stroke: $red,
      ease: Sine.easeOut
    }, "EXBONDS+=17.5")
    .to($(".d9"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, "EXBONDS+=17.5")
    .to([$m1, $m2], 0.3, {
      fill: $mReg,
      ease: Circ.easeIn
    }, "EXBONDS+=17.5");
     tl.to($circ, 1, {
        rotation: -199
      }, "EXBONDS+=17.5");
  
    tl.to($(".p10"), 0.3, {
      scale: 1.3,
      transformOrigin: "100% 100%",
      rotation: 4,
      fill: $blue,
      x: 3,
      y: 10,
      ease: Bounce.easeOut
    }, "EXBONDS+=18")
    .to($effect, 0.3, {
      y: -6,
      ease: Circ.easeOut
    }, "EXBONDS+=18")
    .fromTo($(".d10"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, {
      opacity: 1,
      scale: 1,
      ease: Back.easeOut
    }, "EXBONDS+=18")
    .to([$m1, $m2], 0.3, {
      fill: $green,
      ease: Circ.easeOut
    }, "EXBONDS+=18");
  
    tl.to($(".p10"), 0.3, {
      scale: 1,
      x: 0,
      y: 0,
      transformOrigin: "50% 100%",
      fill: $reg,
      ease: Back.easeIn
    }, "EXBONDS+=19.5")
    .to($effect, 0.3, {
      y: 0,
      ease: Circ.easeIn
    }, "EXBONDS+=19.5")
    .to($(".d10"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, "EXBONDS+=19.5")
    .to([$m1, $m2], 0.3, {
      fill: $mReg,
      ease: Circ.easeIn
    }, "EXBONDS+=19.5");
      tl.to($circ, 1, {
        rotation: -222
      }, "EXBONDS+=19.5");
  
    tl.to($(".p11"), 0.3, {
      scale: 1.3,
      transformOrigin: "100% 100%",
      fill: $blue,
      x: 5,
      y: 10,
      ease: Bounce.easeOut
    }, "EXBONDS+=20")
    .to($effect, 0.3, {
      y: -35,
      ease: Circ.easeOut
    }, "EXBONDS+=20")
    .to($eLine, 0.3, {
      stroke: $yellow,
      ease: Circ.easeOut
    }, "EXBONDS+=20")
    .fromTo($(".d11"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, {
      opacity: 1,
      scale: 1,
      ease: Back.easeOut
    }, "EXBONDS+=20")
    .to($m1, 0.3, {
      fill: $green,
      ease: Circ.easeOut
    }, "EXBONDS+=20");
  
    tl.to($(".p11"), 0.3, {
      scale: 1,
      x: 0,
      y: 0,
      transformOrigin: "50% 100%",
      fill: $reg,
      ease: Back.easeIn
    }, "EXBONDS+=21.5")
    .to($effect, 0.3, {
      y: 0,
      ease: Circ.easeIn
    }, "EXBONDS+=21.5")
    .to($eLine, 0.3, {
      stroke: $red,
      ease: Sine.easeOut
    }, "EXBONDS+=21.5")
    .to($(".d11"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, "EXBONDS+=21.5")
    .to($m1, 0.3, {
      fill: $mReg,
      ease: Circ.easeIn
    }, "EXBONDS+=21.5");
      tl.to($circ, 1, {
        rotation: -243
      }, "EXBONDS+=21.5");
  
    tl.to($(".p12"), 0.3, {
      scale: 1.3,
      transformOrigin: "100% 100%",
      fill: $blue,
      x: 5,
      y: 10,
      ease: Bounce.easeOut
    }, "EXBONDS+=22")
    .to($effect, 0.3, {
      y: -35,
      ease: Circ.easeOut
    }, "EXBONDS+=22")
    .to($eLine, 0.3, {
      stroke: $yellow,
      ease: Circ.easeOut
    }, "EXBONDS+=22")
    .fromTo($(".d12"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, {
      opacity: 1,
      scale: 1,
      ease: Back.easeOut
    }, "EXBONDS+=22")
    .to([$m1, $m2, $m3], 0.3, {
      fill: $green,
      ease: Circ.easeOut
    }, "EXBONDS+=22");
  
    tl.to($(".p12"), 0.3, {
      scale: 1,
      x: 0,
      y: 0,
      transformOrigin: "50% 100%",
      fill: $reg,
      ease: Back.easeIn
    }, "EXBONDS+=23.5")
    .to($effect, 0.3, {
      y: 0,
      ease: Circ.easeIn
    }, "EXBONDS+=23.5")
    .to($eLine, 0.3, {
      stroke: $red,
      ease: Sine.easeOut
    }, "EXBONDS+=23.5")
    .to($(".d12"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, "EXBONDS+=23.5")
    .to([$m1, $m2, $m3], 0.3, {
      fill: $mReg,
      ease: Circ.easeIn
    }, "EXBONDS+=23.5");
      tl.to($circ, 1, {
        rotation: -265
    }, "EXBONDS+=23.5");
  
    tl.to($(".p13"), 0.3, {
      scale: 1.3,
      transformOrigin: "100% 100%",
      fill: $blue,
      x: 5,
      y: 10,
      ease: Bounce.easeOut
    }, "EXBONDS+=24")
    .to($effect, 0.3, {
      y: -15,
      ease: Circ.easeOut
    }, "EXBONDS+=24")
    .to($eLine, 0.3, {
      stroke: $orange,
      ease: Circ.easeOut
    }, "EXBONDS+=24")
    .fromTo($(".d13"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, {
      opacity: 1,
      scale: 1,
      ease: Back.easeOut
    }, "EXBONDS+=24")
    .to([$m1, $m2, $m3], 0.3, {
      fill: $green,
      ease: Circ.easeOut
    }, "EXBONDS+=24");
  
    tl.to($(".p13"), 0.3, {
      scale: 1,
      x: 0,
      y: 0,
      transformOrigin: "50% 100%",
      fill: $reg,
      ease: Back.easeIn
    }, "EXBONDS+=25.5")
    .to($effect, 0.3, {
      y: 0,
      ease: Circ.easeIn
    }, "EXBONDS+=25.5")
    .to($eLine, 0.3, {
      stroke: $red,
      ease: Sine.easeOut
    }, "EXBONDS+=25.5")
    .to($(".d13"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, "EXBONDS+=25.5")
    .to([$m1, $m2, $m3], 0.3, {
      fill: $mReg,
      ease: Circ.easeIn
    }, "EXBONDS+=25.5");
       tl.to($circ, 1, {
        rotation: -287
      }, "EXBONDS+=25.5");
  
    tl.to($(".p14"), 0.3, {
      scale: 1.3,
      transformOrigin: "100% 100%",
      fill: $blue,
      x: 5,
      y: 10,
      ease: Bounce.easeOut
    }, "EXBONDS+=26")
    .to($effect, 0.3, {
      y: -20,
      ease: Circ.easeOut
    }, "EXBONDS+=26")
    .to($eLine, 0.3, {
      stroke: $orange,
      ease: Circ.easeOut
    }, "EXBONDS+=26")
    .fromTo($(".d14"), 0.3, {
      opacity: 0,
      scale: 0.7 
    }, {
      opacity: 1,
      scale: 1,
      ease: Back.easeOut
    }, "EXBONDS+=26")
    .to([$m1, $m2], 0.3, {
      fill: $green,
      ease: Circ.easeOut
    }, "EXBONDS+=26");
  
  tl.timeScale(0.7);

  return tl;
}

var master = new TimelineMax();
master.add(rotateInfo(), "rotateInfo");

//master.seek("rotateInfo+=24");

$(document).on('click', 'a.replay', function(e) {
  master.restart();
  e.preventDefault();
});

var slider = $("#slider"),
    sliderValue = {value:0};

slider.slider({
  range: false,
  min: 0,
  max: 100,
  step:.1,
  start:function() {
    master.pause();
  },
  slide: function ( event, ui ) {
    master.progress( ui.value / 100 );
  },
  stop:function() {
    master.play();
  }
});

master.eventCallback("onUpdate", function() {
  sliderValue.value = master.progress() * 100;
  slider.slider(sliderValue);
});