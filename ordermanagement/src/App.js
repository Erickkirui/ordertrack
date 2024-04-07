import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import ScrollToTop from './Components/ScrollToTop';
import OrderListings from './Pages/OrderListings';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/orders' element ={<OrderListings />} />
         </Routes>
      </Router>
      
    </div>
  );
}

export default App;
