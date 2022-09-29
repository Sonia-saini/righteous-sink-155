import "../App.css"
import {Link} from "react-router-dom"
import Product from './product';
export default function Navbar(){
    return (
       <><div className="nav">
            <img src={"https://dog55574plkkx.cloudfront.net/storelogo/web/Rentomojo.png"} alt="" width="200px" height="100px"/>
       <input placeholder="search here..."/><button>Search</button>
    <Link to="/cart">   <img src="https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg" alt="" width="100px" height="100px"/> 
    </Link>
   
        </div>
        {<Product/>}
        </>
    )
}