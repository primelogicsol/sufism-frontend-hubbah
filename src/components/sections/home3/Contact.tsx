export default function Contact() {
  return (
    <>
      {/* Contact One Start */}
      <section className="relative py-16 bg-cover bg-center bg-no-repeat bg-gray-100" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="uppercase text-fixnix-lightpurple tracking-wider mb-2 block">Contact Us</span>
            <h2 className="text-4xl font-bold text-fixnix-lightpurple mb-4">Let Us Know Or Call Us At</h2>
            <p className="text-fixnix-lightpurple">
            Reach out in remembrance and sincerity , every message is a thread in the divine tapestry.<br/>
            Whether in yearning, curiosity, or service, your voice is part of the sacred unfolding.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <form className="contact-one__form contact-form-validated">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-gray-700">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="h-[55px] w-full border-2 border-fixnix-lightpurple bg-transparent px-7 outline-none text-sm text-gray-700 font-normal rounded"
              />
            </div>

                <div className="text-gray-700">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    className="h-[55px] w-full border-2 border-fixnix-lightpurple bg-transparent px-7 outline-none text-sm text-gray-700 font-normal rounded"
                  />
                </div>
                <div >
                  <input
                    type="text"
                    placeholder="Subject"
                    name="Subject"
                    className="h-[55px] w-full border-2 border-fixnix-lightpurple bg-transparent px-7 outline-none text-sm text-gray-700 font-normal rounded"
                  />
                </div>
              </div>

              <div className="contact-form__input-box mb-6">
                <textarea
                  name="message"
                  placeholder="Comment"
                  className="h-[205px] w-full border-2 border-fixnix-lightpurple bg-transparent px-7 py-1 outline-none text-sm text-gray-700 font-normal rounded resize-none"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="contact-form__btn bg-fixnix-lightpurple hover:bg-fixnix-darkpurple text-white font-semibold px-6 py-3 rounded hover:text-fixnix-lightpurple transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Contact One End */}
    </>
  );
}
