import Counter from "./Counter";
import ProductCard from "./ProductCard";

function CartPage(){

    // var title = "Laptop HP"
    // var price = 50000

    // var product = {
    //     title:"Laptop HP",
    //     price:50000
    // }

    var products = [
        {
        title:"Laptop HP",
        price:50000
    },
    {
        title:"Tablet HP",
        price:35000
    },
    {
        title:"Mobile",
        price:20000
    },
    {
        title:"Smartwatch",
        price:20000
    }
    ]

    return(<>
    <div className="container pt-5">
        <div className="row">
            <div className="col-8 p-4">
           {/* <ProductCard product={products[0]}/>
           <ProductCard product={products[1]}/>
           <ProductCard product={products[2]}/> */}

           {
            products.map(product=><ProductCard product={product}/>)
           }
        </div>
        <div className="col-4 border-start border-3 p-4">
            <h4>summary :</h4>
        </div>
        </div>
    </div>
    </>)
}

export default CartPage;