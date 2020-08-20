import React from 'react';

import { useAuth } from 'contexts/auth';

import Link from 'router/Link';

import IconCTA from 'components/CTAs/IconCTA';

import './TheHeader.scss';

const TheHeader = () => {
  const { logout } = useAuth();

  const handleLogoutClick = async () => {
    await logout();
    window.location.reload(true);
  };

  return (
    <header className="the-header">
      <div className="the-header__logo-container">
        <h2 className="the-header__logo-placeholder">
          Habits
        </h2>
      </div>
      <nav className="the-header__navigation">
        <ul className="the-header__navigation-list">
          <li className="the-header__navigation-item">
            <Link to="/" className="the-header__navigation-link">
              My Commitments
            </Link>
          </li>
          <li className="the-header__navigation-item">
            <Link to="new-commitment" className="the-header__navigation-link">
              Create Commitment
            </Link>
          </li>
          <li className="the-header__navigation-item">
            <IconCTA iconName="exit" onClick={handleLogoutClick} className="the-header__logout-cta" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TheHeader;
