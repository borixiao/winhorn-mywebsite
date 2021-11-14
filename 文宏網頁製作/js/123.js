//ScrollLottie (target: DOMElement string, 
//jsonPath: String, 
//duration: Number, 
//speed: "fast" | "medium" | "slow"
//)

//this has no duration and responds immediately to scroll
/* ScrollLottie({
 target: '#animationWindow',
 path: 'https://assets.codepen.io/35984/tapered_hello.json'
}) */

//this has a duration and animates the playhead on the Lottie animation for a smoother result
// ScrollLottie({
//     target: '#animationWindow',
//     path: 'https://assets.codepen.io/35984/tapered_hello.json',
//     duration: 4,
//     speed: 'medium'
// })
gsap.registerPlugin(ScrollTrigger);

gsap.to(".box3", {
    scrollTrigger: ".box3",
    x: 400,
    rotation: 360,
    duration: 3,

}
);

