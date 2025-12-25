function TeamSection() {
  return (
    <div className="container-xxl py-3">
      <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Our Team</p>
          <h1 className="display-5 mb-4">About our Founder and Director</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item">
              <img className="img-fluid rounded" src="/img/hina1.jpg" alt="Dr. Hina Tausif" />
              <div className="team-card">
                <h4 className="mb-0">Dr. Hina Tausif</h4>
                <div className="team-social d-flex">
                  <a className="btn btn-square rounded-circle mx-1" href="https://www.facebook.com/profile.php?id=61584819943025" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square rounded-circle mx-1" href="https://www.linkedin.com/in/hina-tausif-bb51b22b6/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="btn btn-square rounded-circle mx-1" href="https://x.com/PAASLLC" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-x-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item">
              <div className="team-text">
                <h4 className="mb-3">About Dr. Hina Tausif</h4>
                <p className="mb-0">
                  Dr. Hina Tausif is a Licensed Social Worker, Victim Advocate, and expert in macro social work, holding a Ph.D. With extensive experience in program evaluation, impact assessment, and community development, she is dedicated to driving positive social change. Her work is recognized through numerous international publications, and she has played a pivotal role in academia by teaching at various universities, mentoring future social work professionals. As the founder of Precision Analytics & Strategy LLC, Dr. Tausif leads a consulting firm committed to delivering data-driven insights and strategic solutions to nonprofits, healthcare organizations, and social service agencies. Her expertise includes conducting comprehensive program evaluations, designing evidence-based strategies, and optimizing operations to enhance organizational impact. With a deep understanding of industry challenges, she empowers organizations to make informed decisions, improve service delivery, and achieve sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
