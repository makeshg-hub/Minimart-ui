const Header=()=>{
    return(
        <header>
        <div className="logo">
            <h1>Mini Mart</h1>
           <button type="menu">Login</button>
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