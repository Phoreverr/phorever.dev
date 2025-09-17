import React, { Component, useEffect } from 'react';
import Helmet from '../Utils/SEO/helmet';
import { Link } from 'react-router-dom';
import Form from '../Utils/Form/form';
import './contact.scss';

interface IProp {
  menu?: string[];
  activeMenu: (arg: number) => void;
}

export default function Contact(props: IProp) {
  useEffect(() => {
    props.activeMenu(2);
  }, []);

  return (
    <div className="contact">
      <Helmet title="Contact Me" name="Contact Forever Oluwayomi" content="Reach out to Forever Oluwayomi" />
      <Form />
      <div className="go_button_container">
        <Link to="/resume">
          <button>
            <b>➜ </b> Résumé
          </button>
        </Link>
        <Link to="/">
          <button> Home ➜ </button>
        </Link>
      </div>
    </div>
  );
}
