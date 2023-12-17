import { CanvasApp } from "./app.js";

function main() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  const canvasApp = new CanvasApp(canvas, ctx);

  canvasApp.start();
}

main();
//
//
//
//
//
//
//
//
//
//
//
// const canvas = document.getElementById("canvas") as HTMLCanvasElement;
// const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const spawnCircle = (e: MouseEvent) => {
//   const { clientX, clientY } = e;
//   ctx.beginPath();
//   ctx.arc(clientX, clientY, 10, 0, 2 * Math.PI);
//   ctx.fillStyle = "green";
//   //   ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
//   //   ctx.fillStyle = circle.color;
//   ctx.fill();
//   ctx.stroke();
// };

// canvas.addEventListener("click", spawnCircle);

// const tick = () => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
// };

// requestAnimationFrame(tick);
//
//
//
//
//
//
//
//
//
//
