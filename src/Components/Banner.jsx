import './Banner.css';
import Leaffood from "../Images/leaffood.png";

function Banner() {
  return (
    <div className="banner-page">
        <div className="banner-div1">
            <div className="ban-in-div1">
                <h3>Look at your far meals</h3>
                <p>within a few clicks, find meals that are accessible near you</p>
            </div>

            <div className="ban-in-div2">
                <div className="ban-in-div2-div1">
                    <button className="ban-delivery-btn1"><i className="fa-solid fa-motorcycle"
                            style={{color: '#F17228'}}></i>Delivery</button>
                    <button className="ban-delivery-btn2"><i className="fa-solid fa-bag-shopping"
                            style={{color: '#757575'}}></i>Pickup</button>
                </div>
                <div className="ban-in-div2-div2">
                    <i className="fa-solid fa-location-dot" style={{color: '#FF7474'}}></i>
                    <input type="text" placeholder="Enter Your Address" id="input-address"/>
                    <button><i className="fa-solid fa-magnifying-glass"></i>Find Food</button>
                </div>
            </div>
        </div>
        <div className="banner-div2">
            <img src={Leaffood} alt="leaffood"/>
        </div>
    </div>
  )
}

export default Banner