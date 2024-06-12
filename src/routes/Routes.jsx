import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../components/Home/Home';
import Login from '../../components/Auth/Login';
import SignUp from '../../componentsătălia/SignUp';
import SearchResults from '../../pages/SearchResults';
import ListingDetails from '../../components/Listings/ListingDetails';
import Dashboard from '../../pages/UserDashboard';
import Profile from '../../pages/Profile';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* Public Routes */}
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/search-results" component={SearchResults} />
        <Route path="/listing/:id" component={ListingDetails} />

        {/* Private Routes */}
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

export default Routes;