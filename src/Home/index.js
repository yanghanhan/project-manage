import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import MenuManage from "../pages/MenuManage";
import About from './About';
import App from './App';
import Main from './Main';

export default function Home() {
  return (
    <Router>
      <div style={{display: 'flex', justifyContent: 'start'}}>
        <nav style={{marginRight: 20, borderRight: '2px solid black', width: 200, height: 700, paddingRight: 20}}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/5">About</Link>
            </li>
            <li>
              <Link to="/main">Main</Link>
            </li>
            <li>
              <Link to="/menuManage">菜单配置</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about/:id" element={<About />} />
          <Route path="/main/*" element={<Main />} />
          <Route path="/" element={<App />}/>
          <Route path="/menuManage" element={<MenuManage />}/>
        </Routes>
      </div>
    </Router>
  );
}
