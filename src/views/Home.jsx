import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <div className="home-container text-center my-5">
      <h1 className="text-success">Natural Pic</h1>
      <div className="container text-start">
        <div className="row">
          <Gallery />
        </div>
      </div>
    </div>
  );
};
export default Home;
