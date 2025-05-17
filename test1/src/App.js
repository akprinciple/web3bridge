import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Index";
import CartPage from "./CartPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
