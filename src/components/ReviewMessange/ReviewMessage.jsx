import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import styles from "./ReviewMessage.module.css";

export default function ReviewMesage() {
  const form = useSelector((state) => state.form.forms);
  const navigate = useNavigate();
  return (
    <div
      className={`${styles.container} 
        container
				p-5
				card
				top-50
				position-absolute
				start-50
				translate-middle`}
    >
      <div className="row form-output">
        <div className="col-5 col-md-4">
          <p className="mb-0">
            Full Name<span className="float-end">:</span>
          </p>
        </div>
        <div className="col">
          <p className="mb-sm-0 mb-3 form-data" id="fullname">
            {form.nama}
          </p>
        </div>
      </div>
      <div className="row form-output">
        <div className="col-5 col-md-4">
          <p className="mb-0">
            Email Address<span className="float-end">:</span>
          </p>
        </div>
        <div className="col">
          <p className="mb-sm-0 mb-3 form-data" id="email">
            {form.email}
          </p>
        </div>
      </div>
      <div className="row form-output">
        <div className="col-5 col-md-4">
          <p className="mb-0">
            Phone Number<span className="float-end">:</span>
          </p>
        </div>
        <div className="col">
          <p className="mb-sm-0 mb-3 form-data" id="phone">
            {form.noHandphone}
          </p>
        </div>
      </div>
      <div className="row form-output">
        <div className="col-5 col-md-4">
          <p className="mb-0">
            Nationality<span className="float-end">:</span>
          </p>
        </div>
        <div className="col">
          <p className="mb-sm-0 mb-3 form-data" id="nationality">
            {form.nationality}
          </p>
        </div>
      </div>
      <div className="row form-output my-4">
        <div className="col my-3">
          <p className="form-data fst-italic" id="message">
            {form.message}
          </p>
        </div>
      </div>

      <div
        className="w-25 m-auto"
        style={{ border: "1px solid #ccd7eb" }}
      ></div>
      <div className="mt-3" id="thx-msg">
        <h6>Thanks for contacting us!</h6>
        <h6>We will be in touch with you shortly.</h6>
        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
          style={{ backgroundColor: "#f47522" }}
          className="btn text-white px-4 mt-2 rounded-pill"
        >
          Home
        </button>
      </div>
    </div>
  );
}
