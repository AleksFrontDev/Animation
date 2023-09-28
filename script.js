"use strict";

const btnPhone = document.querySelector("#iphone"),
  btnMacbook = document.querySelector("#macbook"),
  images = document.querySelectorAll("img");

// const phoneAnimation = images[0].animate(
//   [
//     { transform: "translateY(0)" },
//     { transform: "translateY(100px)" },
//     { transform: "translateY(-100px)" },
//     { transform: "translateY(0)" },
//   ],
//   {
//     duration: 3000,
//     iterations: Infinity,
//   }
// );

let phoneAnimation;
btnPhone.addEventListener("click", () => {
  if (!phoneAnimation) {
    phoneAnimation = images[0].animate(
      [
        { transform: "translateY(0) rotate(0deg)", filter: "opacity(100%)" },
        { transform: "translateY(100px) rotate(180deg)" },
        { transform: "translateY(-100px) rotate(270deg)" },
        { transform: "translateY(0) rotate(360deg)" },
      ],
      {
        duration: 3000,
        iterations: Infinity,
      }
    );
  } else if (phoneAnimation.playState === "paused") {
    phoneAnimation.play();
  } else {
    phoneAnimation.pause();
  }
});

let laptopAnimation;
btnMacbook.addEventListener("click", () => {
  if (!phoneAnimation) {
    laptopAnimation = images[1].animate(
      [
        { transform: "translateY(0) rotate(0deg)" },
        { transform: "translateY(100px) rotate(180deg)" },
        { transform: "translateY(-100px) rotate(270deg)" },
        { transform: "translateY(0) rotate(360deg)" },
      ],
      {
        duration: 3000,
        iterations: Infinity,
      }
    );
  } else if (laptopAnimation.playState === "paused") {
    laptopAnimation.play();
  } else {
    laptopAnimation.pause();
  }
});
