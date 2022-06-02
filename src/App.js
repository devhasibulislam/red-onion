import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './routes/Home/Home';
import Login from './routes/Login/Login';
import Register from './routes/Login/Register';
import Reset from './routes/Login/Reset';
import Breakfast from './routes/Meals/Breakfast';
import Dinner from './routes/Meals/Dinner';
import Lunch from './routes/Meals/Lunch';
import MenuItem from './routes/Meals/MenuItem';
import PlaceOrder from './routes/Meals/PlaceOrder';
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import NoMatch from './shared/NoMatch';

function App() {
  return (
    <section id="app">
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        {/* nested route for meals */}
        <Route
          path='/home'
          element={<Home />}
        >
          <Route
            path='breakfast'
            element={<Breakfast />}
          >
            <Route
              path='menuItem/:id'
              element={<MenuItem />}
            />
          </Route>
          <Route
            path='lunch'
            element={<Lunch />}
          >
            <Route
              path='menuItem/:id'
              element={<MenuItem />}
            />
          </Route>
          <Route
            path='dinner'
            element={<Dinner />}
          >
            <Route
              path='menuItem/:id'
              element={<MenuItem />}
            />
          </Route>
          <Route
            path='placeOrder'
            element={<PlaceOrder />}
          />
        </Route>
        {/* routes for rest */}
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/register'
          element={<Register />}
        />
        <Route
          path='/reset'
          element={<Reset />}
        />
        <Route
          path='*'
          element={<NoMatch />}
        />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
