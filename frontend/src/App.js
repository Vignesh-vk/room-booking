import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Loginscreen from "./screens/Loginscreen";
import Landingscreen from "./screens/Landingscreen";
import Homescreen from './screens/Homescreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Bookingscreen from "./screens/Bookingscreen";
import RoomDetailing from "./screens/Detail";
import confirmscreen from "./screens/confirmscreen";
import Registerscreen from "./screens/Registerscreen"
import Profilescreen from "./screens/Profilescreen"

class App extends React.Component{
  render(){
  return (
    <Router>
    <div className="App">
     
      <div>
        <Switch>
          <Route exact path="/" component={Landingscreen}/>
          <Route exact path="/Registerscreen" component={Registerscreen}/>
              <Route exact path="/login" component={Loginscreen} />
              <Route exact path="/home" component={Homescreen}/>
              <Route exact path="/book/:roomid" component={RoomDetailing}/>
              <Route exact path="/booking-page" component={Bookingscreen}/>
              <Route exact path="/confirmscreen" component={confirmscreen}/>
              <Route exact path="/profile" component={Profilescreen}/>
      </Switch>
      <ToastContainer />
      </div>
    </div>
    </Router>

  );
}
}
export default App;
