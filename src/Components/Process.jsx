import "./Process.css";
import discount from "../Images/discount.png";
import tracing from "../Images/tracing.png";
import delivery from "../Images/delivery.png";

function Process() {
  const processobj = [
    { img: discount, value: "Daily Discounts", class: "discount" },
    { img: tracing, value: "Live Tracing", class: "tracing" },
    { img: delivery, value: "Quick Delivery", class: "delivery" },
  ];
  return (
    //  how does it work
    <div className="process-parent">
      <div className="process-div">
        <div className="process-heading-div">
          <h3>How does it work</h3>
        </div>
        <div className="process-in-div" id="process-list">
          {processobj.map((e) => (
            <>
              <div className="process-in-div-div">
                <div
                  className={`${e.class}`}
                  style={{
                    background: `url(${e.img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    filter: "drop-shadow(3px 8px 8px rgb(73, 72, 72))",
                  }}
                ></div>
                <p>
                  <strong>{e.value}</strong>
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Process;
