import "./featured.css";

const Featured = () => {
    return(
        <div className="featured">
            <div className="featuredItem">
                <img src="https://cf2.bstatic.com/xdata/images/city/600x600/684880.jpg?k=e39b50ba8be4c6c6c413c963af6e0d452dbe0decaf72e13f9f798e65de549107&o=" alt="" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Rishikesh</h1>
                    <h2>123 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cf2.bstatic.com/xdata/images/city/600x600/684611.jpg?k=021e8bea3c47bb30693d0a24cb623899876546a60e8472d026fab5474fd75ed7&o=" alt="" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Dehradun</h1>
                    <h2>123 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cf2.bstatic.com/xdata/images/city/600x600/684732.jpg?k=54bd15fa6a54076487fcca512f688f679d25b711afc6e4321904c1528dc5f731&o=" alt="" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Mussoorie</h1>
                    <h2>123 Properties</h2>
                </div>
            </div>
        </div>
    )
};

export default Featured