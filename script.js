let timeout;


function circleChaptaKaro(){
    // define default value of xscale and yscale as 1, 1. ye values define karenge ki circle ko kitna skew hona hai, (1,1) iski natural state hai. 
    var xscale=1;
    var yscale=1;


    // yaha hum mouse ki previous location ko save karenge jis se ki mouse ki current positon ye isko subtract kar ke difference calculate kiya ja sake,
    // mapping ke liye.
    var xprev=0;
    var yprev=0;
    window.addEventListener("mousemove", function(mouseDets){
        // yaha ussi skewness ko thin karne ke liye clearTimeout use kiya gya hai.
        clearTimeout(timeout);

        // ye jo clamp function use hua hai iska kaam hai ki circle ki skewness ko map karna ki, humara mouse chahe jitna move hua circle ek range tak hi skew hoga.
        // formate -> gsap.utils.clamp(minimum_range, maximum_range, mouseKi_previous_aurCurrent_position_ka_difference)
        xscale=gsap.utils.clamp(0.8,1.2, mouseDets.clientX-xprev);
        yscale=gsap.utils.clamp(0.8, 1.2, mouseDets.clientY-yprev);

        xprev=mouseDets.clientX;
        yprev=mouseDets.clientY;

     
    mousemove(xscale,yscale);

    //👇ye setTimeout function isliye use hua hai kyu ki, circle move hone ke baad kabhi-2 apne natural state(means complete cirlce)nahi ban raha tha isliye usko 
    // purane state me wapis lane ke liye ye timeout functuin use hua hai. jis se ki wo skew hone ke baad fir se sahi ho paye. 👇 
        timeout=setTimeout(function(){
            document.querySelector(".circle").style.transform=`translate(${mouseDets.clientX}px ,${mouseDets.clientY}px) scale(0.7,0.7)`;
        },100);

    });
}
//iss function ke use se circle chapta ho raha hai jab humara mouse move hota hai. 
circleChaptaKaro();

function mousemove(xscale,yscale){
    window.addEventListener("mousemove",function (dets){
        document.querySelector(".circle").style.transform=`translate(${dets.pageX}px, ${dets.pageY}px) scale(${xscale}, ${yscale})`;
    });
};
mousemove();
// image animation 1

document.querySelectorAll(".menu_section").forEach(function(elem){
                // this will store rotation.
                var rotatDiff=0;
                var rotate=0;

    elem.addEventListener("mousemove",function(dets){
        const ydiff=dets.clientY - elem.getBoundingClientRect().top;
        const xdiff=dets.clientX - elem.getBoundingClientRect().left;
       
        rotatDiff=dets.clientX-rotate;
        rotate=dets.clientX;

        gsap.to(elem.querySelector(".box-img"),{
            opacity: 1,
            ease: Power4,
            top: ydiff,
            left: xdiff,
            rotate:gsap.utils.clamp(-10, 10, rotatDiff),
        });
    });

    elem.addEventListener("mouseleave",function(dets)
    {
        const ydiff=dets.clientY- elem.getBoundingClientRect().top;
        const xdiff=dets.clientX-elem.getBoundingClientRect().left;
        gsap.to(elem.querySelector(".box-img"),{
            opacity: 0,
            ease: Power4,
            top: ydiff,
            left: xdiff,
        });
    });
});
