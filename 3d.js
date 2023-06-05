gsap.registerPlugin(ScrollTrigger);

let bgVvideo = document.querySelector("#bgVideo");

// bgVideo.pause();
// bgVideo.currentTime = 0;

let sections = gsap.utils.toArray(".step");
sections.forEach((step, i) => {

  ScrollTrigger.create({
      trigger: step,
      end: "+=1000",
  });

  gsap.fromTo(bgVideo, { currentTime: 1 * i }, {
      scrollTrigger: {
          trigger: step,
          start: "0",
          scrub: 1,
      },
      currentTime: 8.7 * (i + 1),
      ease: "none",
  });
});

// уменьшение видео
gsap.to("#bgVideo", {
    scrollTrigger: {
        scrub: true
    },
    scale: 0.65
})
