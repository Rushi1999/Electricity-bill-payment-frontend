const Home = () => {
  return (
    // <div
    //   style={{
    //     backgroundImage: `url("https://www.contentgrip.com/content/images/wordpress/2021/03/capgemini-FI-1.jpg")`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundPosition: "cover",
    //   }}
    // >
    //   <div className="container" style={{ height: "100vh" }}>
    //     <h1 className="display-4 text-primary  pt-5">Welcome to Capgemini</h1>
    //     <p>
    //       Capgemini trainees, especially those who are from Oct 12 batch3 are
    //       really very genious!
    //     </p>
    //   </div>
    // </div>
    <section id="hero" class="d-flex align-items-center justify-content-center">
      <div class="container position-relative">
        <h1>Welcome to Baker</h1>
        <h2>
          We are team of talented designers making websites with Bootstrap
        </h2>
        <a href="#about" class="btn-get-started scrollto">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Home;
