import { useItemContext } from "../context/ItemContextProvider";
import Card from "./Card";
import "./ItemArea.css";

const ItemArea = () => {
    const {items} = useItemContext();
    return(
        <div className = "item-area">
            {items.map((item, index) =>
                <Card key = {index} item = {item} />
            )}
        </div>
    )
}

export default ItemArea;