import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import CardBox from "./features/CardBox";
import CardDetails from "./features/CardDetails";
import FooterView from "./features/FooterView";
import NavbarView from "./features/NavbarView";
import ProductsView from "./features/ProductsView";

import { Toaster } from 'react-hot-toast';


function App() {
  return (
      <div>

        <Router>

          <Toaster />

          <NavbarView />

          <Routes>
            <Route path="/" element={<ProductsView />}/>
            <Route path="/Cart" element={<CardBox />}/>
            <Route path="/CardDetail" element={<CardDetails />}/>
          </Routes>

          <FooterView />

        </Router>

      </div>
  );
}

export default App;
