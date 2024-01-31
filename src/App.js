import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import Products from './components/Products';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import UserDetails from './components/UserDetails';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <><Header/> <Home/> </>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<h1>Page Not Found</h1>}/>
        <Route path='/order-summary' element={<OrderSummary/>}/>
        <Route path='/products' element={<Products/>}>
          <Route index element = {<FeaturedProducts/>}/>
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={<NewProducts/>}/>
        </Route>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:userId' element={<UserDetails/>}/>
      </Routes>
    </Router>
  )
}

export default App;