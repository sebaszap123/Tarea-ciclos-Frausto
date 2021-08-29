class SerieS {
  constructor() {
    this.n = 3;
    this.s = 4;
  }
  // Restar numeros
  substract(a, b) {
    return a - b;
  }
  // Sumar numeros
  add(a, b) {
    return a + b;
  }
  // Funcion para calcular serie "S"
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
  // Sumar
  add(a, b) {
    return a + b;
  }
  // Dividir
  divide(b) {
    return this._one / b;
  }
  //Serie e=euler
  infiniteSerieE(limit) {
    // limit en este caso sera contado como el numero factorial final(n!)
    var e = this._one;
    let factorial = this.factorial;
    while (factorial <= limit) {
      // Elabora la formlua de e
      e = this.add(e, this.divide(this.getFactorial(factorial)));
      // Incrementa por cada vuelta el factorial
      factorial++;
    }
    return e;
  }
  getFactorial(n) {
    let factorialMultiplier = this._one;
    for (let i = this._one; i <= n; i++) {
      // obtiene el numero factorial multiplicado desde 1 hasta n
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
console.log(serieE.infiniteSerieE(4));
console.log(serieE.infiniteSerieE(5));
console.log(serieE.infiniteSerieE(6));
console.log(serieE.infiniteSerieE(20));
