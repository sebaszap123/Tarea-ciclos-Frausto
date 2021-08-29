class SerieS {
  constructor() {
    this.n = 3;
    this.s = 4;
  }
  substract(a, b) {
    return a - b;
  }
  add(a, b) {
    return a + b;
  }
  infiniteSerie(limit) {
    let s = 0;
    s += this.substract(this.s, this.s / this.n);
    console.log(s);
    while (this.n < limit) {
      this.n += 2;
      s = this.add(s, this.s / this.n);
      this.n += 2;
      s = this.substract(s, this.s / this.n);
    }
    return s;
  }
}
class SerieE {}

let serieS = new SerieS();
console.log(serieS.infiniteSerie(100));
