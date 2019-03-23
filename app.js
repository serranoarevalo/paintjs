const canvas = document.getElementById("js-paint"),
  context = canvas.getContext("2d");

let painting = false;
let x, y;

canvas.width = window.innerWidth - 80;
canvas.height = window.innerHeight - 80;

context.strokeStyle = "#000000";

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

const onMouseDown = () => {
  painting = true;
};

const onMouseUp = () => {
  painting = false;
};

canvas.addEventListener("mousemove", onMouseMove, false);
canvas.addEventListener("mousedown", onMouseDown, false);
canvas.addEventListener("mouseup", onMouseUp, false);
