import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Header/Header";
import Restaurants from "./Restaurants/Restaurants";
import Categories from "./Categories/Categories";
import Order from "./Order/Order";
import AllRestaurants from "./AllRestaurants/AllRestaurants";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Restaurants />
      <Categories />
      <Order />
      <AllRestaurants />
      <Footer />
    </div>
  );
}

export default App;
