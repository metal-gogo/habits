import React, { useEffect, useState } from 'react';

import { useAuth } from 'contexts/auth';

import { Link } from 'dependencies/router';

import IconCTA from 'components/CTAs/IconCTA';

import './TheHeader.scss';

const TheHeader = () => {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [bodyElement, setBodyElement] = useState(null);

  useEffect(() => {
    setBodyElement(document.querySelector('body'));
  }, []);

  const handleLogoutClick = async () => {
    await logout();
    window.location.reload(true);
  };

  const handleCloseMenuClick = () => {
    setIsOpen(false);
    bodyElement.classList.remove('body--is-without-scroll');
  };

  const handleOpenMenuClick = () => {
    setIsOpen(true);
    bodyElement.classList.add('body--is-without-scroll');
  };

  const navigationClass = isOpen
    ? 'the-header__navigation the-header__navigation--is-open'
    : 'the-header__navigation';

  return (
    <header className="the-header">
      <div className="the-header__logo-container">
        <div className="the-header__logo-placeholder">
          Habits
        </div>
      </div>
      <nav className={navigationClass}>
        <ul className="the-header__navigation-list">
          <li className="the-header__navigation-item">
            <Link to="/" onClick={handleCloseMenuClick} className="the-header__navigation-link">
              My Commitments
            </Link>
          </li>
          <li className="the-header__navigation-item">
            <Link to="new-commitment" onClick={handleCloseMenuClick} className="the-header__navigation-link">
              Create Commitment
            </Link>
          </li>
          <li className="the-header__navigation-item the-header__logout-container">
            <IconCTA iconName="exit" onClick={handleLogoutClick} className="the-header__logout-cta" />
          </li>
        </ul>
        <IconCTA iconName="close" onClick={handleCloseMenuClick} className="the-header__menu-close-cta" />
      </nav>
      <IconCTA iconName="menu" onClick={handleOpenMenuClick} className="the-header__menu-open-cta" />
    </header>
  );
};

export default TheHeader;
