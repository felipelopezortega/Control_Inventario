import Product from "./product.js";
import Stocktaking from "./stocktaking.js";

class App{
    
    constructor(){
        
        this._newStock = new Stocktaking ();
        this._tabla = document.querySelector("#table");

        const btnAdd = document.getElementById("btnAdd");
        btnAdd.addEventListener("click", this._addForm);

        const btnDelete = document.getElementById("btnDelete");
        btnDelete.addEventListener("click", this._deleteForm);

        const btnSearch = document.getElementById("btnSearch");
        btnSearch.addEventListener("click", this._searchForm);

        const btnList = document.getElementById("btnList");
        btnList.addEventListener("click", this._listForm)

        const btnListIn = document.getElementById("btnListIn");
        btnListIn.addEventListener("click",this._listInForm);

        const btnPosition = document.getElementById("btnPosition");
        btnPosition.addEventListener("click", this._positionForm);

    };


    _addForm = () =>{
        
        let code = document.getElementById("txtCode").value;
        let name = document.getElementById("txtName").value;
        let quantity = document.getElementById("txtQuantity").value;
        let price = document.getElementById("txtPrice").value;
    
        let product = new Product (code, name, quantity, price);

        let resul = this._newStock.add(product);

        if(resul == false){
            
            return alert("Este código ya está registrado o su inventario está lleno");
            
        }else{

            this._addTable(product);
            return alert("El producto fue añadido correctamente")
            
        }

        

    }

    _deleteForm = () =>{

        let code = document.getElementById("txtCode").value;

        let resu = this._newStock.delete(code)

        if(resu==false){

            return alert("Verifique que el producto que desea eliminar exista")

        }else{

            return alert("Producto eliminado correctamente")
        }


    }


    _searchForm = () =>{
    
        let code = document.getElementById("txtCode").value;
        let result = this._newStock.search(code);

        if(result == null){

            return alert("El producto que busca no existe");

        }else{

            return this._newStock[i]
        }

    }

    _listForm = () =>{

        this._cleanTable();

        for(let i=0;i<=this._newStock.length; i++){

            this._addTable([i])
        }

        return this._tabla;
    }

    _listInForm = () =>{

        this._cleanTable();

        for(let i=0;i<=this._newStock.length; i++){

            this._newStock.listInverse()
            this._addTable([i])
        }

        return this._tabla;
    }

    _positionForm = () =>{

        let code = document.getElementById("txtCode").value;
        let name = document.getElementById("txtName").value;
        let quantity = document.getElementById("txtQuantity").value;
        let price = document.getElementById("txtPrice").value;
        let pos = document.getElementById("txtPosition").value;

        let product = new Product (code, name, quantity, price);

        let res = this._newStock.setPosition(product, pos);

        if(res==null){

            alert("El código o la posición son incorrectos")
            return 
        }

        this._listForm();

        
    }

    _addTable(product){

        let row = this._tabla.insertRow(-1);

        let rowCode = row.insertCell(0);
        let rowName = row.insertCell(1);
        let rowQuantity = row.insertCell(2);
        let rowPrice = row.insertCell(3);
        let rowCost = row.insertCell(4);

        rowCode.innerHTML = product.getCode();
        rowName.innerHTML = product.getName();
        rowQuantity.innerHTML = product.getQuantity();
        rowPrice.innerHTML = product.getPrice();
        rowCost.innerHTML = product.getCost();
    }

    _cleanTable(){

        while( this._tabla.rows.length > 2){
            this._tabla.deleteRow(-1);
        }   
    }             

}

let app = new App();