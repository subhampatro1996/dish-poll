import React from "react";
import { Link,Switch,Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import Result from "./Result";
const Navbar = (props) => {
    const {userLoggedIn,toggle} = props
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" >
            Dish Poll
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              {
                userLoggedIn ? <>
                <li className="nav-item">
                    <Link className="nav-link" onClick={()=>{
                        localStorage.removeItem("user")
                        alert("Successfully logged out")
                        toggle()
                        props.history.push('/login')
                    }}>Logout</Link>
                </li>
                </>:
                <>
                    <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </>
              }
              <li className="nav-item">
                <Link className="nav-link" to="/dishes">Dishes</Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>

    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact render={(props)=>{
            return <Login 

            {...props}
            toggle={toggle}

            />
        }} />
        
        <Route path="/dishes">
            <ProtectedRoute>
                <Result/>
            </ProtectedRoute>
        </Route>
    </Switch>

    </div>
  );
};

export default Navbar;
