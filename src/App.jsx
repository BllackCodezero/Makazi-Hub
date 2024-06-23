import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPage from './components/Blogpage/BlogPage';
import Login from './components/Auth/Login';
import Signup from './components/Auth/SignUp';
import Listings from './components/Listings/Listings';
import ListingDetails from './components/Listings/ListingDetails';
import BlogList from './components/Blog/BlogList';
import PropertyDetail from './pages/PropertyDetail';
import Home from './components/Homepage/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Community from './components/Community/Community';
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
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<Community />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
        <Route path="/blog" element={<BlogList />} />\
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
