class Calculation{
    #calculateLine='';
    setterCalculationLine(value){
        this.#calculateLine=value
    }
    setLastSymbolCalculationLine(s){
        this.#calculateLine+=s
    }
    getterCalculationLine(){
        return this.#calculateLine
    }
    lastSymbol(){
        return this.#calculateLine[this.#calculateLine.length-1]
    }
    deleteLastSymbol(){
        this.#calculateLine=this.#calculateLine.slice(0, -1);
    }
}

const calc = new Calculation();
calc.setterCalculationLine('Hello');
console.log(calc.getterCalculationLine()); 
calc.setLastSymbolCalculationLine('!');
console.log(calc.getterCalculationLine()); 
console.log(calc.lastSymbol()); 
calc.deleteLastSymbol();
console.log(calc.getterCalculationLine()); 