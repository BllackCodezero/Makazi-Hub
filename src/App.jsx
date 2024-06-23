import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home1 from './components/Home1/Home1';
import Login from './components/Auth/Login';
import Signup from './components/Auth/SignUp';
import Listings from './components/Listings/Listings';
import ListingDetails from './components/Listings/ListingDetails';
import BlogList from './components/Blog/BlogList';
import PropertyDetail from './pages/PropertyDetail';
import Home from './components/Homepage/Home';
import PropertySearch from './components/Homepage/PropertySearch';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propertysearch" element={<PropertySearch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
        <Route path="/blog" element={<BlogList />} />\
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
