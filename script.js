function navbarAnimation() {
  let navlinks = document.querySelector("nav .nav-options");
  let nav = document.querySelector("nav");
  let tl = gsap.timeline();

  document.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      nav.classList.add("scroller-nav");
      return;
    }
    nav.classList.remove("scroller-nav");
  });

  tl.to("nav .hover-div", {
    height: "160px",
    duration: 0.2,
  });
  tl.from("nav .more-options span", {
    y: 30,
    opacity: 0,
    stagger: { amount: 0.6 },
  });
  tl.pause();

  navlinks.addEventListener("mouseover", () => {
    tl.timeScale(1);
    tl.play();
  });
  nav.addEventListener("mouseleave", () => {
    tl.timeScale(-1.9);
  });
}

function page1Animation() {
  let tl = gsap.timeline();

  tl.from(".page1 h1", {
    y: 100,
    ease: "power4.out",
    duration: 1.25,
    delay: 0.9,
    skewY: 7,
    opacity: 0,
    stagger: 0.5,
  });
  tl.from(
    ".page1 p",
    {
      ease: "power4.out",
      opacity: 0,
      scale: 0.95,
      stagger: 0.5,
    },
    "-=.5"
  );
  tl.from(".page1 .slider", {
    opacity: 0,
    duration: 1,
  });
}

function page2Animation() {
  let hoverAreas = document.querySelectorAll(".page2 .cards");

  hoverAreas.forEach((elem) => {
    elem.addEventListener("mousemove", (event) => {
      gsap.to(elem.childNodes[5], {
        x: event.x - elem.getBoundingClientRect().x - 20,
        y: event.y - elem.getBoundingClientRect().y - 20,
        duration: 0.8,
        ease: "back.out(3)",
      });
    });

    elem.addEventListener("mouseenter", (event) => {
      gsap.to(elem.childNodes[5], {
        opacity: 0.95,
        scale: 1,
      });
      let first_svg = elem.querySelector(".first-svg");
      let second_svg = elem.querySelector(".second-svg");
      gsap.to(first_svg, {
        x: 12,
        y: -12,
        opacity: 0,
        ease: "power3.out",
      });
      gsap.to(second_svg, {
        x: 0,
        y: -12,
        opacity: 1,
        ease: "power3.out",
      });
    });

    elem.addEventListener("mouseleave", (event) => {
      gsap.to(elem.childNodes[5], {
        opacity: 0,
        scale: 0.25,
      });
      let first_svg = elem.querySelector(".first-svg");
      let second_svg = elem.querySelector(".second-svg");
      gsap.to(first_svg, {
        x: 0,
        y: 0,
        opacity: 1,
        ease: "power3.out(1.7)",
      });
      gsap.to(second_svg, {
        x: -12,
        y: 0,
        opacity: 0,
        ease: "back.out(1.7)",
      });
    });
  });
}

function page3Animation() {
  let playBtn = document.querySelector(".page3 .page3-play .icon");
  let video = document.querySelector(".page3 video");

  playBtn.addEventListener("click", () => {
    video.play();
    gsap.to(video, {
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      borderRadius: 0,
      duration: 0.5,
    });
  });

  video.addEventListener("click", () => {
    video.pause();
    gsap.to(video, {
      scaleX: 0.4,
      scaleY: 0,
      opacity: 0,
      borderRadius: "30px",
      duration: 0.5,
    });
  });
}

function page4Animation() {
  let hoverAreas = document.querySelectorAll(".page4 .section .right-section");

  hoverAreas.forEach((elem) => {
    let video = elem.querySelector("video");

    elem.addEventListener("mouseenter", () => {
      video.play();
      gsap.to(elem.childNodes[5], {
        opacity: 1,
        scale: 1,
      });
    });

    elem.addEventListener("mousemove", (event) => {
      gsap.to(elem.childNodes[5], {
        x: event.x - elem.getBoundingClientRect().x - 25,
        y: event.y - elem.getBoundingClientRect().y - 25,
        duration: 0.75,
        ease: "back.out(3)",
      });
    });

    elem.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
      gsap.to(elem.childNodes[5], {
        scale: 0,
        opacity: 0,
      });
    });
  });
}

function page5Animation() {
  let page5Btn = document.querySelector(".page5 .service-left .action");
  let clientBtn = document.querySelector(".page5 .action");
  let first_svg = clientBtn.querySelector(".first-svg");
  let second_svg = clientBtn.querySelector(".second-svg");

  // document.querySelectorAll(".page5 .service-right summary").forEach((elem) => {
  //   elem.addEventListener("click", () => {
  //     let rotateIcon = elem.querySelector("i");

  //     gsap.to(rotateIcon, {
  //       rotate: 180,
  //     });
  //   });
  // });

  page5Btn.addEventListener("mouseover", () => {
    gsap.to(".page5 .service-left .action h1 > span", {
      y: -10,
      rotateX: 90,
      opacity: 0,
      stagger: { amount: 0.35 },
    });
    gsap.to(".page5 .service-left .action h1 .hover-spans span", {
      y: 0,
      rotateX: 0,
      opacity: 1,
      stagger: { amount: 0.35 },
    });
    gsap.to(".page5 .service-left .action", {
      scale: 1.05,
    });
  });

  page5Btn.addEventListener("mouseleave", () => {
    gsap.to(".page5 .service-left .action h1 > span", {
      y: 0,
      rotateX: 0,
      opacity: 1,
      stagger: { amount: 0.35 },
    });
    gsap.to(".page5 .service-left .action h1 .hover-spans span", {
      y: "1vw",
      rotateX: -90,
      opacity: 0,
      stagger: { amount: 0.35 },
    });
    gsap.to(".page5 .service-left .action", {
      scale: 1,
    });
  });

  clientBtn.addEventListener("mouseenter", (event) => {
    gsap.to(first_svg, {
      x: 12,
      y: -12,
      opacity: 0,
      ease: "power3.out",
    });
    gsap.to(second_svg, {
      x: 0,
      y: -12,
      opacity: 1,
      ease: "power3.out",
    });
  });

  clientBtn.addEventListener("mouseleave", (event) => {
    gsap.to(first_svg, {
      x: 0,
      y: 0,
      opacity: 1,
      ease: "power3.out(1.7)",
    });
    gsap.to(second_svg, {
      x: -12,
      y: 0,
      opacity: 0,
      ease: "back.out(1.7)",
    });
  });
}

navbarAnimation();
page1Animation();
page2Animation();
page3Animation();
page4Animation();
page5Animation();
