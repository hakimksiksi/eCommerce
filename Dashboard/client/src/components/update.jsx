import React,{useState} from "react";

const Update = ({currentProduct,updateProduct})=>{
    
    const [imageUrl,setImageUrl]=useState(currentProduct.imageUrl)
    const [productName,setProductName]=useState(currentProduct.productName)
    const [productDescription,setProductDescription]=useState(currentProduct.productDescription)
    const [productPrice,setProductPrice]=useState(currentProduct.productPrice)
    const [productQuantity,setProductQuantity]=useState(currentProduct.productQuantity)


return (
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Product</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="form-group">
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          id="productName"
          name="productName"
          defaultValue={currentProduct?.productName}
          onChange={(e)=>{setProductName(e.target.value)}}
        />
      </div>
      <div className="form-group">
        <label htmlFor="productDescription">Product Description</label>
        <textarea
          id="productDescription"
          name="productDescription"
            defaultValue={currentProduct?.productDescription}
            onChange={(e)=>{setProductDescription(e.target.value)}}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="productName">ImageUrl</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          defaultValue={currentProduct?.imageUrl}
          onChange={(e)=>{setImageUrl(e.target.value)}}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
        type="number"
          id="price"
          name="price"
          defaultValue={currentProduct?.productPrice}
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
          defaultValue={currentProduct?.productQuantity}
          onChange={(e)=>{setProductQuantity(e.target.value)}}
        />
      </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{updateProduct({imageUrl,productName,productDescription,productPrice,productQuantity:+productQuantity},currentProduct.id)}}>Edit</button>
      </div>
    </div>
  </div>
</div>


)
}



export default Update