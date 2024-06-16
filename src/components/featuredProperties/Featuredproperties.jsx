import { faTemperatureDown } from "@fortawesome/free-solid-svg-icons";
import "./featuredProperties.css";

const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img src="https://cf2.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" className="fpImg" />
                <span className="fpName">Aparthotel Stare Miasto</span>
                <span className="fpCity">Rishikesh</span>
                <span className="fpPrice">Starting from &#8377;900</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf2.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=" alt="" className="fpImg" />
                <span className="fpName">7Seasons Apartments Budapest</span>
                <span className="fpCity">Haridwar</span>
                <span className="fpPrice">Starting from &#8377;1099</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf2.bstatic.com/xdata/images/hotel/square600/85257658.webp?k=e3f110e4ed0978310a028465a3bdd609149ecbded601555c881106255556b52e&o=" alt="" className="fpImg" />
                <span className="fpName">Leman Locke</span>
                <span className="fpCity">Dehradun</span>
                <span className="fpPrice">Starting from &#8377;999</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf2.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o=" alt="" className="fpImg" />
                <span className="fpName">Flora Chiado Apartments</span>
                <span className="fpCity">Mussoorie</span>
                <span className="fpPrice">Starting from &#8377;1599</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
};

export default FeaturedProperties;