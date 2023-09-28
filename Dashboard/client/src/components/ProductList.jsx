import React,{useState} from "react";
import OneProduct from "./OneProduct.jsx";

const ProductList =(props)=>{
    const [search,setSearch]=useState('')
return(
    <div>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setSearch(e.target.value)}/>
        <button className="btn btn-outline-success" type="button" onClick={()=>props.handleSearch(search)}>Search</button>
      </form>
    <div className="grid-container">
        {props.product.map((element)=><OneProduct element={element} key={element.id} deleteProduct={props.deleteProduct} updateProduct={props.updateProduct}/>)}
    </div>
    </div>
)
}

export default ProductList