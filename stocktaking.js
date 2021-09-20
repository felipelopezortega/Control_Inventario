export default class Stocktaking{

    constructor(){

        this._stock = new Array ();

    };

    add(newProduct){

        if(this.search(newProduct.getCode())==null){

            this._stock.push(newProduct);

        }else{

            return false
        }

    };

    delete(code){

        if(this.search(code)==null){

            return false;

        }else{
            
           
            for(let i=0; i<=this._stock.length; i++){

                if(code === this._stock[i].getCode()){

                    this._stock[i] = null;
                    
                }
                
            }

            return this._stock.filter(n => n);

                
        }
    }
    

    search(code){

        for(let i=0; i<=this._stock.length; i++){

            if(code == this._stock[i].getCode()){

                return this._stock[i];

            }else{

                return null;
            }

        }
    }

    list(){

        return this._stock;
    }

    listInverse(){

        let longitudDelArreglo = this._stock.length;

        for (let x = 0; x < longitudDelArreglo / 2; x++){

            let temporal = this._stock[x];
            let indiceContrario = longitudDelArreglo - x - 1;
            this._stock[x] = this._stock[indiceContrario];
            this._stock[indiceContrario] = temporal;
        }

        return this._stock



    }

    setPosition(newProduct, pos){

        if(pos < this._stock.length){

            this._stock[pos] = newProduct;
            
        }else{

            return null;
        }

    }



}