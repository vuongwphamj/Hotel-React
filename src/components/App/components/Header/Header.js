import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Import Style
import './Header.css';

export function Header(props, context) {

  return (
    <div className='header'>
      <div className='content'>
        <h1 className='site-title'>
          <Link to="/" >Demo AR</Link>
        </h1>
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: PropTypes.object,
};

Header.propTypes = {
};

export default Header;
