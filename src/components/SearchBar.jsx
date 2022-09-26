import { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {

    const [value, setValue] = useState("Paracetamol");

    return(
        <div id = "searchbar-container">
            <label htmlFor="searchbar">
                <ion-icon name="search-outline"></ion-icon>
            </label>
            <input type="text" name="searchbar" id="searchbar" value = {value} onChange = {(e) => setValue(e.target.value)}/>
            <div id = "search">Search</div>
        </div>
    )
}

export default SearchBar;