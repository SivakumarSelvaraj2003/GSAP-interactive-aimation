const imgCar=document.querySelector(".car");
const imgFlower=document.querySelector(".flower");
const imgBall=document.querySelector(".ball");
const imgPunch=document.querySelector(".punch");
const btnCar=document.querySelector(".btn-car");
const btnFlower=document.querySelector(".btn-flower");
const btnBall=document.querySelector(".btn-ball");
const btnPunch=document.querySelector(".btn-punch");

const carAnimation= gsap.to(imgCar,{
    duration:1,
    x:-800,
    delay:.5,
    ease:"power1.in",
    paused:true
});


const flowerAnimation= gsap.to(imgFlower, {
  duration: 1,
  scale: 1.5,
  delay: 1,
  ease: "back.out(1.7)",
  paused: true,
});
const ballAnimation= gsap.to(imgBall, {
  duration: 1,
  y: 30,
  delay: 3,
  ease: "bounce.out",
  paused: true,
});
const punchAnimation= gsap.to(imgPunch, {
  duration: 1,
  x: -800,
  delay: 3,
  ease: "elastic.out(1,0.2)",
  paused: true,
}); 

btnCar.addEventListener("click", () => {
  carAnimation.restart();
  imgCar.style.display="block";
});
btnFlower.addEventListener("click", () => {
  flowerAnimation.restart();
  imgFlower.style.display="block";
});
btnBall.addEventListener("click", () => {
  ballAnimation.restart();
  imgBall.style.display="block";
});
btnPunch.addEventListener("click", () => {
  punchAnimation.restart();
  imgPunch.style.display="block";
});
