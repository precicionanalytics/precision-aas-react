import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-light footer mt-4 py-4 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-3">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Our Office</h4>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>6505 Roundrock trail, Plano, Texas USA</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+1 469 674 5918</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>precisionanalyticsas@gmail.com</p>
              <div className="d-flex pt-2">
                <a className="btn btn-square btn-outline-light rounded-circle me-2" href="https://www.linkedin.com/in/hina-tausif-bb51b22b6/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="btn btn-square btn-outline-light rounded-circle me-2" href="https://www.facebook.com/profile.php?id=61584819943025" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-square btn-outline-light rounded-circle me-2" href="https://x.com/PAASLLC" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-x-twitter"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Services</h4>
              <a className="btn btn-link" href="">Program Evaluation</a>
              <a className="btn btn-link" href="">Strategic Planning</a>
              <a className="btn btn-link" href="">Operational Optimization</a>
              <a className="btn btn-link" href="">Data Analysis & Reporting</a>
              <a className="btn btn-link" href="">Capacity Building</a>
              <a className="btn btn-link" href="">Market Research</a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Quick Links</h4>
              <Link className="btn btn-link" to="/about">About Us</Link>
              <Link className="btn btn-link" to="/contact">Contact Us</Link>
              <Link className="btn btn-link" to="/services">Our Services</Link>
              <Link className="btn btn-link" to="/features">Our Features</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="#">Precision Analytics & Strategy</a>, All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
            </div>
          </div>
        </div>
      </div>

      <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  );
}

export default Footer;
