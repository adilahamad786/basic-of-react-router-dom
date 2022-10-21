import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section>
      <p>The product component</p>
      <ul>
        <li>
          <Link to="/products/p1">English speaking book</Link>
        </li>
        <li>
          <Link to="/products/p2">Development book</Link>
        </li>
        <li>
          <Link to="/products/p3">Dsa Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Product;
