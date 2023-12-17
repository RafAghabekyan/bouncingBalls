import {
  CIRCLE_RADIUS,
  DAMPENING_COEFFICIENT,
  GRAVITY_ACCELERATION,
  MIN_BOUNCE_VELOCITY,
} from "./constants.js";
import { getRandomColor } from "./utils.js";

export class Circle {
  private _canvas: HTMLCanvasElement;
  private _ctx: CanvasRenderingContext2D;
  private _color: string;
  private _x: number;
  private _y: number;
  private _radius: number;
  private _speed: number;
  private _isMoving: boolean;

  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    color: string
  ) {
    this._canvas = canvas;
    this._ctx = ctx;
    this._color = color;
    this._x = x;
    this._y = y;
    this._radius = CIRCLE_RADIUS;
    this._speed = 0;
    this._isMoving = true;
  }

  private applyGravityChanges(deltaTime: number) {
    this._y +=
      this._speed * deltaTime + (GRAVITY_ACCELERATION * deltaTime ** 2) / 2;
    this._speed += deltaTime * GRAVITY_ACCELERATION;

    if (this._y + this._radius > this._canvas.height) {
      this._y = this._canvas.height - this._radius;
      this._speed *= -DAMPENING_COEFFICIENT; // Dampening effect
      this._color = getRandomColor();

      if (Math.abs(this._speed) < MIN_BOUNCE_VELOCITY) {
        this._isMoving = false;
      }
    }
  }

  public drawCircle() {
    this._ctx.beginPath();
    this._ctx.arc(this._x, this._y, this._radius, 0, 2 * Math.PI);
    this._ctx.fillStyle = this._color;
    this._ctx.fill();
    this._ctx.stroke();
  }

  update(deltaTime: number) {
    if (this._isMoving) {
      this.applyGravityChanges(deltaTime);
    }
    this.drawCircle();
  }
}
