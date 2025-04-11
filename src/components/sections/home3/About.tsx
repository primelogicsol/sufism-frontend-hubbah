import CounterUp from "../../../components/elements/CounterUp";
import VideoPopup from "../../../components/elements/VideoPopup";
import Link from "next/link";

export default function About() {
  return (
    <>
      {/*About One Start*/}
      <section className="about-one">
        <div
          className="about-one__bg float-bob-y"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/about-one-bg-img-1.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="about-one__left">
                <div
                  className="about-one__img wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <img src="assets/images/resources/about-1-1.jpg" alt="" />
                  <div className="about-one__our-goal">
                    <p className="about-one__our-goal-sub-title">Our goal :</p>
                    <h3 className="about-one__our-goal-title">
                    “Grow your mind. Fuel your soul.
                    Let the light find you.”
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-one__right">
                <div className="section-title text-left">
                  <span className="section-title__tagline">
                  The Next Generation Sufi Way Forward
                  </span>
                  <h2 className="font-bold mt-3 text-3xl text-fixnix-darkpurple">
                  Welcome to the Sufi Science Centre</h2>
                  <h2 className="font-semibold text-2xl text-fixnix-darkpurple"> A Harmony of Knowledge and Inner Peace</h2> 
                 
                  
                </div>
                <p className="about-one__right-text-1">
                Step into a world where Kashmiri Sufi wisdom meets the pulse of modern discovery.
                      Here, your mind expands, your soul deepens, and your journey begins.

                      Whether you're seeking truth, exploring purpose, or simply curious,
                      this is your space to grow, reflect, and awaken.

                      We blend timeless mysticism, conscious learning, and sacred science to inspire a new way forward, one that’s rooted in unity, upliftment, and inner transformation.
                </p>
                <ul className="about-one__points list-unstyled">
                  <li>
                    <div className="about-one__points-single">
                      <div className="about-one__points-icon">
                        <span className="icon-repair"></span>
                      </div>
                      <div className="about-one__points-text">
                        <h3 className="about-one__points-title">
                          <Link href="/beginyourjourney">Begin Your Journey</Link>
                        </h3>
                        <p className="about-one__points-subtitle">
                        Start exploring your inner and outer path
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="about-one__points-single">
                      <div className="about-one__points-icon">
                        <span className="icon-phone"></span>
                      </div>
                      <div className="about-one__points-text">
                        <h3 className="about-one__points-title">
                          <Link href="/">Explore Sacred Knowledge</Link>
                        </h3>
                        <p className="about-one__points-subtitle">
                        Dive into teachings, science & soulwork
                        </p>
                      </div>
                    </div>
                    
                  </li>
                  <li>
                    <div className="about-one__points-single">
                      <div className="about-one__points-icon">
                        <span className="icon-phone"></span>
                      </div>
                      <div className="about-one__points-text">
                        <h3 className="about-one__points-title">
                          <Link href="/"> Join the Movement</Link>
                        </h3>
                        <p className="about-one__points-subtitle">
                        Be part of a conscious, global community
                        </p>
                      </div>
                    </div>
                    
                  </li>

                </ul>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About One End*/}
    </>
  );
}
