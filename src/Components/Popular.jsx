import "./Popular.css";
import murukku from "../Images/murukku.png";
import paniyaram from "../Images/paniyaram.png";
import seevalmurukku from "../Images/seevalmurukku.png";
import vegsoup from "../Images/vegsoup.png";
import mixture from "../Images/mixture.png";
import halwa from "../Images/halwa.png";
import laddu from "../Images/laddu.png";
import gulab_jamun from "../Images/gulab_jamun.png";
import jangri from "../Images/jangri.png";
import porivellangai_urundai from "../Images/porivellangai_urundai.png";

function Popular() {
  const popularobj = [
    { img: murukku, value: "Murukku", class: "murukku" },
    { img: paniyaram, value: "Paniyaram", class: "paniyaram" },
    { img: seevalmurukku, value: "seeval Murukku", class: "seevalmurukku" },
    { img: vegsoup, value: "Vegsoup", class: "vegsoup" },
    { img: mixture, value: "Mixture", class: "mixture" },

    { img: halwa, value: "Halwa", class: "halwa" },
    { img: laddu, value: "Laddu", class: "laddu" },
    { img: gulab_jamun, value: "Gulab Jamun", class: "gulabjamun" },
    { img: jangri, value: "Jangri", class: "jangri" },
    {
      img: porivellangai_urundai,
      value: "Porivellangai Urundai",
      class: "porivellangai_urundai",
    },
  ];
  return (
    <>
    <div id="div-popular-parent">
      <h2>Popular Items</h2>
      <div className="popular-items-div" id="popular-items-div">
        {popularobj.map((e) => (
            <>
          <div className="popular-item-in-div">
            <div
              className={`popular-item-img ${e.class}`}
              style={{background:`url(${e.img})`,backgroundRepeat:"no-repeat",backgroundSize:"contain"}}
            ></div>
            <p>
              <strong>{e.value}</strong>
            </p>
            <button>Order Now</button>
          </div>
          </>
        ))}
      </div>
    </div>
    </>
  );
}

export default Popular;
