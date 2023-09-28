import React,{useState} from "react";


const NavBar = ({setView}) =>{

   return(
    <nav className="admin-navbar">
      <div className="admin-logo">
        <a onClick={()=>{setView('allProducts')}}>Eshrini Dashboard</a>
      </div>
      <img src="../../images/Logo.png" alt="Logo" className="admin-logo-img" />
      <ul className="admin-nav-links">
        <li><a  onClick={()=>setView('allProducts')}>Products</a></li>
        <li><a onClick={()=>setView('createProduct')}>Add New Products</a></li>
        <li><a onClick={()=>setView('login')}>Log Out</a></li>
      </ul>
    </nav>
   )
   
}

export default NavBar