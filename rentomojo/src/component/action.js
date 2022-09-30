export const addtoCart=(data)=>({
    type:"addtocart",
    payload:data,
})
export const remove=(id)=>({
    type:"remove",
    payload:id,
})
export const checkout=()=>({
    type:"checkout",
})