import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import FooterView from "./features/FooterView";
import NavbarView from "./features/NavbarView";
import ProductsView from "./features/ProductsView";

function App() {
  return (
      <div>

        <Router>

          <NavbarView />

          <Routes>
            <Route path="/" element={<ProductsView />}/>
          </Routes>

          <FooterView />

        </Router>

      </div>
  );
}

export default App;
