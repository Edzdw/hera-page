const Home = () => {
  return (
    <section className="home image" id="home">
      <div>
        <div className="position-relative">
          <h1>
            <span>
              <span className="animated-layer">
                Một sản phẩm <span> tài chính </span>
              </span>
            </span>
            <span className="position-relative">
              <span className="animated-layer">To</span>
              <span className="intro animated-layer">
                " thuần tự nhiên nương theo quy luật "
              </span>
            </span>
            <span>
              <span className="animated-layer">vận hành hình sin</span>
            </span>
          </h1>
        </div>
      </div>
      {/* CALL TO ACTION STARTS */}
      <span className="animated-layer animated-btn cta" id="cta">
        <span></span>
      </span>
      {/* CALL TO ACTION ENDS */}
    </section>
  );
};
export default Home;
