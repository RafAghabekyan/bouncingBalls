import { Circle } from "./circle.js";
import { getRandomColor } from "./utils.js";

export class CircleManager {
  private _canvas: HTMLCanvasElement;
  private _ctx: CanvasRenderingContext2D;
  private _circles: Circle[];

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
		this._canvas = canvas;
    this._ctx = ctx;
    this._circles = [];
  }

  public spawnCircle = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const color = getRandomColor();
    const circle = new Circle(this._canvas, this._ctx, clientX, clientY, color);
    this._circles.push(circle);
  };

  public updateAll(deltaTime: number) {
    this._circles.forEach((circle: Circle) => {
      circle.update(deltaTime);
    });
  }
}
