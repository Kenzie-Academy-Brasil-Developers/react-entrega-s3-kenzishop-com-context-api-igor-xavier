import { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { CartContext } from "../../providers/cart";
function Cart() {
  const history = useHistory();
  const { cart, removeFromCart } = useContext(CartContext);
  const subtotal = cart.reduce((product, acc) => acc.price + product, 0);
  if (!cart.length) {
    return (
      <div className="vazio">
        <h2>Carrinho vazio!</h2>
        <button onClick={() => history.push("/")}>Voltar</button>
      </div>
    );
  }
  return (
    <div className="container">
      <h4>Produtos</h4>
      <div className="cartList">
        {cart.map((product, index) => (
          <li key={index}>
            <figure>
              <img src={product.image} alt="" />
            </figure>
            <h6>{product.name}</h6>
            <label>R$: {product.price.toFixed(2)}</label>
            <button className="remover" onClick={() => removeFromCart(product)}>
              Remover do carrinho
            </button>
          </li>
        ))}
      </div>
      <div className="resumo">
        <h3>Resumo:</h3>
        <p>Quantidade: {cart.length}</p>
        <p>Valor total R$:{subtotal.toFixed(2)}</p>
        <button className="buttons-nav">Finalizar compra</button>
      </div>
    </div>
  );
}
export default Cart;
