import "./PropertyCard.scss";
import { truncate } from "lodash";
import {useNavigate} from "react-router-dom"
import Heart from "../Heart/Heart";

const PropertyCard = ({ card }) => {

  const navigate= useNavigate()

  return (
    <>
      <div>
        <div className="flexColStart r_card"
        onClick={()=>navigate(`../properties/${card.id}`)}
        >
          <Heart id={card?.id}/>
          <img src={card.image} alt="home" />
          <span className="secondaryText r_price">
            <span style={{ color: "orange" }}>$</span>
            <span>{card.price}</span>
          </span>

          <span className="primaryText card_name">
            {truncate(card.title, { length: 15 })}
          </span>
          <span className="secondaryText card_detail">
            {truncate(card.description, { length: 80 })}
          </span>
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
