export default class Stocktaking{

    constructor(){

        this._stock = new Array ();

    };

    add(newProduct){

        if(this.search(newProduct.getCode())==null){

            this._stock.push(newProduct);
        };

    };

    delete(code){

        for(let i=0; i<=this._stock.length; i++){

            if(code === this._stock[i].getCode()){


                 

            }else{

                
                
            }
        }
    }

    search(code){

        for(let i=0; i<=this._stock.length; i++){

            if(code === this._stock[i].getCode()){

                return this._stock[i];

            }else{

                return null;
            }

        }
    }

    list(){

        return this._stock;
    }



}