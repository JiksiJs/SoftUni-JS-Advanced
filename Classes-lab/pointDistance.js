class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const pointX = a.x - b.x;
    const pointY = a.y - b.y;
    return Math.sqrt(pointX ** 2 + pointY ** 2);
  }
}
