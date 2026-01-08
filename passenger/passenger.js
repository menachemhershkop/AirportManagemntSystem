export default class Passenger{
    #AmountOfMoney
    constructor(name, IDNumber,AmountOfMoney){
        this.name = name;
        this.IDNumber = IDNumber;
        this.#AmountOfMoney = AmountOfMoney
    }
    getAmount(){
        return this.#AmountOfMoney;
    }
}