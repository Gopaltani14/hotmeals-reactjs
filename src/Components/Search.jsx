import "./Search.css";
import dosa from "../Images/dosa.png";
import appam from "../Images/appam.png";
import puttu from "../Images/puttu.png";
import idiappam from "../Images/idiappam.png";
import pongal from "../Images/pongal.png";
import vegrice from "../Images/vegrice.png";

function Search() {
  const searchobj = [
    { img: dosa, value: "Dosa", class: "dosa" },
    { img: appam, value: "Aappam", class: "appam" },
    { img: puttu, value: "Puttu", class: "puttu" },
    { img: idiappam, value: "Idiappam", class: "idiyappam" },
    { img: pongal, value: "Pongal", class: "pongal" },
    { img: vegrice, value: "Veg Rice", class: "vegrice" },
  ];
  return (
    <div className="search-food-div">
      <div>
        <h3>Search by Food</h3>
      </div>
      <div className="search-food-in-div" id="search-food">
        {searchobj.map((e) => 
        <>
          <div>
            <div
              className={`search-food-item ${e.class}`}
              style={{
                background: `url(${e.img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></div>
            <p>
              <strong>{e.value}</strong>
            </p>
          </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Search;
