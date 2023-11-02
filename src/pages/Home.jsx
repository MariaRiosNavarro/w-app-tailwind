const Home = () => {
  return (
    <>
      <div className="card  bg-base-100 shadow-2xl m-10 md:card-side md:w-1/2 md:mx-auto md:my-10">
        <figure className="h-28 w-full md:h-auto md:w-auto">
          <img
            className="w-full object-fill md:w-auto"
            src="https://picsum.photos/seed/picsum/200/300"
            alt="Album"
          />
          <div className="card border-solid border-2 border-secundary">
            <p>25°</p>
            <p>2/11/2023</p>
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Glessen</h2>
          <p>Coord: 50/20</p>
          <p>Germany</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">test</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
