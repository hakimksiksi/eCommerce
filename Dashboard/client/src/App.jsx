import React, { useEffect, useState } from 'react'
import Login from './components/Login.jsx'
import NavBar from './components/NavBar.jsx'
import ProductList from './components/ProductList.jsx'
import CreateProduct from './components/CreateProduct.jsx'
import Update from './components/update.jsx'
import SignUp from './components/SignUp.jsx'
import axios from 'axios'

const App = () => {
     const [view,setView]=useState("login")
     const [admin,setAdmin]=useState([])
     const [product,setProduct]=useState([])
     const [category,setCategory]=useState([])
     const [currentProduct,setOneProduct]=useState(null)

  useEffect(()=>{
    fetch()
    },[])


    const fetch =()=>{
      fetchAdmin()
      fetchProducts()
      fetchCategory()
    }


    const fetchAdmin =()=>{
      axios.get('/api/admin/getAll')
      .then((res)=>setAdmin(res.data))
      .catch((error)=>console.log(error))
    }

    const handleLogin=(logger)=>{
      for (let i = 0;i<admin.length;i++){
        if(admin[i].userName===logger.userName && admin[i].password === logger.password){
          setView('allProducts')
        }
      }
    }
    const handleSearch=(productName)=>{
      console.log(productName);
      axios.get(`/api/product/${productName}`)
      .then((res)=>{
        let array=[]
        array.push(res.data)
        setProduct(array)
      })
      .catch((error)=>console.log(error))
    }


    const fetchProducts =()=>{
      axios.get('/api/product/getAll')
      .then((res)=>setProduct(res.data))
      .catch((error)=>console.log(error))
    }


    const fetchCategory =()=>{
      axios.get('/api/category/getAll')
      .then((res)=>setCategory(res.data))
      .catch((error)=>console.log(error))
    }

    const createUser=(userName,password)=>{
      axios.post('/api/admin/add',{
        userName:userName,
        password:password
      })
      .then((res)=>{
      fetchAdmin()
      setView('login')})
      .catch((error)=>console.log(error))
    }


    const CreateProducts=(imageUrl,productName,productDescription,productPrice,productQuantity)=>{
      axios.post('/api/product/add',{
        imageUrl:imageUrl,
        productName:productName,
        productDescription:productDescription,
        productPrice:productPrice,
        productQuantity:productQuantity,
      })
      .then((res)=>{
      fetchProducts()
      setView('allProducts')})
      .catch((error)=>console.log(error))
    }


    const deleteProduct = (id)=>{
      axios.delete(`api/product/delete/${id}`)
      .then((res)=>{
        fetchProducts()
        setView('allProducts')
      })
      .catch((error)=>console.log(error))
    }


    const updateProduct = (obj,id)=>{
      setOneProduct(obj)
      axios.put(`/api/product/update/${id}`,obj)
      .then((res)=>{
        fetchProducts()
        setView('allProducts')
      })
      .catch((error)=>console.log(error))
    }

    const renderView = ()=>{
      if(view==='login'){
        return <Login handleLogin={handleLogin} setView={setView}/>
      }
      else if(view ==='signUp'){
        return <SignUp createUser={createUser}/>
      }
      else if (view==='allProducts'){
        return (<div>
          <NavBar setView={setView}/> <ProductList fetchProducts={fetchProducts} handleSearch={handleSearch} product={product} deleteProduct={deleteProduct} updateProduct={updateProduct}  />
        </div>)
      }
      else if (view==='createProduct'){
        return <div> <NavBar setView={setView}/> <CreateProduct CreateProducts={CreateProducts} category={category} />
        </div>
      }
      else if (view==='createCategory'){
        return <NavBar setView={setView}/>
      }
    }



  return (
    <div>
{renderView()}
</div>
  )
}

export default App