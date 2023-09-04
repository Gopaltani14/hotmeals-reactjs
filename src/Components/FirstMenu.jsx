import "./FirstMenu.css";
import vada from "../Images/vada.png";
import itly from "../Images/itly.png";
import parotta from "../Images/parotta.png";
import pongal from "../Images/pongal.png";


function FirstMenu() {
    const items = [
    { img: vada, value: "Vada" },
    { img: itly, value: "Itly" },
    { img: parotta, value: "Parotta" },
    { img: pongal, value: "Pongal" },
  ];

  return (
    <div className="first-menu-div" id="menu-list">
      {items.map((e) => (
        <>
          <div className={`first-menu-item ${e.value}`}>
            <div style={{ background: `url(${e.img})` }}>
              {/* <div>
                <img src={e.img}></img> */}
            </div>
            <p>{e.value}</p>
            <button>30 min Delivery</button>
          </div>
        </>
      ))}
    </div>
  );
}

export default FirstMenu;
