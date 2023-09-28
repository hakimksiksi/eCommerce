import React,{useState} from "react";
import Update from "./update.jsx";

const OneProduct =(props)=>{

    return (
      <div className="hello">
        <section style={{ backgroundColor: '#eee' }}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-4">
              <div className="card" style={{ borderRadius: '15px' }}>
                <div
                  className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src={props.element.imageUrl}
                    style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
                    className="img-fluid"
                    alt="Laptop"
                  />
                  <a href="#!">
                    <div className="mask"></div>
                  </a>
                </div>
                <div className="card-body pb-0">
                  <div className="d-flex justify-content-between">
                    <div>
                      <p>
                        <a href="#!" className="text-dark">
                          {props.element.productName}
                        </a>
                      </p>
                      <p className="small text-muted">{props.element.productDescription}</p>
                    </div>
                    <div>
                      <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-0" />
                <div className="card-body pb-0">
                  <div className="d-flex justify-content-between">
                    <p>
                      <a href="#!" className="text-dark">
                      {props.element.productPrice}
                      </a>
                      DT
                    </p>
                    <p className="text-dark">Available :{props.element.productQuantity}</p>
                  </div>
                </div>
                <hr className="my-0" />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  >
                      Adjust
                    </button>
                    <Update currentProduct={props.element} updateProduct={props.updateProduct}/>
                    <button type="button" className="btn btn-primary" onClick={()=>props.deleteProduct(props.element.id)}>
                      delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
           </div>
         </div>
       </section>
       </div>
    

      
    )
}

export default OneProduct