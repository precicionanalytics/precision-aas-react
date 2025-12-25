import { useEffect } from 'react';
import ServicesSection from '../components/ServicesSection';
import FeaturesSection from '../components/FeaturesSection';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';

function Home() {
  useEffect(() => {
    // Initialize WOW.js if available
    if (window.WOW) {
      new window.WOW().init();
    }
    
    // Initialize Bootstrap carousel
    if (window.bootstrap) {
      const carousel = document.querySelector('#header-carousel');
      if (carousel) {
        new window.bootstrap.Carousel(carousel);
      }
    }
  }, []);

  return (
    <>
      {/* Carousel Start */}
      <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="/img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-8">
                      <h1 className="display-1 mb-4 animated slideInDown">Turning data into direction and strategic insight into measurable impact</h1>
                      <a href="" className="btn btn-primary py-3 px-5 animated slideInDown">Explore More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="/img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7">
                      <h1 className="display-1 mb-4 animated slideInDown">Optimize operations for sustainable growth</h1>
                      <a href="" className="btn btn-primary py-3 px-5 animated slideInDown">Explore More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="/img/carousel-3.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7">
                      <h1 className="display-1 mb-4 animated slideInDown">Community Based Advertising & Partnerships Services</h1>
                      <a href="" className="btn btn-primary py-3 px-5 animated slideInDown">Explore More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Carousel End */}

      {/* About Start */}
      <AboutSection />
      {/* About End */}

      {/* Features Start */}
      <FeaturesSection />
      {/* Features End */}

      {/* Service Start */}
      <ServicesSection />
      {/* Service End */}

      {/* Team Start */}
      <TeamSection />
      {/* Team End */}
    </>
  );
}

export default Home;
