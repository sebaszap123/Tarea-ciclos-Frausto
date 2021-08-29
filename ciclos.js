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
  infiniteSerieS(limit) {
    let s = 0;
    s += this.substract(this.s, this.s / this.n);
    while (this.n < limit) {
      this.n += 2;
      s = this.add(s, this.s / this.n);
      this.n += 2;
      s = this.substract(s, this.s / this.n);
    }
    return s;
  }
}
class SerieE {
  constructor() {
    this._one = 1;
    this.factorial = 1;
  }
  add(a, b) {
    return a + b;
  }
  divide(b) {
    return this._one / b;
  }
  infiniteSerieE(limit) {
    // limit en este caso sera contado como el numero factorial final
    var e = this._one;
    while (this.factorial <= limit) {
      e = this.add(e, this.divide(this.getFactorial(this.factorial)));
      this.factorial++;
    }
    return e;
  }
  getFactorial(n) {
    let factorialMultiplier = this._one;
    for (let i = this._one; i <= n; i++) {
      factorialMultiplier *= i;
    }
    return factorialMultiplier;
  }
}

let serieS = new SerieS();
console.log("serie S");
console.log(serieS.infiniteSerieS(100));

let serieE = new SerieE();
console.log("serie E");
console.log(serieE.infiniteSerieE(30));
