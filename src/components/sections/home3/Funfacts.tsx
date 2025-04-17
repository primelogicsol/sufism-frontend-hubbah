import CounterUp from "../../../components/elements/CounterUp";

export default function Funfacts() {
  return (
    <>
      {/*Counter One Start*/}
      <section className="counter-one">
        <div
          className="counter-one__bg jarallax"
          
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2 className="font-bold text-5xl text-white text-center ">The Global Science of Awakening: </h2>
              <h4 className="font-medium text-2xl text-white text-center pt-1 pb-6">Tracking Conscious Expansion on the Sufi Path</h4>
              <ul className="counter-one__list list-unstyled">
                <li className="counter-one__single">
                  <CounterUp end={3207} />
                  <span className="counter-one__plus">+</span>
                  <p className="counter-one__text">Active Seekers</p>
                </li>
                <li className="counter-one__single">
                  <CounterUp end={27} />
                  <span className="counter-one__plus">+</span>
                  <p className="counter-one__text">Country Presence</p>
                </li>
                <li className="counter-one__single">
                  <CounterUp end={128} />
                  <span className="counter-one__plus">+</span>
                  <p className="counter-one__text">Lessons Delivered</p>
                </li>
                <li className="counter-one__single">
                  <CounterUp end={54000} />
                  <span className="counter-one__plus">+</span>
                  <p className="counter-one__text">Hours of Engagement</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*Counter One End*/}
    </>
  );
}
