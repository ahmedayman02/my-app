import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export default function Products(){
    const  [products,setproduct] = useState([]);
    useEffect(() => {

     getAllproduct()   
        },[])

const getAllproduct = () => {


    fetch('http://localhost:9000/products')
    .then((res) => res.json())
    .then((data) => {
        

        setproduct(data)
    }
    )

}

const Deleteproduct =  (product) => {
Swal.fire({

title: `Are yo sure to Delete ${product.title} ? ` , 
showCancelButton : true


}).then((data) => {
   if(data.isConfirmed){

    fetch(`http://localhost:9000/products/${product.id}` , {
        method:"DELETE"
    })
    .then((res) => res.json() )
    .then(() => {
    
        getAllproduct()
    })
   }



} )



}

return(

<>                  
<h1>

    products page 
</h1>
<Link to={'/Products/add'} className="btn btn-success mt-3">Add New Product</Link>

<table className="table table-striped ">

<thead>
<tr>
<th>ID</th>
<th>Title</th>
{/* <th>description</th> */}
<th>Price</th>
<th>Operation</th>



</tr>



</thead>


<tbody>
{
    products.map((product) => {
        return(


<tr key={product.id}>
<td> {products.id}</td>
<td >{product.title.slice(0,50)}</td>
{/* <td>{product.description}</td> */}

<td>{product.price}</td>
<td>
<button  onClick={() => Deleteproduct(product)} className="btn btn-danger btn-sm">Delete</button>
<Link to={`/products/${product.id}`} className="btn btn-info btn-sm">View</Link>
<Link to={`/products/edit/${product.id}`} className="btn btn-primary btn-sm">Edit</Link>

</td>


</tr>



        )
    })
}
</tbody>



</table>

</>

)


}

