import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants';
import './../styles/header.css'

const Header = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);
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
        {authToken && (
          <div className="flex">
            <div className="ml1">|</div>
            <Link to="/login" className="link" >
              submit
            </Link>
          </div>
        )}
        
      </div>
      <div>
      {authToken ? (
        <>
          <Link
            className="link"
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              navigate('/');
            }}
          >
            logout
          </Link>
          <Link to={"/davinci"} className='link'>Davinci</Link>
          <Link to={"/imagesIA"} className='link'>Imagen IA</Link>
        </>
        ) : (
          <Link
            to="/login"
            className="link"
          >
            login
          </Link>
        )}
      </div>
      </section> 
    </div>
  );
};

export default Header;