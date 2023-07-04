import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles/header.css';
import { Link } from 'react-router-dom';
import { Logo } from '../Components/Logo/Logo';

export function AppHeader() {
  const extras = useSelector((state) => {
    return state.counter.extras;
  });

  return (
    <header>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>

      {extras.isExtraButtonClicked && <h2>kliknięto extra guzik</h2>}
    </header>
  );
}
