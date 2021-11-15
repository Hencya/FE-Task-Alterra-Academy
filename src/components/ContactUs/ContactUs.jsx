import sideLogo from "../../assets/img/logo-ALTA-v2.png";
import styles from "./ContactUs.module.css";

export default function ContactUs() {
  return (
    <div
      className={`${styles.sideImage} col-sm-5 col-md-5 p-0 position-relative`}
    >
      <div className={`${styles.overlay} h-100 w-100 `} />
      <img
        className="opacity-50 position-absolute top-50 start-50 translate-middle"
        src={sideLogo}
        id="side-image-logo"
        alt="sideLogo"
      />
    </div>
  );
}
