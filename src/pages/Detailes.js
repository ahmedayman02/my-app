import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details(){
const [product , setproduct] = useState()

let {productID} = useParams();

useEffect(() => {

fetch(`http://localhost:9000/products/${productID}`)
.then((res) => res.json())
.then((product) => {
    setproduct(product)
    console.log(product)})


},[])
return(



<>

{product && <h1>  {product.title} </h1>}


</>

);



}