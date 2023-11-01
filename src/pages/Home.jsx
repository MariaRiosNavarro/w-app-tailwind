const Home = () => {
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-2xl m-10">
        <figure className="h-28 w-full lg:h-auto lg:w-auto">
          <img
            className="w-full object-fill lg:w-auto"
            src="https://picsum.photos/seed/picsum/200/300"
            alt="Album"
          />
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
