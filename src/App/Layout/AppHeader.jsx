import React from 'react';

import './styles/header.css';
import { Link } from 'react-router-dom';
import { Logo } from '../Components/Logo/Logo';

export function AppHeader() {
  return (
    <header>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
    </header>
  );
}
