import "./App.css";
import { VitrineProvider } from "../src/providers/vitrine";
import { CartProvider } from "../src/providers/cart";
import Routes from "./components/routes";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CartProvider>
          <VitrineProvider>
            <Header />
            <Routes />
          </VitrineProvider>
        </CartProvider>
      </header>
    </div>
  );
}

export default App;
