import { useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function Add(props){
  const {id} =useParams();
    const [title , settitle] = useState("")
    const [price , setprice] = useState(0)
    
 const   submitform  = (e) => {
e.preventDefault();

//  axios.post(`http://localhost:9000/products`,{
//     title,
//     price,
  
//     })
//     .then((res) => {
// console.log(res.id);
//     })
fetch("http://localhost:9000/products" , {
  
  method : "POST",
  body: JSON.stringify  ({
    
    title,
    price,

})


})    .then((res) => res.json())
.then((data) => {console.log(data)} )
  }



return(

<>

<form onSubmit={submitform }>
  <div className="mb-3">
    <label htmlFor="product-title" className="form-label">Title</label>
    <input type="text" className="form-control"  placeholder="product-title" onChange={ (e) => settitle(e.target.value)}/>
  </div>
  
  <div className="mb-3">
    <label htmlFor="Product price" className="form-label">Price</label>
    <input type="text" className="form-control"  placeholder="product-price"     onChange={(e) => setprice(+e.target.value)}/>
  </div>
  
  <button type="submit"  className="btn btn-primary">Add product</button>
</form> 

</>


);

}
