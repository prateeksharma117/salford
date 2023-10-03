import { HiLocationMarker } from "react-icons/hi";

const SearchBar = ({filter,setFilter}) => {
  return (
    <div className="flexCenter search_bar">
              <HiLocationMarker color="var(--yellow)" size={20} />
              <input
              placeholder="Search by title/city/country..."
              type="text" 
              value={filter} 
              onChange={(e)=>setFilter(e.target.value)}
              style={{fontSize:"0.9rem"}}
              />
              <button className="button">Search</button>
            </div>
  )
}

export default SearchBar
