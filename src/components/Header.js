import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/header.css'

const Header = () => {
  return (
    <div className="header">
      <section>
      <div className="cinta">

        <Link to="/perfil" className="link">
          Perfil
        </Link>        
        <Link to="/" className="link">
          List liquors
        </Link>

        <Link
          to="/create"
          className="link"
        >
          submit
        </Link>
      </div>
      </section> 
    </div>
  );
};

export default Header;