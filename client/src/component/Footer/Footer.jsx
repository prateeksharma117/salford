import "./Footer.scss";
import "./Footer.scss";
import logo from "../../assets/salford_logo.png";

const Footer = () => {
  return (
    <>
      <section className="footer_wrapper">
        <div className="paddings innerWidth flexCenter f_container">
          <div className="flexColStart f_left">
            <img src={logo} alt="logo" width={120} />
            <span className="secondaryText">
              our vision is to make all people <br />
              the best place to live for them.
            </span>
          </div>
          <div className="flexColStart f_right">
            <span className="primaryText">Information</span>
            <span className="secondaryText">134 Jaipur, Ml 7645, India</span>

            <div className="flexCenter f_menu">
              <span>Property</span>
              <span>Services</span>
              <span>Product</span>
              <span>About Us</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
