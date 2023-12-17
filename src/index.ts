import { CanvasApp } from "./app.js";

function main() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  const canvasApp = new CanvasApp(canvas, ctx);

  canvasApp.start();
}

main();
