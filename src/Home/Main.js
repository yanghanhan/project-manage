import React, { Component } from 'react';
import {Link, Outlet, Routes, Route} from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/" element={<Dashboard />}>
                <Route index element={<Invoices />} />
                <Route  path="team" element={<Team />} />
              </Route>
            </Routes>
          );
    }
}

function Home(){
    return <span>home</span>
}

function Dashboard() {
    return (
      <div>
        <h1>Dashboard</h1>
        <nav>
          <Link to="#">Invoices</Link>{" "}
          <Link to="team">Team</Link>
        </nav>
        <hr />
        <Outlet />
      </div>
    );
  }
function Invoices() {
    return <h1>Invoices</h1>;
  }
  
  function Team() {
    return <h1>Team</h1>;
  }
 
export default Main;