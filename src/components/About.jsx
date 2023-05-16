import React from "react";

function About() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div>
              <img src={aboutImg} alt="img" />
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <p>About Us</p>
              <h2>professional IT consulting</h2>
              <p>
                Supertech IT Consulting leverages decades of experience working
                with a variety of businesses. We listen, learn, analyze and
                solve your business IT requirements. We take the time to get to
                know you and your business. We are always looking for new
                solutions that offer the best value, service and cost savings.
                When you engage with Supertech IT Consulting, know that we can
                assist in evaluating your IT needs and scale with your increased
                flux over time. We can improve your tech stack to include
                improved UX, CX, Connectivity, Networking and Security. We
                should be the first place you go to maximize revenue in the
                dynamic, fast-paced ecosystem of Information Technology. We
                understand your priorities, let us develop our relationship and
                design exceptional solutions that offer the best outcomes for
                your company, team and customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
