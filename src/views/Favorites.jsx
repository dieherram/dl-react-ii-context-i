import { useContext } from "react";
import { PicsContext } from "../context/PicsContext";
import IconHeart from "../components/IconHeart";

const Favorites = () => {

  const { pics } = useContext(PicsContext)

  return (
    <div className="favorites-container text-center my-5">
      <h1 className="text-success">Fotos favoritas</h1>
      <div className="container text-start">
        <div className="row">
          {pics && pics.filter(pic => pic.liked === true).map(pic =>
            <div key={pic.id} className="col-sm-12 col-md-6 col-lg-4 my-3 d-flex justify-content-center">
              <div className="card text-bg-dark" style={{ width: "18rem", height: "100%" }}>
                <img src={pic.src.medium} className="card-img" alt="..." style={{ height: "200px" }} />
                <div className="card-img-overlay d-flex flex-column justify-content-between">
                  <IconHeart filled={pic.liked} pic={pic} />
                  <p className="card-text">{pic.alt}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Favorites;
