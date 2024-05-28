import { Header } from "./components/Header";
import { MenuFood } from "./components/MenuFood";
import { CartProvider } from "./provider/CartProvider";
import { LocationProvider } from "./provider/LocationProvider";
import { ApiProvider } from "./provider/ApiProvider";

function App() {
  return (
    <LocationProvider>
      <ApiProvider>
        <CartProvider>
          <Header />
          <MenuFood />
        </CartProvider>
      </ApiProvider>
    </LocationProvider>
  );
}

export default App;
