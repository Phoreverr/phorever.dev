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
            <span>Honestly? Every day is a step closer to being among the best in the world at this craft.</span>
          </p>
          <p className="description_body">
            <span>
              Five years in <span className="highlight">React, Next.js, and TypeScript</span>. I own{' '}
              <span className="highlight">frontend architecture</span>—fast systems, heavy data, enterprise polish,
              built to scale.
            </span>
          </p>
          <p className="description_body">
            <span>
              I'm also a certified <span className="highlight">Cloud Engineer</span> with three Google Cloud certs
              under my belt—connecting UI performance to infrastructure.
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
