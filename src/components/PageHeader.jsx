function PageHeader({ title }) {
  return (
    <div className="container-fluid page-header mb-4 wow fadeIn" data-wow-delay="0.1s">
      <div className="container">
        <h1 className="display-3 mb-4 animated slideInDown">{title}</h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li className="breadcrumb-item active" aria-current="page">{title}</li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default PageHeader;
