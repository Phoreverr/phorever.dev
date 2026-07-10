import React from 'react';
import { Link } from 'react-router-dom';
import { resume } from '@/constants/resume';
import myPic from '../../assets/imgs/my-pic.jpg';
import arrow from '../../assets/svgs/arrow.svg';
import './base.scss';

export default function Base() {
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
              I'm a <span className="highlight">Frontend Engineer</span>: I build responsive, performant UIs and
              care about product polish and maintainable code. On the side I'm a{' '}
              <span className="highlight">Cloud Engineer</span>. GCP is my main platform for secure deployments,
              networking, and infrastructure that keeps apps reliable in production.
            </span>
          </p>
        </div>

        <div className="certifications" aria-labelledby="certifications-heading">
          <h2 id="certifications-heading" className="certifications_heading">
            Certifications
          </h2>
          <ul className="certifications_list">
            {resume.certifications.map((cert) => (
              <li key={cert.title} className="certifications_item">
                <span className="certifications_name">{cert.title}</span>
                <span className="certifications_date">{cert.date}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="go_button_container">
          <Link to="/projects">
            <button type="button" className="explore">
              Explore ➜
            </button>
          </Link>
          {/* <a className="base_cv_link" href={portfolioCvUrl} target="_blank" rel="noopener noreferrer">
            View CV ↗
          </a> */}
        </div>
      </div>

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
