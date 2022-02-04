import { Link,Outlet } from "react-router-dom";

const Product = () =>{
    return(
        <>
        <div>
            <input type="serach" placeholder="Search Products" />
        </div> 
        <nav>
            <Link to="feature">Feature</Link>
            <Link to="newproduct">New Products</Link>
        </nav>
        <Outlet />
        </>
    )
}

export default Product;