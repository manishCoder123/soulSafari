import "./searchItem.css";

const SearchItem = () =>{
    return (
        <div className="searchItem">
            <img src="https://cf2.bstatic.com/xdata/images/hotel/square240/531413832.webp?k=6c8a32d45e02cf1f833baf89861338595b22f7a1d86db29c96f033255f07370c&o=" alt="" className="siImg"/>
            <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartment</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubTitle">Studio Apartment woth Air conditioning</span>
                <span className="siFeatures">
                    Entire studio . 1 Bathroom . 21m<sup>2</sup> 1 full bed
                </span>
                <span className="siCancelOp">Free Cancellation</span>
                <span className="siCancelOpSubtitle">You can cancel later, os lock in this great price today!</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailText">
                    <span className="siPrice">&#8377;999</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    )
};

export default SearchItem;