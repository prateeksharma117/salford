import "./Contact.scss";
import { MdCall } from "react-icons/md";
import { BsFillChatLeftTextFill, BsFillCameraVideoFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <section className="contact_wrapper">
        <div className="paddings innerWidth flexCenter c_container">
          {/* left side */}
          <div className="flexColStart c_left">
            <span className="orangeText">Our Contacts</span>
            <span className="primaryText">Easy to contact us</span>
            <span className="secondaryText">
              We always ready to help by providing the best service to you
              <br /> we believe a good place to live can make your life better.
            </span>

            <div className="flexColStart contactModes">
              {/* first row */}
              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Call</span>
                      <span className="secondaryText">021 123 145 12</span>
                    </div>
                  </div>
                  <button className="flexCenter button">Call now</button>
                </div>

                {/* second row */}
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <IoLogoWhatsapp size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Whatsapp Chat</span>
                      <span className="secondaryText">021 123 145 12</span>
                    </div>
                  </div>
                  <button className="flexCenter button">Chat now</button>
                </div>
                </div>

                <div className="flexStart row">
                  {/* three row */}
                  <div className="flexColCenter mode">
                    <div className="flexStart">
                      <div className="flexCenter icon">
                        <BsFillCameraVideoFill size={25} />
                      </div>
                      <div className="flexColStart detail">
                        <span className="primaryText">Video Call</span>
                        <span className="secondaryText">021 123 145 12</span>
                      </div>
                    </div>
                    <button className="flexCenter button">
                      Video Call Now
                    </button>
                  </div>

                  {/* four row */}
                  <div className="flexColCenter mode">
                    <div className="flexStart">
                      <div className="flexCenter icon">
                        <BsFillChatLeftTextFill size={25} />
                      </div>
                      <div className="flexColStart detail">
                        <span className="primaryText">Text Message</span>
                        <span className="secondaryText">021 123 145 12</span>
                      </div>
                    </div>
                    <button className="flexCenter button">Message Now</button>
                  </div>
                </div>
            </div>
          </div>

          {/* right side */}
          <div className="flexCenter c_right">
            <div className="image_container">
              <img
                src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
