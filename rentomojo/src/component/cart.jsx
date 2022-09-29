export default function Cart(){
const cart=JSON.parse(localStorage.getItem("cart"))||[];
console.log(cart,"cart")
    return (
        <div>
{
  cart.length>0 && cart.map(product=>{
        <article key={product.id}>
        <img src={product.image} alt="" width="200" height="200"/>
        <h2>name: {product.name}</h2>
        <p>id: {product.id}</p>
        <p>title: {product.title}</p>
        <p>brand: {product.brand}</p>
        <p>price: {product.price}</p>
        <p>category: {product.category}</p>
        <button >remove</button>
      </article>
    })
}
        </div>
    )
}