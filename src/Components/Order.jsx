import './Order.css';
import bigdosa from '../Images/bigdosa.png';
function Order() {
  return (
    <div className="ordersection-div">
        <div className="ordersection-div-div1">
            <div className="ordersection-div-div11">
                <h3>Best deals <strong
                        style={{color:"#FFB30E",fontFamily:"'Source Sans 3', sans-serif",fontSize: "43px"}}>Crispy
                        Diffen</strong></h3>
                <p>Enjoy the large size of Dosa.Complete perfect slice of dosa.</p>
            </div>
            <div className="ordersection-div-div12">
                <button>PROCEED TO ORDER</button>
            </div>
        </div>
        <div className="ordersection-div-div2">
            <img src={bigdosa} alt="bigdosa" width="590px" height="350px" style={{backgroundRepeat:"no-repeat",backgroundSize:"contain"}}/>
        </div>
    </div>
  )
}

export default Order;