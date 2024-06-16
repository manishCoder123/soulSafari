import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import "./hotel.css";
import { useState } from "react";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons/faCircleArrowRight";

const Hotel = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/499850530.jpg?k=18448753baf63d5c4734155016cbe84149700d8818870b273340e265c655729a&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/499082283.jpg?k=e7464cac1fae79ac069c372794f8c196cfe5199b8199cac036c42a1d61f7bc7f&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/499850686.jpg?k=227a5eac0867290353a4ea61e5a146c019d2d1e5be4575dc76957faadf673c4f&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/499850522.jpg?k=3d178de09e2029c4b0e7fd72d55cca08b90c631cbe50d5beb43f9ca1fd79ff8c&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/499850525.jpg?k=d9ff783c5dd924d9abbe2d432bf14a1e40e1199a5dd8864da447288be54e4869&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/499082390.jpg?k=2d9cdd21715349dc1f6fa5eb59d7d8ecbc1addcfbf12ba468e4f768f421f9795&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/488048395.jpg?k=41586865bd8daf289dadc9e696d27987fdf7426198a22c81d2ca6936aef47c61&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/499052565.jpg?k=2dd40adaf103e7cc9c9ff7c02d36c37beae2d7ddd9097eb7a2fa06cb47faccaa&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/499057048.jpg?k=21110d8cca22374f64d3cf8a5a39b4062e343a91a65f2c24cb11f04c6bab3e27&o=&hp=1"
        },
    ];

    const handleOpen = (i) => {
        setSlideIndex(i);
        setOpen(true);
    };

    const handleMove = (direction) => {
        let newSlideIndex;
        if (direction === "l") {
            newSlideIndex = slideIndex === 0 ? 8 : slideIndex - 1
        } else {
            newSlideIndex = slideIndex === 8 ? 0 : slideIndex + 1
        }
        setSlideIndex(newSlideIndex)
    };

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
                    <div className="sliderWrapper">
                        <img src={photos[slideIndex].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">FabExpress 180 Degree Resortl</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Mussoorie-Chamba Road</span>
                    </div>
                    <span className="hotelDistance">Excellent location -  500m from center</span>
                    <span className="hotelPriceHighlight">
                        Book a stay over &#8377;1099 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo, i) => (
                            <div className="hotelWrapperImg">
                                <img src={photo.src} onClick={() => handleOpen(i)} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of mussoorie</h1>
                            <p className="hotelDesc">
                                ou're eligible for a Genius discount at Shalom Backpackers Mussoorie! To save at this property, all you have to do is sign in.
                                Featuring free WiFi, Shalom Backpackers Mussoorie offers accommodation in Mussoorie, 1.4 km from Gun Hill Point, Mussorie and 700 metres from Camel's Back Road. Kempty Falls is 16 km away and Dehradun Clock Tower is 25 km from the hostel.

                                Rooms are complete with a private bathroom fitted with a shower, while some rooms at the hostel also boast a seating area.

                                Popular points of interest near Shalom Backpackers Mussoorie include Mussoorie Mall Road, Landour Clock Tower and Mussoorie Library. The nearest airport is Dehradun Airport, 46 km from the accommodation.

                                Couples particularly like the location — they rated it 9.1 for a two-person trip.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real heart of mussoorie, this property has an excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>&#8377;3999</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
};

export default Hotel;