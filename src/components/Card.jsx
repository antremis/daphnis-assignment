import Image from "../assets/tablet_img.jpg";
import "./Card.css";

const Card = ({item}) => {
    return(
        <div className = "item-card-wrapper">
            <div className = "item-card">
                <img src = {Image} />
                <h1 className = "item-name">{item.name}</h1>
                <p><span className = "item-price">{item.price}</span><span className="slash"> / </span><span className = "price-info">stripe</span></p>
                <p className = "item-manufacturer">{item.manufacturer}</p>
                <p className = "item-location">{item.location}</p>
                <div className = "contact-supplier">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <p>Contact Supplier</p>
                </div>
            </div>
        </div>
    )
}

export default Card;