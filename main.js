import Product from "./product.js";
import Stocktaking from "./stocktaking.js";

let newStock = new Stocktaking ();

const btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", () =>{

    let code = document.getElementById("txtCode").value;
    let name = document.getElementById("txtName").value;
    let quantity = document.getElementById("txtQuantity").value;
    let price = document.getElementById("txtPrice").value;
    
    let product = new Product (code, name, quantity, price);

    newStock.add(product);

    let detalles = document.getElementById("details");
    detalles.innerHTML+= product.getFullInfo();


});

const btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener("click", ()=>{

    let code = document.getElementById("txtCode").value;
    let result = Stocktaking.search(code);
    if(result == null){



    }else{


    }

});