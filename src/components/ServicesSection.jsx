function ServicesSection() {
  return (
    <div className="container-xxl service py-3">
      <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Our Services</p>
          <h1 className="display-5 mb-4">Services Offered</h1>
        </div>
        <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-lg-4">
            <div className="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
              <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4 active" data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i>Program Evaluation</h5>
              </button>
              <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i>Strategic Planning</h5>
              </button>
              <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i>Operational Optimization</h5>
              </button>
              <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i>Data Analysis & Reporting</h5>
              </button>
              <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-0" data-bs-toggle="pill" data-bs-target="#tab-pane-5" type="button">
                <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i>Community Outreach Services</h5>
              </button>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tab-content w-100">
              <div className="tab-pane fade show active" id="tab-pane-1">
                <div className="row g-4">
                  <div className="col-md-6" style={{ minHeight: '350px' }}>
                    <div className="position-relative h-100">
                      <img className="position-absolute rounded w-100 h-100" src="/img/service-1.jpg" style={{ objectFit: 'cover' }} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="mb-4">Experienced in Program Evaluation</h3>
                    <p className="mb-4">At Precision Analytics & Strategy LLC, we help Assessing program effectiveness to improve outcomes and impact.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Assessing the effectiveness of current programs.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Identifying areas for improvement and growth.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Providing actionable recommendations.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Measuring program outcomes.</p>
                    <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-pane-2">
                <div className="row g-4">
                  <div className="col-md-6" style={{ minHeight: '350px' }}>
                    <div className="position-relative h-100">
                      <img className="position-absolute rounded w-100 h-100" src="/img/service-2.jpg" style={{ objectFit: 'cover' }} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="mb-4">Excellence In Strategic Planning</h3>
                    <p className="mb-4">Developing actionable plans to achieve long-term organizational goals.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Develop long-term strategic goals.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Aligning programs and services with vision and mission.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Crafting actionable plans to ensure sustainable growth and success.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Offering guidance on resource allocation.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Prioritization of initiatives.</p>
                    <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-pane-3">
                <div className="row g-4">
                  <div className="col-md-6" style={{ minHeight: '350px' }}>
                    <div className="position-relative h-100">
                      <img className="position-absolute rounded w-100 h-100" src="/img/service-3.jpg" style={{ objectFit: 'cover' }} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="mb-4">Operational Optimization</h3>
                    <p className="mb-4">Streamlining processes to enhance efficiency and reduce costs.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Streamlining workflows and processes</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Identifying cost-saving opportunities</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Utilizing technology to automate and simplify key processes.</p>
                    <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-pane-4">
                <div className="row g-4">
                  <div className="col-md-6" style={{ minHeight: '350px' }}>
                    <div className="position-relative h-100">
                      <img className="position-absolute rounded w-100 h-100" src="/img/service-4.jpg" style={{ objectFit: 'cover' }} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="mb-4">Data Analysis & Reporting</h3>
                    <p className="mb-4">Providing insightful data analysis to inform decision-making.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Collecting and analyzing data to uncover actionable insights.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Creating comprehensive reports to support decision-making.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Visualizing data trends to guide strategic planning.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Ensuring accurate and timely reporting.</p>
                    <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-pane-5">
                <div className="row g-4">
                  <div className="col-md-6" style={{ minHeight: '350px' }}>
                    <div className="position-relative h-100">
                      <img className="position-absolute rounded w-100 h-100" src="/img/service-5.jpg" style={{ objectFit: 'cover' }} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="mb-4">Community Outreach Services</h3>
                    <p className="mb-4">We help organizations connect authentically with diverse communities through targeted outreach, strategic messaging, and trusted community platforms. Our approach builds awareness, strengthens engagement, and drives meaningful participation for programs, events, and services.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>High Impact Community Advertising.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Premium Sponsored & Featured Placements.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Event & Brand Awareness Promotions.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Campaign Insights & Optimization.</p>
                    <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
