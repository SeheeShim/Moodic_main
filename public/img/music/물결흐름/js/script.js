
const c = document.querySelector("canvas");
const ctx = c.getContext("2d");
let cw = (c.width = innerWidth);
let ch = (c.height = innerHeight);
const parts = Array(333);
const img = new Image(124, 124);
img.src = "https://assets.codepen.io/16327/flair-11.png";

let isPlaying = false; // 음악 재생 상태 체크용

img.onload = () => {
  const xDist = 50;
  const yDist = 99;
  const freq = 4;

  for (let i = 0; i < parts.length; i++) {
    parts[i] = {
      x: -xDist,
      y: gsap.utils.interpolate(-yDist, yDist, i / parts.length)
    };

    parts[i].tween = gsap
      .to(parts[i], {
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        x: xDist
      })
      .progress((i / parts.length) * freq);
  }
};

gsap.ticker.add(() => {
  ctx.clearRect(0, 0, cw, ch);
  parts.forEach((pt, i) => {
    ctx.translate(cw / 2, ch / 2);
    ctx.drawImage(
      img,
      -img.width / 2 + pt.x,
      -img.height / 2 + pt.y,
      img.width,
      img.height
    );
    ctx.translate(-cw / 2, -ch / 2);
  });
});

window.addEventListener("resize", () => {
  cw = c.width = innerWidth;
  ch = c.height = innerHeight;
});

let ts = 1;

Draggable.create(".grabber", {
  type: "x",
  maxDuration: 0.5,
  bounds: ".progress-slider",
  onDrag: updateGrabber
});

/* function updateGrabber() {
  ts = gsap.utils.mapRange(-135, 135, 0, 2, this.x);
  gsap.to(".grabber", {
    duration: 0.3,
    innerHTML: ts,
    snap: { innerHTML: 0.1 }
  });
  parts.forEach((pt) => gsap.to(pt.tween, { duration: 0.3, timeScale: ts }));
} */

/* function updateGrabber() {
  ts = gsap.utils.mapRange(-135, 135, 0, 2, this.x);

  // Clamp volume between 0 and 1
  const volume = Math.min(ts / 2, 1);

  const audio = document.getElementById("bgm");
  audio.volume = volume;

  gsap.to(".grabber", {
    duration: 0.3,
    innerHTML: ts.toFixed(1),
    snap: { innerHTML: 0.1 }
  });


  parts.forEach((pt) => gsap.to(pt.tween, { duration: 0.3, timeScale: ts }));
} */
function updateGrabber() {
  ts = gsap.utils.mapRange(-135, 135, 0, 2, this.x);
  ts = Math.max(0, Math.min(ts, 2)); // ts를 0~2로 제한

  const audio = document.getElementById("bgm");

  if (ts <= 0.05) {
    // 거의 0이면 완전 무음 처리
    audio.muted = true;
  } else {
    audio.muted = false;
    audio.volume = ts / 2; // ts가 2일 때 volume 1.0
  }

  // grabber 숫자 보여주기
  gsap.to(".grabber", {
    duration: 0.3,
    innerHTML: ts.toFixed(1),
    snap: { innerHTML: 0.1 }
  });

  // 애니메이션 속도 조절
  parts.forEach((pt) => gsap.to(pt.tween, { duration: 0.3, timeScale: ts }));
}