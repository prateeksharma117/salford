import {useContext, useState} from "react";
import { PropertyCard, SearchBar } from "../../component";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import "react-multi-carousel/lib/styles.css";
import "../Properties/Properties.scss"
import UserDetailContext from "../../context/UserDetailContext";

const Favorites = () => {
  const { data, isError, isLoading } = useProperties();
  const [filter, setFilter] = useState('')
  const {userDetail:{favorites}}=useContext(UserDetailContext)

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

  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties_container">
        <SearchBar 
        filter={filter}
        setFilter={setFilter}
        />

        <div className="paddings flexCenter properties">
          {

          data?.filter((property)=>favorites?.includes(property.id))
          .filter((property)=>property.title.toLowerCase().includes(filter.toLowerCase())||
          property.city.toLowerCase().includes(filter.toLowerCase())||
          property.country.toLowerCase().includes(filter.toLowerCase())
          )
          .map((card, i) => (
            <PropertyCard card={card} key={i} />
          ))  
          
          
          }
        </div>
      </div>  
    </div>
  );
};

export default Favorites;
