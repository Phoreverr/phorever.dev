import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import 'antd/dist/reset.css';
import './App.scss';
import logo from './assets/imgs/logo128.png';
import Base from './components/Base/base';
import Mobile from './components/Base/mobile';
import Error from './components/Error/error404';
import Projects from './components/Projects/projects';
import Header from './components/Utils/Header/header';

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  return (
    <div className="App">
      <Analytics />
      {isLoading ? (
        <div className="flex justify-center align-middle !h-full !w-full">
          {/* <img className=" w-20 loader" src={logo} alt="loader" /> */}
        </div>
      ) : (
        <BrowserRouter>
          <div className="mobile_container">
            <Header />
            <div>
              <Routes>
                <Route path="/" element={<Mobile />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Navigate to="/projects" replace />} />
                {/* <Route path="/contact" element={<Contact menu={menu} activeMenu={activeMenu} />} /> */}
                <Route element={<Error />} />
              </Routes>
            </div>
            <div className="social_buttons">
              <a href="https://github.com/Phoreverr" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/phorever/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="app-container">
            <div className="m-fixed">
              <Base />
            </div>
            <div className="main">
              <div className="pages_container">
                <Routes>
                  <Route path="/" element={<Projects />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/resume" element={<Navigate to="/projects" replace />} />
                  {/* <Route path="/contact" element={<Contact menu={menu} activeMenu={activeMenu} />} /> */}
                  <Route element={<Error />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
