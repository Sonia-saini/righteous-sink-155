import React, {  useEffect, useState } from 'react'
import axios from 'axios'

import {cartContext} from './cartcontext'
import { addtoCart } from './action'

export default function Product(){
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    const {state,dispatch}=React.useContext(cartContext)
    const alreadyadded=(id,state)=>{
   
      if(state.find((el)=>el.id===id)){
        return true;
      }
      return false;
    }
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

    console.log(state,"asdfad")
    
    return (  
     
      
      <section className='product'>
       
        {loading && "Loading..."}
        {!!data && data.length > 0 ? data.map((product) => {
            return(
              <div key={product.id}>
                <img src={product.image} alt="" width="200" height="200"/>
                <h2>Name: {product.title}</h2>
                <p>Id: {product.id}</p>
              
              
                <p>Brand: {product.brand}</p>
                <p>Price: {product.price}</p>
                <p>Category: {product.category}</p>
                <button disabled={alreadyadded(product.id,state)} onClick={()=>dispatch(addtoCart(product)) 
                }>Add to Cart</button>
              </div>
            )   
          }):(<p>API did not provided any product, try again.</p>)
        }
      </section>
    )
}