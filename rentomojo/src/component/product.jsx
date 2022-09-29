import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Product(){
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
const [cart,setCart]=useState([])
    useEffect(() => {
        setLoading(true)
        axios({
            method: 'GET',
            baseURL: 'https://fakestoreapi.com',
            url: '/products',
            
          })
            .then(({ data }) => {
              setData(data)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    localStorage.setItem("cart",JSON.stringify(cart))
    return (  
      <section>
        <h1>All Products</h1>
        {loading && "Loading..."}
        {!!data && data.length > 0 ? data.map((product) => {
            return(
              <div key={product.id}>
                <img src={product.image} alt="" width="200" height="200"/>
                <h2>name: {product.name}</h2>
                <p>id: {product.id}</p>
                <p>title: {product.title}</p>
                <p>brand: {product.brand}</p>
                <p>price: {product.price}</p>
                <p>category: {product.category}</p>
                <button onClick={()=>setCart([...cart,product])}>add to cart</button>
              </div>
            )   
          }):(<p>API did not provided any product, try again.</p>)
        }
      </section>
    )
}