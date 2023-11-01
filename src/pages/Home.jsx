const Home = () => {
  return (
    <>
      <div className="card card-side  shadow-2xl m-10">
        <figure className="w-30">
          <img src="https://picsum.photos/seed/picsum/200/300" alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-2xl m-10">
        <figure>
          <img src="https://picsum.photos/seed/picsum/200/300" alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
