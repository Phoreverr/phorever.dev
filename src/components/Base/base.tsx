import React from 'react';
import { Link } from 'react-router-dom';
import { resume } from '@/constants/resume';
import arrow from '../../assets/svgs/arrow.svg';
import './base.scss';

export default function Base() {
  return (
    <div className="base_container">
      <div className="hero">
        <div className="intro_box">
          <h1>
            Hi there, I'm <br /> Forever.
          </h1>
        </div>

        <div className="description">
          <p className="description_lead">
            <span>
              I'm a <span className="highlight">Senior Frontend Engineer</span> who turns complex products into fast,
              dependable interfaces.
            </span>
          </p>
          <p className="description_body">
            <span>
              Over five years with <span className="highlight">React, Next.js, and TypeScript</span>, I've shipped
              customer platforms, data-heavy dashboards, and published NPM packages. I own{' '}
              <span className="highlight">frontend architecture</span>, review the code that shapes it, and build the
              tools that help teams ship faster.
            </span>
          </p>
          <p className="description_body">
            <span>
              I also hold <span className="highlight">four Google Cloud certifications</span>, so I think beyond the
              browser: how the UI is served, scaled, and kept fast in production.
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
        </div>
      </div>

      <div className="footer">
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
