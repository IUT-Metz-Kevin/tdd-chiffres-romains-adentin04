export class RomanNumeral {
  private _numereuxRomain: string[] = ['I', 'IV', 'V', 'X', 'L', 'C', 'D', 'M'];
  private _numereux: number[] = [1, 4, 5, 10, 50, 100, 500, 1000];

  constructor() {}

  getNumRomain(): string[] {
    return this._numereuxRomain;
  }


  of(value: string): number {
    let result = 0;
    let i = 0;

    while (i < value.length) {
      
      let twoChar = value.substring(i, i + 2);
      let oneChar = value.substring(i, i + 1);
console.log(twoChar,oneChar);
      let indexTwo = this._numereuxRomain.indexOf(twoChar);
      if (indexTwo !== -1) {
        result += this._numereux[indexTwo];
        i += 2;
        continue;
      }

      let indexOne = this._numereuxRomain.indexOf(oneChar);
      if (indexOne !== -1) {
        result += this._numereux[indexOne];
        i += 1;
      } else {
        throw new Error(`Caractère romain invalide: ${oneChar}`);
      }
    }

    return result;
  }
}
let n = new RomanNumeral ();
n.of('I')