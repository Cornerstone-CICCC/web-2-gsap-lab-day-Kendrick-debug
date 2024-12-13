gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE
const nameTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".content",
  },
});

nameTL.from(".content h1 span:first-child", {
  x: "-100vw",
  duration: 1,
});

nameTL.from(
  ".content h1 span:last-child",
  {
    x: "100vw",
    duration: 1.4,
  },
  "<"
);

nameTL.from(".content p", {
  transformOrigin: "top left",
  rotation: "90deg",
  opacity: 0,
});

nameTL.from("img", { y: "100vh", duration: 1 });

const section2TL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    toggleActions: "play reverse play reverse",
    start: "top 10%",
    //     // scrub: true,
    //     duration: 1,
  },
});

section2TL.from(".section2 h2 span:first-child", {
  y: "-100vh",
  duration: 1,
});
section2TL.from(
  ".section2 h2 span:last-child",
  {
    y: "-100vh",
    duration: 2,
  },
  "<"
);

section2TL.from(".section2 p", {
  transformOrigin: "center center",
  scaleX: 0,
  duration: 0.9,
});

const horizonTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".horizontal-sections",
    start: "top top",
    pin: true,
    scrub: true,
  },
});

horizonTL
  .from(".section3 h2", {
    scale: 100,
    x: "-200vw",
    duration: 3000,
  })
  .to(".section3 span", {
    backgroundColor: "white",
    color: "black",
  })
  .from(".section3 span:first-child", {
    y: "200vh",
    duration: 3000,
  })
  .from(".section3 span:nth-child(2)", {
    y: "200vh",
    duration: 3000,
  })
  .from(".section3 span:nth-child(3)", {
    y: "200vh",
    duration: 3000,
  })
  .from(".section3 span:last-child", {
    y: "200vh",
    duration: 3000,
  })
  //moving side slide
  .to(".horizontal-sections", {
    xPercent: "-35",
    duration: 3000,
  })

  .from(".section4", {
    width: "100vw",
  })
  .from(".portfolio-item:first-child", {
    x: "200vw",
    duration: 2000,
    stagger: 2,
  })
  .from(".portfolio-item:last-child", {
    x: "200vw",
    duration: 3500,
  });

// TO DO
// const horizonTL = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".horizontal-section"
//     }
// })

// window.addEventListener("DOMContentLoaded", (event) => {
//   const section5 = new splitType("text-split", {
//     types: "words, chars",
//     tagName: "span",
//   });
// });

const section5TL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    // start: "top top",
    pin: true,
    scrub: true,
  },
});

const testing = document.querySelector(".section5 h2");
const splited = testing.textContent.split("");
testing.textContent = "";
splited.forEach((character) => {
  const span = document.createElement("span");
  span.textContent = character === " " ? "\u00A0" : character;
  testing.append(span);
});

section5TL.from(".section5 h2>span", {
  y: "-200vh",
  stagger: 200,
  duration: 2500,
});

section5TL.from(".section5 p", {
  opacity: 0,
  y: "10vh",
  ease: "power2.inOut",
  duration: 1000,
  transformOrigin: "center center",
});

section5TL.from(".contact-btn", {
  transformOrigin: "center",
  opacity: 0,
  scaleX: 0,
  duration: 1000,
  ease: "power2. in",
});

section5TL.to(".section5", {
  backgroundColor: "black",
  duration: 1500,
});

section5TL.from(
  ".section5",
  {
    backgroundPosition: "150% 90%",
    duration: 2000,
    //   backgroundColor: "black",
  },
  "<"
);
