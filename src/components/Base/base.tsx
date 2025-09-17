import React from 'react';
import { Link } from 'react-router-dom';
import myPic from '../../assets/imgs/my-pic.jpg';
import arrow from '../../assets/svgs/arrow.svg';
import navLine from '../../assets/svgs/menu-line.svg';
import './base.scss';

export default function Base({ menu }: any) {
  return (
    <div className="base_container">
      <div className="hero">
        <div className="intro_box">
          <h1>
            Hello! I'm <br /> Forever Oluwayomi.
          </h1>
          <div className="my-pic">
            <img className="w-48 h-48 rounded-full" src={myPic} alt="my-avatar" />
          </div>
        </div>

        <div className="description">
          <p>
            <span>
              I'm a <span className="highlight">Software Engineer</span> and{' '}
              <span className="highlight">Cloud enthusiast </span> with passion for problem-solving, skilled in delivering performant and scalable frontend solutions with a strong focus on clean code and great user experiences
            </span>
          </p>
        </div>

        <div className="go_button_container">
          <Link to="/projects">
            <button className="explore">Explore ➜</button>
          </Link>
        </div>
      </div>

      <nav>
        <ul>
          <li className={menu[0]}>
            <small>
              00
              <Link to="/resume">
                <img src={navLine} alt="menu bullet" /> RESUME
              </Link>
            </small>
          </li>

          <li className={menu[1]}>
            <small>
              01
              <Link to="/projects">
                <img src={navLine} alt="menu bullet" /> PROJECTS
              </Link>
            </small>
          </li>
        </ul>
      </nav>

      <div className="footer">
        <img className="w-16 h-16 rounded-full" src={myPic} alt="" />
        <div className="social">
          <a href="https://github.com/Phoreverr" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Github
            <img src={arrow} alt="pointer" />
          </a>

          <a href="https://linkedin.com/in/phorever" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn <img src={arrow} alt="pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}
