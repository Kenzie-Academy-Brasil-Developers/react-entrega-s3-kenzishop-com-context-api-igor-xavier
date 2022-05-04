import { useContext } from "react";
import { VitrineContext } from "../../providers/vitrine";
import { CartContext } from "../../providers/cart";

function Home() {
  const { vitrine } = useContext(VitrineContext);
  const { addToCart } = useContext(CartContext);
  return (
    <div className="vitrine">
      {vitrine.map((product, index) => (
        <li key={index}>
          <figure>
            <img src={product.image} alt="" />
          </figure>
          <h5>{product.name}</h5>
          <div>
            <span>R$: {product.price.toFixed(2)}</span>
            <button type="button" onClick={() => addToCart(product)}>
              Adicionar ao carrinho
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}

export default Home;
