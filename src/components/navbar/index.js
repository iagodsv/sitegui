import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';


//import imagem
import logo from '../../assets/logo.png'

function navbar(){
    
   
    
    return(
        <>


<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <img src={logo} className="navbar-brand logo" href="#"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <ion-icon name="menu"></ion-icon>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/biografia">Biografia</Link></li>
          <li><Link to="/discografia">Discografia</Link></li>
          <li><Link to="/agenda">Agenda</Link></li>
          <li><Link to="/contato">Contato</Link></li>
      </ul>
    </div>
  </div>
</nav>


     {/*
        <nav>
    <div class="nav-wrapper">
      <img src={logo} className="brand-logo"/>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/biografia">Biografia</Link></li>
      <li><Link to="/discografia">Discografia</Link></li>
      <li><Link to="/agenda">Agenda</Link></li>
      <li><Link to="/contato">Contato</Link></li>
      </ul>
      </div>
      </nav>
      <ul  className="sidenav" id="mobile-demo">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/biografia">Biografia</Link></li>
        <li><Link to="/discografia">Discografia</Link></li>
        <li><Link to="/agenda">Agenda</Link></li>
        <li><Link to="/contato">Contato</Link></li>
        </ul>
     */} 
        </>
        
        ) 
    }
    
    export default navbar;