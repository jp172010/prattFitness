import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import Home from "./Home";
import Landing from "./Landing";
import Login from "./Login";
import FindTrainer from "./FindTrainer"
import './App.css';
import TopNav from './Navbar';
import ExerciseLibrary from "./ExerciseLibrary"
import Workout from "./Workout"

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <TopNav/>
          <PrivateRoute exact path="/Home" component={Home} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/ExerciseLibrary" component={ExerciseLibrary} />
          <Route exact path="/FindTrainer" component={FindTrainer}/>
          <Route exact path="/Workout" component={Workout}/>
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
