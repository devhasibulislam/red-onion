import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './routes/Home/Home';
import Breakfast from './routes/Meals/Breakfast';
import Dinner from './routes/Meals/Dinner';
import Lunch from './routes/Meals/Lunch';
import Footer from "./shared/Footer";
import Header from "./shared/Header";

function App() {
  return (
    <section id="app">
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/home'
          element={<Home />}
        >
          <Route
            path='breakfast'
            element={<Breakfast />}
          />
          <Route
            path='lunch'
            element={<Lunch />}
          />
          <Route
            path='dinner'
            element={<Dinner />}
          />
        </Route>
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
