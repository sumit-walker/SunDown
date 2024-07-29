function locomotiv(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true,
       
    });
}



let container=document.querySelector(".feature");
let imageBox=document.querySelector(".fixed-image");

container.addEventListener("mouseenter",function(){
    imageBox.style.display="block";
    
});

container.addEventListener("mouseleave",function(){
    imageBox.style.display="none";
    
});


let bar=document.querySelectorAll("#bar");

for(let bars of bar){
    bars.addEventListener("mouseenter",function(){
        let image=bars.getAttribute("data-image");
        imageBox.style.backgroundImage=`url(${image})`;
    })
    
}


let h1=document.querySelector(".h1 h1");
let h2=document.querySelector(".h2 h1");
let h3=document.querySelector(".h3 h1");
let para=document.querySelector(".project-p p");




let Bar1=document.querySelector("#Bar-1");
let Bar2=document.querySelector("#Bar-2");
let Bar3=document.querySelector("#Bar-3");
let img=document.querySelector(".page-4 img")


h1.addEventListener("click",function(){
    Bar1.style.backgroundColor="red";
    Bar2.style.backgroundColor="grey";
    Bar3.style.backgroundColor="grey";

    img.src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg"

    h3.style.color="grey";
    h2.style.color="grey";
    h1.style.color="white";
    para.innerText="Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";

});

h2.addEventListener("click",function(){
    Bar1.style.backgroundColor="grey";
    Bar2.style.backgroundColor="red";
    Bar3.style.backgroundColor="grey";
    img.src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp"

    h1.style.color="grey";
    h2.style.color="grey";
    h2.style.color="white";
    para.innerText="Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.";
});

h3.addEventListener("click",function(){
    Bar1.style.backgroundColor="grey";
    Bar2.style.backgroundColor="grey";
    Bar3.style.backgroundColor="red";

    img.src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-1080.jpg"

    h1.style.color="grey";
    h2.style.color="grey";
    h3.style.color="white";
    para.innerText="We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.";

});

function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}


function LocomotiveGsap(){
console.clear();

gsap.registerPlugin(ScrollTrigger);



//I facing some scrolling issue while using Gsap and locomotive  together that's why i used this code from github. this code resolve my scolling issue.

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);


// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

// locomotiv()

LocomotiveGsap()

swiper();
locomotiv()
