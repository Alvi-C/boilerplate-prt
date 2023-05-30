
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
const Body = () => {
    return (
        <div className="section-container">
            <div className="section-flex">
                <SearchBar/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

export default Body;