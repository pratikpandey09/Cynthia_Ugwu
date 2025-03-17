const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



// This function is ANIMATE first page. here we declare the function
function firstpage(){
    var t1=gsap.timeline();
    t1.from(".nav",{
        y: "-10",
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    })
        .to(".anime", {
            y: "0",
            ease: Expo.easeInOut,
            duration: 1.5,
            stagger: 0.2
        })
        .from(".hero-3rd-portion",{
            opacity:0,
            ease:Expo.easeInOut
        })
}
// here we runthis function.
firstpage();


