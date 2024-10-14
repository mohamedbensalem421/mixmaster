import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/Shared-layout";
import Home from "./components/Home";
import About from "./components/About";
import SingleProduct from "./components/SingleProduct";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Error from "./components/Error";
export const AppContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("a");

  const fetchData = async () => {
    try {
      const response = await axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
      setLoading(false);
      setData(response.data.drinks);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    setLoading(true);
  }, [search]);
  return (
    <AppContext.Provider value={{ data, loading, setSearch, setLoading }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:productId" element={<SingleProduct />} />
          </Route>
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
