import PageHeader from '../components/PageHeader';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';

function About() {
  return (
    <>
      <PageHeader title="About" />

      {/* About Start */}
      <div className="container-xxl py-3">
        <div className="container">
          <div className="row g-4 align-items-end mb-4">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <img className="img-fluid rounded" src="/img/help-our-ngos.jpg" alt="About" />
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">About Us</p>
              <h1 className="display-5 mb-4">Empowering Organizations Through Data, Strategy, and Community Driven Solutions</h1>
              <p className="mb-4">We deliver data-driven insights and strategic solutions to support NGOs and mission-driven organizations in strengthening impact and achieving sustainable growth. Our evidence-based approach supports informed decision-making through grant evaluation, impact assessment, operational strategies, and community-based outreach.</p>
              <div className="border rounded p-4">
                <nav>
                  <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                    <button className="nav-link fw-semi-bold active" id="nav-story-tab" data-bs-toggle="tab" data-bs-target="#nav-story" type="button" role="tab" aria-controls="nav-story" aria-selected="true">Story</button>
                    <button className="nav-link fw-semi-bold" id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission" type="button" role="tab" aria-controls="nav-mission" aria-selected="false">Mission</button>
                    <button className="nav-link fw-semi-bold" id="nav-vision-tab" data-bs-toggle="tab" data-bs-target="#nav-vision" type="button" role="tab" aria-controls="nav-vision" aria-selected="false">Vision</button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="nav-story" role="tabpanel" aria-labelledby="nav-story-tab">
                    <p>Precision Analytics & Strategy LLC was founded by Dr. Hina Tausif to empower organizations through data-driven decision-making and responsible community engagement. We combine evaluation, strategy, and community-based solutions to help organizations achieve lasting impact and sustainable growth.</p>
                  </div>
                  <div className="tab-pane fade" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                    <p>Our mission is to support organizations with data-driven insights, strategic solutions, and responsible community engagement that enable informed decision-making, sustainable growth, and lasting impact.</p>
                  </div>
                  <div className="tab-pane fade" id="nav-vision" role="tabpanel" aria-labelledby="nav-vision-tab">
                    <p>To be a trusted leader in data-driven consulting, transforming organizations through innovative strategies, informed decision-making, sustainable growth, and community focused services, ultimately creating a lasting positive impact in social work, healthcare, and nonprofit sectors.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded p-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="row g-4">
              <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                <div className="h-100">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i className="fa fa-times text-white"></i>
                    </div>
                    <div className="ps-3">
                      <h4>No Hidden Cost</h4>
                    </div>
                    <div className="border-end d-none d-lg-block"></div>
                  </div>
                  <div className="border-bottom mt-4 d-block d-lg-none"></div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                <div className="h-100">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i className="fa fa-users text-white"></i>
                    </div>
                    <div className="ps-3">
                      <h4>About our Founder & Director</h4>
                    </div>
                    <div className="border-end d-none d-lg-block"></div>
                  </div>
                  <div className="border-bottom mt-4 d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Team Start */}
      <TeamSection />
      {/* Team End */}
    </>
  );
}

export default About;
