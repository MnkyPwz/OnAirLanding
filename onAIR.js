var play = document.querySelector("#play");
var reverse = document.querySelector("#reverse");
var restart = document.querySelector("#restart");

var tl = gsap.timeline({paused: true});


tl.to(".green", {duration: .5, x: 12})
tl.to(".computerFrame", {opacity:1})
tl.to(".screw3", {duration: 1, opacity:1})
tl.to(".computer", {opacity:1})
tl.to(".screw4", {duration: 1, opacity:1})
tl.to(".screw5", {duration: 1, opacity:1})
tl.to(".powerIcon", {opacity:1})


tl.to(".screenBox", {opacity:1})

tl.to(".screen", {duration: 1.5, opacity:1})
tl.to(".behind", {opacity:1})
tl.to(".frame", {opacity:1})



var tl2 =gsap.timeline({paused:true});

tl2.to(".screen2", {boxShadow:" 0 0 25px 15px #a01ea0"})


play.onclick = function() {
  tl.play();
}

reverse.onclick = function() {
  tl.reverse();
}