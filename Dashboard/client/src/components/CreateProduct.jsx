import React,{useState} from "react";


const CreateProduct = ({CreateProducts,category})=>{
  const [imageUrl,setImageUrl]=useState([])
  const [productName,setProductName]=useState([])
  const [productDescription,setProductDescription]=useState([])
  const [productPrice,setProductPrice]=useState([])
  const [productQuantity,setProductQuantity]=useState([])
  

    return (
    <div className="product-form-container">
    <h2>Add New Product</h2>
    <form >
      <div className="form-group">
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          id="productName"
          name="productName"
          onChange={(e)=>{setProductName(e.target.value)}}
        />
      </div>
      <div className="form-group">
        <label htmlFor="productDescription">Product Description</label>
        <textarea
          id="productDescription"
          name="productDescription"
          onChange={(e)=>{setProductDescription(e.target.value)}}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="productName">ImageUrl</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          onChange={(e)=>{setImageUrl(e.target.value)}}
        />
      </div>
 
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
        type="number"
          id="price"
          name="price"
          required
          onChange={(e)=>{setProductPrice(e.target.value)}}
        />
        DT
      </div>
      <div className="form-group">
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          required
          onChange={(e)=>{setProductQuantity(e.target.value)}}
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          required
        >
          <option value="Select a category" disabled>
            Select a category
          </option>
          {category.map((oneCat)=><option key={oneCat.id}>{oneCat.categoryName}</option>)}
        </select>
      </div>
      <button type="button" onClick={()=>{CreateProducts(imageUrl,productName,productDescription,productPrice,productQuantity)}}>Add Product</button>
    </form>
  </div>
);
}


export default CreateProduct