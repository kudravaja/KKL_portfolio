// main screen

function init() {
  let current = 0;
  let directionForward = true;
  let items = document.querySelectorAll(".card-slider .items .item");
  let nextBtn = document.querySelector(".card-slider .next");
  let prevBtn = document.querySelector(".card-slider .prev");

  let getCard = (item) => {
    return item.querySelector(".card");
  };

  let getTitle = (item) => {
    return item.querySelector(".title span");
  };

  let setItems = () => {
    items.forEach((item, index) => {
      getTitle(item).innerHTML = getTitle(item).textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      if (index === current) return;

      anime.set(getCard(item), {
        translateX: "100vw",
      });

      anime.set(getTitle(item).querySelectorAll(".letter"), {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      });
    });
  };

  let animate = {
    in(item) {
      let card = getCard(item);
      let title = getTitle(item);

      let timeline = anime.timeline({
        duration: 1000,
        easing: "easeOutExpo",
      });

      timeline.add({
        targets: card,
        translateX: directionForward ? ["100vw", 0] : ["-100vw", 0],
        rotate: [40, 0],
      }).add(
        {
          targets: title.querySelectorAll(".letter"),
          clipPath: [
            "polygon(0 0, 100% 0, 100% 0, 0 0)",
            "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ],
          translateY: directionForward ? ["1em", 0] : ["-1em", 0],
          delay: anime.stagger(40),
        },
        "-=1000"
      );

      return timeline;
    },

    out(item) {
      let card = getCard(item);
      let title = getTitle(item);

      let timeline = anime.timeline({
        duration: 1000,
        easing: "cubicBezier(0.86,0,0.07,1);",
      });

      timeline.add({
        targets: card,
        translateX: directionForward ? [0, "-100vw"] : [0, "100vw"],
        rotate: [0, -40],
      }).add(
        {
          targets: title.querySelectorAll(".letter"),
          clipPath: [
            "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          ],
          translateY: directionForward ? [0, "-1em"] : [0, "1em"],
          delay: anime.stagger(40),
        },
        "-=1000"
      );

      return timeline;
    },
  };

  function next() {
    if (!directionForward) {
      directionForward = !directionForward;
    }
    animate.out(items[current]);

    current = (current + 1) % items.length;
    setTimeout(function () {
      animate.in(items[current]);
    }, 550);
    console.log(current);
  }
  function prev() {
    if (directionForward) {
      directionForward = !directionForward;
    }
    animate.out(items[current]);
    current = (current - 1 + items.length) % items.length;
    setTimeout(function () {
      animate.in(items[current]);
    }, 550);
    console.log(current);
  }

  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  setItems();
}

document.addEventListener("DOMContentLoaded", init);

$('#item1').hover(function (){
  $('.cursor').css({
    'backgroundImage': 'url(images/cursorRed.svg)',
    'transform': 'scale(2.5), translate(31%, 31%)',
  })
})
$('#item2').hover(function (){
  $('.cursor').css({
    'backgroundImage': 'url(images/cursorOrange.svg)',
    'transform': 'scale(2.5), translate(31%, 31%)',
  })
})
$('#item3').hover(function (){
  $('.cursor').css({
    'backgroundImage': 'url(images/cursorBlue.svg)',
    'transform': 'scale(2.5), translate(31%, 31%)',
  })
})
$('#item4').hover(function (){
  $('.cursor').css({
    'backgroundImage': 'url(images/cursorYellow.svg)',
    'transform': 'scale(2.5), translate(31%, 31%)',
  })
})
$('.title').hover(function (){
  $('.cursor').css({
    'backgroundImage': 'url(images/cursorBlack.svg)',
    'transform': 'scale(1)',
  })
})

gsap.from(".card", 1, {
  bottom: "-1000%",
  opacity: 0,
  ease: Expo.easeInOut,
});
gsap.from(".name", 1, {
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 1,
});
gsap.from(".nav", 2, {
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 1,
});
gsap.from(".title", 1, {
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 0.5,
});
