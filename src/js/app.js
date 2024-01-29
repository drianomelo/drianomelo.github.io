const home = document.querySelector(".home");

const widthHome = home.offsetWidth;
const heighthHome = home.offsetHeight;
const qtdCircleTopBottom = Math.ceil(widthHome / 96);
const qtdCircleLeftRight = Math.floor(heighthHome / 96);

for (let i = 0; i < qtdCircleTopBottom; i++) {
  const circleTop = createCircleTop(`${i * 90}`);
  const circleBottom = createCircleBottom(`${i * 90}`);

  home.append(circleTop);
  home.append(circleBottom);
}

for (let i = 0; i < qtdCircleLeftRight; i++) {
  const circleLeft = createCircleLeft(`${i * 90}`);
  const circleRight = createCircleRight(`${i * 90}`);

  home.append(circleLeft);
  home.append(circleRight);
}

function createCircleTop(left) {
  const circle = document.createElement("div");

  circle.classList.add("absolute", "rounded-full", "bg-60");

  circle.style.width = "118px";
  circle.style.height = "118px";
  circle.style.top = "-24px";
  circle.style.left = left;

  return circle;
}

function createCircleBottom(right) {
  const circle = document.createElement("div");

  circle.classList.add("absolute", "rounded-full", "bg-60");

  circle.style.width = "118px";
  circle.style.height = "118px";
  circle.style.bottom = "-24px";
  circle.style.right = right;

  return circle;
}

function createCircleLeft(bottom) {
  const circle = document.createElement("div");

  circle.classList.add("absolute", "rounded-full", "bg-60");

  circle.style.width = "118px";
  circle.style.height = "118px";
  circle.style.left = "-24px";
  circle.style.bottom = bottom;

  return circle;
}

function createCircleRight(top) {
  const circle = document.createElement("div");

  circle.classList.add("absolute", "rounded-full", "bg-60");

  circle.style.width = "118px";
  circle.style.height = "118px";
  circle.style.right = "-24px";
  circle.style.top = top;

  return circle;
}
