import { useEffect } from "react";
import Header from "./Components/Header";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import bootstrap css module
import "bootstrap/dist/css/bootstrap.min.css";
//impoer carousel
import MealDemo from "./Components/carousel/Carousel";
import { Routes, Route } from "react-router-dom";
import Cards from "./Components/Card";
import Footer from "./Components/footer/Footer";
import AddProduct from "./Components/addProduct/AddProduct";
import CardsDetails from "./Components/CardDetails";
import { useDispatch } from "react-redux";
import { fetchCardsData } from "./store/productSlice";

// my api(fake json -server)--> https://my-json-server.typicode.com/priyach19/martJSON/mealsdata/db

function App() {
  const dispatch = useDispatch();
  //to fetch and display meal items
  useEffect(() => {
    dispatch(fetchCardsData());
  }, [dispatch]);

  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <MealDemo />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/addproducts" element={<AddProduct />} />
        <Route path={`/productdetail`} element={<CardsDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
