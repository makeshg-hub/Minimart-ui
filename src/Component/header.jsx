import React from "react"
import { useNavigate } from "react-router-dom"
function Header(){
    const navigate=useNavigate()
    return(
        <header>
        <div className="logo">
            <h1>Mini Mart</h1>
           <button onClick={()=>navigate('/login')}>Login</button>
        </div>
        
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Cart</a></li>
            </ul>
        </nav>
    </header>

    )
}

export default Header