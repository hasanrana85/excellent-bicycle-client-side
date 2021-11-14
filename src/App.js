
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import ProductDetails from './Pages/Home/ProductDetails/ProductDetails';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddProducts from './Pages/AddProducts/AddProducts';
import Navbar from './Pages/Dashboard/Navbar/Navbar';
import ExploreProducts from './Pages/Home/ExploreProducts/ExploreProducts';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import ManageOrder from './Pages/ManageOrders/ManageOrders';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import MyOrder from './Pages/MyOrder/MyOrder';
import Pay from './Pages/Pay/Pay';
import Comment from './Pages/Comment/Comment';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/productDetails/:productId">
            <ProductDetails></ProductDetails>
          </PrivateRoute>
          <Route path="/addProducts">
            <AddProducts></AddProducts>
          </Route>
          <Router path="/exploreProducts">
            <ExploreProducts></ExploreProducts>
          </Router>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/manageOrder">
            <ManageOrder></ManageOrder>
          </Route>
          <Route path="/myOrder">
            <MyOrder></MyOrder>
          </Route>
          <Route path="/manageProduct">
            <ManageProducts></ManageProducts>
          </Route>
          <Route path="/pay">
            <Pay></Pay>
          </Route>
          <Route path="/comment">
            <Comment></Comment>
          </Route>
          <Route path="/navbar">
            <Navbar></Navbar>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path = "/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path ="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
