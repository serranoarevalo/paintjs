const canvas = document.getElementById("js-paint"),
  context = canvas.getContext("2d"),
  strokeInput = document.getElementById("js-line"),
  colors = document.getElementsByClassName("color"),
  fillBtn = document.getElementById("js-fill"),
  drawBt = document.getElementById("js-draw"),
  saveBtn = document.getElementById("js-save");

let painting = false;
let filling = false;
let x, y;

canvas.width = 700;
canvas.height = 700;

context.lineWidth = 2.5;
context.fillStyle = "#ffffff";
context.fillRect(0, 0, canvas.width, canvas.height);
context.strokeStyle = "#000000";

const onMouseMove = event => {
  console.log(event);
  x = event.offsetX;
  y = event.offsetY;
  if (!filling) {
    if (!painting) {
      context.beginPath();
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
      context.stroke();
    }
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

const startFilling = () => (filling = true);
const stopFilling = () => (filling = false);

const onCanvasClick = () => {
  if (filling) {
    context.closePath();
    context.beginPath();
    context.fillStyle = context.strokeStyle;
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
};

const saveImage = () => {
  const a = document.createElement("a");
  a.href = canvas.toDataURL("image/jpeg");
  a.download = "paintJSExport";
  a.click();
};

Array.from(colors).forEach(color =>
  color.addEventListener("click", onColorClick, false)
);
canvas.addEventListener("mousemove", onMouseMove, false);
canvas.addEventListener("mousedown", startPainting, false);
canvas.addEventListener("mouseup", stopPainting, false);
canvas.addEventListener("mouseleave", stopPainting, false);
canvas.addEventListener("click", onCanvasClick, false);
strokeInput.addEventListener("input", onRangeChange, false);
fillBtn.addEventListener("click", startFilling, false);
drawBt.addEventListener("click", stopFilling, false);
saveBtn.addEventListener("click", saveImage, false);
