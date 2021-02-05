import { Link } from "react-router-dom";
import img from "../assets/bio_image.PNG";
import "./home.styles.scss";
import resume from '../assets/Resume.pdf'

const Home = () => {
  return (
    <div id="about-a" className="text-center py-2">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-info">
          <div className="bio-image">
            <img src={img} alt="" />
          </div>
          <div className="bio bg-light p-2">
            <p>
              Full stack developer with diverse professional experience as a financial analyst and a registered nurse.
              Certification from University of Washington Full Stack Bootcamp and additional education from online
              computer science courses. As a financial analyst at Expedia Group, I helped manage multi-million dollar
              marketing budgets by working across business units, communicating needs, and building ad-hoc
              reporting/analysis. Now as an RN in the Neonatal ICU, I am responsible for the care of critically ill
              infants. Monitoring changing conditions and communicating with peers, concerned parents, and doctors. My
              experiences have developed my ability to communicate and move through conflict, my sense of
              time-management, and my skill in learning quickly. I desire a creative and collaborative work environment
              that strives to deliver products that inspire, empower, and solve problems. My unique background positions
              me as a valuable addition to any development team.
            </p>
            <p className="p-1">Brandon Hexsel</p>
          </div>
          <div className="connect">
            <h2 className="section-title">Connect</h2>
            <div className="connect-container">
              <Link to="https://github.com/b-hexsoul" target="_blank">
                <i className="fab fa-github fa-3x"></i>
              </Link>
              <a href={resume} target="_blank" class="btn-dark">Resume</a>
              <Link to="https://www.linkedin.com/in/bhexsel/" target="_blank">
                <i className="fab fa-linkedin fa-3x"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
