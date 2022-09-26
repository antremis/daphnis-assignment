import "./Body.css";
import NavHistory from './NavHistory';
import ProductHeader from "./ProductHeader";
import SearchBar from "./SearchBar";
import Sidebar from './Sidebar';
import ItemArea from './ItemArea';

const Body = () => {

    return(
        <div className = "body">
            <NavHistory />
            <SearchBar />
            <ProductHeader />
            <div className = "content-area">
                <Sidebar />
                <ItemArea />
            </div>
        </div>
    )
}

export default Body;