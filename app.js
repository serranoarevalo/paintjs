const canvas = document.getElementById("js-paint"),
  context = canvas.getContext("2d"),
  strokeInput = document.getElementById("js-line"),
  colors = document.getElementsByClassName("color");

let painting = false;
let x, y;

canvas.width = 700;
canvas.height = 700;

context.strokeStyle = "#000000";
context.lineWidth = 2.5;

const onMouseMove = event => {
  x = event.x;
  y = event.y;
  if (!painting) {
    context.beginPath();
    context.moveTo(x, y);
  } else {
    context.lineTo(x, y);
    context.stroke();
  }
};

const startPainting = () => (painting = true);
const stopPainting = () => (painting = false);

const onRangeChange = e => {
  const value = e.target.value;
  context.lineWidth = value;
};

const onColorClick = e => {
  const style = e.target.style;
  context.strokeStyle = style.backgroundColor;
};

Array.from(colors).forEach(color =>
  color.addEventListener("click", onColorClick, false)
);
canvas.addEventListener("mousemove", onMouseMove, false);
canvas.addEventListener("mousedown", startPainting, false);
canvas.addEventListener("mouseup", stopPainting, false);
canvas.addEventListener("mouseleave", stopPainting, false);
strokeInput.addEventListener("input", onRangeChange, false);
