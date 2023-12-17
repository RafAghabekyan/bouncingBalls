import { CircleManager } from "./circleManager.js";

export class CanvasApp {
  private _canvas: HTMLCanvasElement;
  private _ctx: CanvasRenderingContext2D;
  private _circleManager: CircleManager;
  private _lastTimestamp: number;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this._canvas = canvas;
    this._ctx = ctx;
    this._circleManager = new CircleManager(this._canvas, this._ctx);
    this._lastTimestamp = 0;
    this.assignCanvasSizes();
  }

  private assignCanvasSizes(): void {
    this._canvas.width = window.innerWidth;
    this._canvas.height = window.innerHeight;
  }

  private update(deltaTime: number) {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);

    this._circleManager.updateAll(deltaTime);
  }

  private tick = (currentTimestamp: number) => {
    const deltaTime = (currentTimestamp - this._lastTimestamp) / 1000;
    this._lastTimestamp = currentTimestamp;

    this.update(deltaTime);

    requestAnimationFrame(this.tick);
  };

  public start() {
    this._canvas.addEventListener("click", this._circleManager.spawnCircle);

    requestAnimationFrame(this.tick);
  }
}
