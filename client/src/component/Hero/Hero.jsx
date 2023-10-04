import "./Hero.scss";
import heroImg from "../../assets/hero.jpg";
import { useSpring, animated } from "react-spring";
import {motion} from "framer-motion"
import SearchBar from "../SearchBar/SearchBar";

const Hero = () => {
  const NumberAnimate = ({ n }) => {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div style={{color:"var(--yellow)"}}>{number.to((n) => n.toFixed(0))}</animated.div>;
  };

  return (
    <>
      <section className="hero_wrapper">
        <div className="paddings innerWidth flexCenter hero_container">
          {/* Left side of the hero container*/}
          <div className="flexColStart hero_left">
            <div className="hero_title">
              <div className="orange_circle"/>
              <motion.h1
              initial={{y: "2rem",opacity:0}}
              animate={{y:0,opacity:1}}
              transition={{
                duration:2,
                type:"spring"
              }}
              >
                Search for more properties that suit your needs
                </motion.h1>
            </div>

            <div className="flexColStart hero_dis">
              <span className="secondaryText">
                Your gateway to dream homes: Discover, search, and secure your
                perfect property.
              </span>
              <span className="secondaryText">
                Seamless real estate transactions at your fingertips: Buy, sell,
                and rent with ease.
              </span>
            </div>

            <SearchBar/>

            <div className="flexCenter stats">

              <div className="flexColCenter stat">
                <span>
                  <NumberAnimate n={8000} />
                </span>
                <span className="secondaryText">Premium Products</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <NumberAnimate n={2000}/>
                </span>
                <span className="secondaryText">Happy Customers</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <NumberAnimate n={20} />
                </span>
                <span className="secondaryText">Award Winning</span>
              </div>
            </div>
          </div>

          {/* Right side of the hero container*/}
          <div className="flexCenter hero_right">
            <motion.div
            initial={{x:"7rem",opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{
              duration:2,
              type:"spring"
            }}
            className="image_container">
              <img src={heroImg} alt="" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
