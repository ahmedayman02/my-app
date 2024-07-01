// import axios from "axios";
// import React, { useEffect, useState } from "react"
// import { useNavigate, useParams } from "react-router-dom"


// export default function Edit(){
// const {id} = useParams();
// const [data , setdata] = useState([]);
// // const navigate =useNavigate()
// useEffect(() => {
//     axios.get('http://localhost:9000/products'+id)
//     .then(res => setdata(res.data))
//     .catch(err => console.log(err))


// },[])
   
// const   submitform  = (e) => {

//     e.preventDefault();
//     axios.put('http://localhost:9000/products'+id ,data)
//     .then(res =>{
//         alert("data updated sucessfully ")
//         // navigate('/')
//     })
// }
    
// return(




// <>



// <form onSubmit={submitform }>
//   <div className="mb-3">
//     <label htmlFor="product-title" className="form-label">Title</label>
//     <input type="text" className="form-control" id="product-title" aria-describedby="Product-title"  placeholder="product-title" onChange={ (e) => setdata({data , title:e.target.value})}/>
//   </div>
  
//   <div className="mb-3">
//     <label htmlFor="Product price" className="form-label">Price</label>
//     <input type="text" className="form-control" id="product-price" aria-describedby="Product-title"  placeholder="product-price"     onChange={(e) => setdata({data , price :e.target.value})}/>
//   </div>
  
//   <button type="submit"  className="btn btn-primary">Add product</button>
// </form> 


// </>

// )



// }
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:9000/products/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const submitForm = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:9000/products/${id}`, data)
      .then(res => {
        alert("Data updated successfully");
        navigate('/Products');
      })
      .catch(err => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <div className="mb-3">
          <label htmlFor="product-title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="product-title"
            name="title"
            placeholder="Product title"
            value={data.title || ''}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="product-price" className="form-label">Price</label>
          <input
            type="text"
            className="form-control"
            id="product-price"
            name="price"
            placeholder="Product price"
            value={data.price || ''}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">Update product</button>
      </form>
    </>
  );
}
