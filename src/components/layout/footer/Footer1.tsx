import Link from "next/link";

export default function Footer1() {
  return (
    <>
      {/*Site Footer Start*/}
      <footer className="site-footer">
        <div
          className="site-footer-shape-1 float-bob-y"
          style={{
            backgroundImage:
              "url(assets/images/shapes/site-footer-shape-1.png)",
          }}
        ></div>
        <div className="site-footer__top">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__logo">
                    <Link href="#">
                      <img src="assets/images/resources/logo-4.png" alt="" />
                    </Link>
                  </div>
                  <div className="footer-widget__about-text-box">
                    <p className="footer-widget__about-text">
                      Connects Sufi traditions with modern science, inspiring
                      the next generation of spiritual and scientific
                      exploration.
                    </p>
                  </div>
                  <div className="footer-widget__social-box">
                    <h4 className="footer-widget__social-title">
                      Stay Connected
                    </h4>
                    <div className="site-footer__social">
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-facebook"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget__column footer-widget__links">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Quick Links</h3>
                  </div>
                  <ul className="footer-widget__Explore-list list-unstyled">
                    <li>
                      <Link href="/">Discover SSC</Link>
                    </li>
                    <li>
                      <Link href="">Your Journey</Link>
                    </li>
                    <li>
                      <Link href="">Sufi Science Explorer</Link>
                    </li>
                    <li>
                      <Link href="">Digital Academy</Link>
                    </li>
                    <li>
                      <Link href="">Sacred Gift Shop</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget__column footer-widget__links">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Our Services</h3>
                  </div>
                  <ul className="footer-widget__Explore-list list-unstyled">
                    <li>
                      <Link href="/waystogive">Donate to SSC</Link>
                    </li>
                    <li>
                      <Link href="/waystogive">Sponsor Sufi Scholar</Link>
                    </li>
                    <li>
                      <Link href="/waystogive">Preserve Sufi Art</Link>
                    </li>
                    <li>
                      <Link href="/waystogive">Sponsor Events</Link>
                    </li>
                    <li>
                      <Link href="/volunteerwithus">Outreach & Engage </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget__column footer-widget__links">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Our Services</h3>
                  </div>
                  <ul className="footer-widget__Explore-list list-unstyled">
                    <li>
                      <Link href="/volunteerwithus">Create Sacred Art</Link>
                    </li>
                    <li>
                      <Link href="/collaboration">Learning Partners</Link>
                    </li>
                    <li>
                      <Link href="/collaboration">Spiritual Retreats</Link>
                    </li>
                    <li>
                      <Link href="/collaboration">Social Initiatives</Link>
                    </li>
                    <li>
                      <Link href="/collaboration">Local Empowerment</Link>
                    </li>
                  </ul>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <div className="site-footer__bottom-inner">
              <p className="site-footer__bottom-text">
                © 2025 Copyright by{" "}
                <Link href="">The Sufi Science Centre</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/*Site Footer End*/}
    </>
  );
}
