export default class Product{

    constructor(code, name, quantity, price){

        this._code = code;
        this._name = name;
        this._quantity = quantity;
        this._price = price;

    }

    getCode(){

        return this._code;
    }

    getName(){

        return this._name;
    }

    getQuantity(){

        return this._quantity;
    }

    getPrice(){

        return this._price;
    }

    getInfo(){

        return this._code + "->" + this._name;
    }

    getFullInfo(){

        return `
        <div>
            <h3> ${this._code} - ${this._name} </h3>
            <p>  ${this._quantity} - ${this._price} </p>
        </div>
        `
    }


}