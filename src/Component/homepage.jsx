import Header from "./header";
import product1 from "../assets/product1.jpg"
import product2 from "../assets/product2.jpg"
import product3 from "../assets/product3.jpg"
import product4 from "../assets/product4.jpg"
import Footer from "./footer";

const Homepage = () => {
  return (
    <>
      <Header />
      <section class="hero">
        <h2>Welcome to Our Store</h2>
        <p>Find the best products at unbeatable prices.</p>
        <a href="#" class="btn">
          Shop Now
        </a>
      </section>

      <section className="products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src={product1} alt="Product 1" />
            <h3>Product 1</h3>
            <p>$19.99</p>
            <a href="#" className="btn">
              Add to Cart
            </a>
          </div>
          <div className="product-card">
            <img src={product2} alt="Product 2" />
            <h3>Product 2</h3>
            <p>$29.99</p>
            <a href="#" className="btn">
              Add to Cart
            </a>
          </div>
          <div className="product-card">
            <img src={product3} alt="Product 3" />
            <h3>Product 3</h3>
            <p>$39.99</p>
            <a href="#" className="btn">
              Add to Cart
            </a>
          </div>
          <div className="product-card">
            <img src={product4} alt="Product 4" />
            <h3>Product 4</h3>
            <p>$49.99</p>
            <a href="#" className="btn">
              Add to Cart
            </a>
          </div>
        </div>
      </section>
      <Footer/>
      
    </>
  );
};

export default Homepage;