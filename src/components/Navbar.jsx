import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
          <div className="col-lg-6 px-5 text-start">
            <small><i className="fa fa-map-marker-alt text-primary me-2"></i>Plano, Texas USA</small>
          </div>
          <div className="col-lg-6 px-5 text-end">
            <small><i className="fa fa-envelope text-primary me-2"></i>precisionanalyticsas@gmail.com</small>
            <small className="ms-4"><i className="fa fa-phone-alt text-primary me-2"></i>+1 (469)-674-5918</small>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
          <Link to="/" className="navbar-brand ms-4 ms-lg-0" style={{ width: '300px' }}>
            <img src="/img/PaasSmallLogo.png" style={{ height: '30%', width: '20%' }} alt="Logo" />
          </Link>
          <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <Link to="/" className="nav-item nav-link">Home</Link>
              <Link to="/about" className="nav-item nav-link">About</Link>
              <Link to="/services" className="nav-item nav-link">Services</Link>
              <Link to="/features" className="nav-item nav-link">Features</Link>
              <Link to="/contact" className="nav-item nav-link">Contact</Link>
            </div>
            <div className="d-none d-lg-flex ms-2">
              <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="https://www.linkedin.com/in/hina-tausif-bb51b22b6/" target="_blank" rel="noopener noreferrer">
                <small className="fab fa-linkedin-in text-primary"></small>
              </a>
              <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="https://www.facebook.com/profile.php?id=61584819943025" target="_blank" rel="noopener noreferrer">
                <small className="fab fa-facebook-f text-primary"></small>
              </a>
              <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="https://x.com/PAASLLC" target="_blank" rel="noopener noreferrer">
                <small className="fab fa-x-twitter text-primary"></small>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
