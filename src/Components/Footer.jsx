import './Footer.css';

function Footer() {
  return (
    <div className="footer-parent">
        <div className="footer-div">
            <div className="footer-in-div1">
                <div>
                    <h3>Company</h3>
                    <p>About us</p>
                    <p>Team</p>
                    <p>Careers</p>
                    <p>Blog</p>
                </div>
                <div>
                    <h3>Contact</h3>
                    <p>Help & Support</p>
                    <p>Partner with us</p>
                    <p>Ride with us</p>
                </div>
                <div>
                    <h3>Legal</h3>
                    <p>Terms and Conditions</p>
                    <p>Refund & Cancellation</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                </div>
            </div>
            <div className="footer-in-div2">
                <div className="footer-in-div2-div1">
                    <h3>Follow Us</h3>
                </div>
                <div className="footer-in-div2-div2">
                    <i className="fa-brands fa-square-instagram" style={{color: "#ededee"}}></i>
                    <i className="fa-brands fa-facebook" style={{color: "#ededee"}}></i>
                    <i className="fa-brands fa-twitter" style={{color: "#ededee"}}></i>
                </div>
                <div className="footer-in-div2-div3">
                    <p>Receive exclusive offers in your mailbox</p>
                </div>
                <div className="footer-in-div-div4">
                    <input type="text" placeholder="Enter your mail"
                        style={{padding:"7px",width:"350px",marginRight:"10px",borderRadius: "8px",background: "#424242"}}/>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
        <div className="right-div">
            <p>All rights Reserved</p>
            <p>Made with <i className="fa-solid fa-heart" style={{color: "#ffdd00"}}></i> by Juan</p>
        </div>
    </div>
   
  )
}

export default Footer;