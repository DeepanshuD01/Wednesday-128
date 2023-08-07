var tl = gsap.timeline()
tl.from("#nav h1, #nav-part2 h3, #nav-part3 i, #nav-part3 h2",{
    y:-70,
    delay:0.2,  
    opacity:0,
    stagger:0.05
})
tl.from("#center h1, #center h2, #center p, #center img#pic",{
    y:70,
    opacity:0,
    scale:0.5
})

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        // markers:true,
        start:"top 70%"
    }
})
tl2.from("#page2 h1",{
    y:70,
    opacity:0,
})

tl.from("#page2 p",{
    y:60,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2 ",
        scroller:"body",
        // markers:true,
        start:"top 70%"
    }
})
tl.from("#page2 #elem-container .elem",{
    y:70,
    opacity:0,
    scale:0.5,
    scrollTrigger:{
        trigger:"#page2 #elem-container .elem",
        scroller:"body",
        // markers:"true",
        start:"top 70%"
    }
})
tl.from("#page3 h1",{
    y:70,
    scale:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"body",
        // markers:"true",
        start:"top 70%",
    }
})
tl.from("#page3 p",{
    y:70,
    scale:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#page3 p",
        scroller:"body",
        // markers:"true",
        start:"top 70%"
    }
})
tl.from("#page3 #slider .s",{
    y:100,
    stagger:0.5,
    scale:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#page3 #slider .s",
        scroller:"body",
        // markers:"true",
        start:"top 70%"
    }
})
tl.from("#page4 h1",{
    y:70,
    scale:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:"true",
        start:"top 70%"
    }
})
tl.from("#page4 #part .box",{
    y:70,
    scale:0.5,
    opacity:0,
    stagger:0.05,
    scrollTrigger:{
        trigger:"#page4 #part .box",
        scroller:"body",
        // markers:"true",
        start:"top 70%"
    }
})
tl.from("#page5 h1",{
    y:70,
    scale:0.5,
    opacity:0,
    stagger:0.05,
    scrollTrigger:{
        trigger:"#page5 h1",
        scroller:"body",
        // markers:"true",
        start:"top 70%"
    }
})
tl.from("#page5 p",{
    y:70,
    scale:0.5,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page5 p",
        scroller:"body",
        // markers:"true",
        start:"top 70%"
    }
})
tl.from("#page5 #elem-container",{
    y:70,
    scale:0.5,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page5 #elem-container",
        scroller:"body",
        // markers:"true",
        start:"top 70%"
    }
})
tl.from("#page6 #part6",{
    y:30,
    scale:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#page6 #part6",
        scroller:"body",
        // markers:"true",
        start:"top 70%"
    }
})
// gsap.from(".elem",{
//     opacity:0,
//     y:100,
//     scale:0.9,
//     scrollTrigger:{
//         trigger:".elem",
//         scroller:"body",
//         // markers:true,
//         start:"top 70%"
//     }
// })
