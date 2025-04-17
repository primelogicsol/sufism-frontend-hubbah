"use client";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import Link from "next/link";
export default function Welcome() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/*Welcome One Start*/}
      <section className="welcome-one">
        <div
          className="welcome-one__bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/welcome-one-bg.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="welcome-one__left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">Welcome To</span>
                  <h2 className="section-title__title">Your Journey</h2>
                </div>
                <p className="welcome-one__text-1">
                Step into the cosmic path of the New Generation Sufi, from the sacred depths of the Himalayan peaks rises the Sufi Science Centre Kashmir, where mystic intuition meets scientific inquiry.
                </p>
                <p className="welcome-one__text-2">
                This journey unfolds from inner awakening to expansive consciousness through Core Learning Paths, Growth Modules, and Quantum Leadership. Explore sacred geometries of thought, submit your abstract revelations, and access a library of metaphysical tools. This is not just a path, it’s your transformation into a conscious architect of divine reality and spiritual intelligence.
                </p>
                <div className="welcome-one__btn-box">
                  <Link href="/corelearningpaths" className="welcome-one__btn-2 thm-btn">
                    Core Learning Paths
                  </Link>
                  <Link href="/leadership&teaching" className="welcome-one__btn-2 thm-btn">
                    Leadership & Teaching
                  </Link>
                </div>
                <div className="welcome-one__btn-box">
                  <Link href="/submissionportal" className="welcome-one__btn-2 thm-btn">
                    Abstract Submission
                  </Link>
                  <Link href="/resources&support" className="welcome-one__btn-2 thm-btn">
                    Resources & Support
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="welcome-one__right">
                <div
                  className="welcome-one__right-img wow fadeInRight"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <img
                    src="assets/images/resources/welcome-one-img-1.jpg"
                    alt=""
                  />
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Welcome One End*/}
      
    </>
  );
}
