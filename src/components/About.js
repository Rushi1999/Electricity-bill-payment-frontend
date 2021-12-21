const About = () => {
  return (
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">
        <div class="row gx-0">
          <div
            class="col-lg-6 d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="content">
              <h3>Who We Are</h3>
              <h2>
                With us you are safe, with us you work is easy , With us you
                have a good helping Hand.
              </h2>
              <p>
                We're providing an helping hand to make your work easy , get
                Connection check your bill and pay with easy step's with an easy
                pay. We are Community and phase of new Ear.
                <p>
                  {" "}
                  Since 2020 founded by Capgemini fresher small team ...Seeking
                  for yor support.
                </p>
              </p>
              <div class="text-center text-lg-start">
                <a
                  href="/blog"
                  class="btn-read-more d-inline-flex
            align-items-center justify-content-center
            align-self-center"
                >
                  <span>Read More</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            class="col-lg-6 d-flex align-items-center"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img
              src="https://itechnowledge.com/wp-content/uploads/2019/12/Pay-electricity-bill-online-1024x683.jpg"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
