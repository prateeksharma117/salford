import "./Residencies.scss";
import { AiFillHeart } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PuffLoader } from "react-spinners";
import useProperties from "../../hooks/useProperties";
import { truncate } from "lodash";
import numeral from "numeral";

const Residencies = () => {

  const { data, isError, isLoading } = useProperties();

  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4866ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4  ,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section className="Residency_wrapper">
        <div className="paddings innerWidth r_container">
          <div className="r-head flexColStart">
            <span className="orangeText">Best Choices</span>
            <span className="primaryText">Popular Residencies</span>
          </div>

          <Carousel removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive}>
            {data.slice(0,10).map((card, i) => {
              return (
                <div className="flexColStart r_card" key={i}>
                  <img src={card.image} alt="home" />

                  <span className="secondaryText r_price">
                    <span style={{ color: "orange" }}>{numeral(card?.price).format("($ 0.00 a)")}</span>
                  </span>

                  <span className="primaryText">{truncate(card.title, { length: 15 })}</span>
                  <span className="secondaryText">{truncate(card.description, { length: 80 })}</span>
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Residencies;
