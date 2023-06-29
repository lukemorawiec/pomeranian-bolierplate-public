import React from 'react';
import { NavLink } from 'react-router-dom';

import './categories.css';

export const Categories = () => {
  return (
    <>
      <div>
        <h1>TEST</h1>
        <p>TEKST</p>
      </div>

      <div>
        <h2>TEST2</h2>
        <p>test</p>
      </div>

      <div>
        <p>1</p>
        <p>1</p>
      </div>

      <div className="test">
        <h1>TEST</h1>
        <div>
          <p>aasadad</p>
        </div>
      </div>

      <div>
        <h3>TEST</h3>
        <p>DEscription</p>
      </div>

      <div className="exercises-categories">
        <h2>Kategorie cos tam</h2>

        <NavLink to="html-css">HTML & CSS - lista ćwiczeń</NavLink>
        <NavLink to="js">JS - lista ćwiczeń</NavLink>
        <NavLink to="react">React - lista ćwiczeń</NavLink>
        <NavLink to="web-api">Web API - lista ćwiczeń</NavLink>
        <NavLink to="async">Asynchroniczność - lista ćwiczeń</NavLink>
        <NavLink to="firebase">Firebase - lista ćwiczeń</NavLink>
      </div>
    </>
  );
};
