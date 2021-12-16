import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Car from "./pages/Car";
import AddCar from "./pages/admin/AddCar";
import User from "./pages/admin/User";
import EditProfile from "./pages/EditProfile";
import EditCar from "./pages/admin/EditCar";
import Reservasi from "./pages/Reservasi";
import Checkout from "./pages/Checkout";




function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/cars">
              <Car/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/profile">
              <Profile/>
            </Route>
            <Route path= "/addcars">
              <AddCar/>
            </Route>
            <Route path= "/editcars/:id">
              <EditCar/>
            </Route>
            <Route path= "/getuser">
              <User/>
            </Route>
            <Route path= "/reservasi">
              <Reservasi/>
            </Route>
            <Route path= "/edituser">
              <EditProfile/>
            </Route>
            <Route path= "/checkout">
              <Checkout/>
            </Route>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;