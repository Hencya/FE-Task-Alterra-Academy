import React from "react";

export default function form() {
  return (
    <div>
      <section className="form-content">
        <div className="row row-cols-sm-1 row-cols-sm-2 h-100">
          <div
            className="col-sm-5 col-md-5 p-0 position-relative"
            id="side-image"
          >
            <div className="w-100 h-100" id="overlay"></div>
            <img
              src="assets/img/logo-ALTA-v2.png"
              alt="logo"
              id="side-image-logo"
              className="
              opacity-50
              position-absolute
              top-50
              start-50
              translate-middle
            "
            />
          </div>
          <div className="col-sm-7 col-md-7" id="form">
            <h3>Contact Us</h3>
            <form
              className="needs-validation"
              action="/review_message.html"
              novalidate
            >
              <label className="form-label" for="fullname">
                Full Name <span className="text-danger">*</span>
              </label>
              <input
                className="form-control mb-3"
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Your Full Name Here..."
                required
              />
              <div className="invalid-feedback">
                Please fill Full Name field.
              </div>
              <div className="valid-feedback">Looks good!</div>
              <label className="form-label" for="email">
                Email Address <span className="text-danger">*</span>
              </label>
              <input
                className="form-control mb-3"
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                required
              />
              <div className="invalid-feedback">
                Please Fill Email Address field.
              </div>
              <div className="valid-feedback">Looks good!</div>
              <label className="form-label" for="phone">
                Phone Number <span className="text-danger">*</span>
              </label>
              <input
                className="form-control mb-3"
                type="text"
                name="phone"
                id="phone"
                placeholder="08573890xxxxx"
                required
              />
              <div className="invalid-feedback">
                Please Fill Phone number field.
              </div>
              <div className="valid-feedback">Looks good!</div>
              <label className="form-label" for="nationality">
                Nationality
              </label>
              <select
                className="form-select mb-3"
                name="nationality"
                id="nationality"
                required
              >
                <option value="">Selected</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Japan">Japan</option>
                <option value="Singapore">Singapore</option>
              </select>
              <div className="invalid-feedback">
                Please select your nationality.
              </div>
              <label className="form-label" for="message">
                Message
              </label>
              <textarea
                className="form-control mb-3"
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Your Message Here..."
                required
              ></textarea>
              <div className="invalid-feedback">Please Fill Message field.</div>
              <button
                type="submit"
                className="btn text-white px-4 mt-2"
                id="custom-btn"
                onclick="saveContact()"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
