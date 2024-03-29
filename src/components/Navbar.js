import React from 'react';

const Navbar = () => {
   
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">Notebook</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">About</a>
      </li>
      
      
     
    </ul>
    <form className="form-inline my-2 my-lg-0">
      
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
      <button className="btn btn-outline-success my-2 my-sm-0 ml-2" type="submit">Signup</button>
    </form>
  </div>
</nav>
  );
}

export default Navbar;





