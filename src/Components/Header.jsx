import './Header.css';

function Header() {
  return (
    <header>
        <div className="heading">
            <h4 style={{color: '#FFB30E'}}>Hot Meals</h4>
        </div>
        <div className="address">
            <p><strong>Deliver to:&nbsp;&nbsp;<i className="fa-solid fa-location-dot" style={{color: '#FFB30E'}}>&nbsp;&nbsp;</i></strong>Current
                Location<strong> Ashok Nagar,Chennai-600013</strong></p>
        </div>
        <div className="search-login-div">
            <div className="search">
                <p><i className="fa-solid fa-magnifying-glass" style={{color: '#FFB30E'}}>&nbsp;</i><strong>Search Food</strong>
                </p>
            </div>
            <div className="login-btn">
                <button><i className="fa-solid fa-user"></i>Login</button>
            </div>
        </div>
    </header>
  )
}

export default Header