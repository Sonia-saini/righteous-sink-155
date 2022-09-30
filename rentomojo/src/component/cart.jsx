import { useState } from "react";
import { useContext } from "react"
import { cartContext } from "./cartcontext"
import {remove,checkout} from "./action"

export default function Cart(){
  const {state,dispatch}=useContext(cartContext);
 
  

 
 
 

 
  
  
    return (
        <>
        <h1>Quantity:{state.length} </h1>
        <h2>Total-Price : {Math.round(state.reduce((a,c)=>a+c.price,0))}</h2>
<div className="cart">{
  state.length>0?state.map(product=>{
      return  <div key={product.id}>
        <img src={product.image} alt="" width="200" height="200"/>
        <h2>name: {product.name}</h2>
        <p>id: {product.id}</p>
        <p>title: {product.title}</p>
        <p>brand: {product.brand}</p>
        <p>price: {product.price}</p>
        <p>category: {product.category}</p>
        <button onClick={()=>dispatch(remove(product.id))}>Remove</button>
      </div>
    }):"no products"
 
} </div> 
<button onClick={()=>dispatch(checkout())}>Order confirm</button>
        </>
    )
}