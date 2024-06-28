class Worker{
    constructor(name, surname,rate,days){
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;

    }
    #name;
    #surname;
    #rate;
    #days;
    get days(){
        return this.#days
    }
    get name(){
        return this.#name
    }
    get surname(){
        return this.#surname
    }
    get rate(){
        return this.#rate
    }
    get salary(){
        return this.rate*this.days
    }
}
let woker=new Worker('Ivan','Trifonov',32,5)