import "./App.css";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import SideMenu from "./components/SideMenu";
import { FaCaretRight } from "react-icons/fa";
import { BsFillCaretRightFill } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiCodepen } from "react-icons/fi";
import MyPicture from "../src/images/my-pic.JPG";
import { FaRegStickyNote } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [sideMenu, setSideMenu] = useState(false);
  const handleSideMenu = () => {
    setSideMenu(true);
    console.log("Hey");
  };
  const handleCloseMenu = () => {
    setSideMenu(false);
  };
  return (
    <div className="App">
      <Menu sideMenuOpen={handleSideMenu} />
      {sideMenu && (
        <SideMenu sideMenuClose={handleCloseMenu} menuStatus={sideMenu} />
      )}
      <Hero />
      <section className="email__container">
        <div className="email__box">
          <a href="mailto:ebimeneagent@gmail.com">EBIMENEAGENT@GMAIL.COM</a>
        </div>
        <div className="email__divider "></div>
      </section>
      <div className="about__section__container" id="about">
        <div>
          <section className="about__section">
            <p>01.</p>
            <h3 className="about__header">About Me</h3>
            <div className="underline"></div>
          </section>
          <section className="about__text__container">
            <p className="about__detail__text">
              Hello! My name is Agent Ebimene and I enjoy creating things that
              live on the internet. My interest in web development started in
              few years back when I decided to investigate our the web works.
            </p>
            <p className="about__detail__text">
              Fast-forward to today, and I’ve had the privilege of working at an
              software companies and a start-up. My main focus these days is
              building accessible, inclusive products and digital experiences at
              Astrosoft for a variety of clients.
            </p>
            <p className="about__detail__text">
              Here are a few technologies I’ve been working with recently:
            </p>
            <div className="skills__container">
              <article className="single__skill">
                <BsFillCaretRightFill className="skill__icon" />
                <p>JavaScript (ES6+)</p>
              </article>
              <article className="single__skill">
                <BsFillCaretRightFill className="skill__icon" />
                <p>TypeScript</p>
              </article>
              <article className="single__skill">
                <BsFillCaretRightFill className="skill__icon" />
                <p>React</p>
              </article>
              <article className="single__skill">
                <BsFillCaretRightFill className="skill__icon" />
                <p>JavaScript</p>
              </article>
              <article className="single__skill">
                <BsFillCaretRightFill className="skill__icon" />
                <p>Material UI</p>
              </article>
              <article className="single__skill">
                <BsFillCaretRightFill className="skill__icon" />
                <p>Redux</p>
              </article>
            </div>
          </section>
        </div>
        <section className="experience__section">
          <article className="my__profile__pic">
            <div className="my__img__container">
              <img src={MyPicture} className="my__img"></img>
            </div>
          </article>
        </section>
      </div>
      <section>
        <article className="about__section work__places">
          <p>02.</p>
          <h3 className="about__header">Where I've Worked</h3>
          <div className="underline"></div>
        </article>

        <article className="companies__list__container">
          <ul className="companies__list">
            <li className="company__text ">
              <a href="" className="first__company">
                Makers Innovation Lab
              </a>
            </li>
            <li className="company__text">
              <a href="">Trailcube</a>
            </li>
            <li className="company__text">
              <a href="">Astrosoft</a>
            </li>
          </ul>
        </article>
        <div className="companies__box">
          <article className="company__role__container">
            <div>
              <h3 className="company__name">Frontend Developer @Astrosoft</h3>
              <p>March 2022 - Present</p>
              <div className="single__task">
                <div>
                  <FaCaretRight className="task__separator" />
                </div>

                <p>Work ina very friendly atmosphere of developers</p>
              </div>
              <div className="single__task">
                <div>
                  <FaCaretRight className="task__separator" />
                </div>
                <p>Work on clients projects using HTML, CSS and JavaScript</p>
              </div>
              <div className="single__task">
                <div>
                  <FaCaretRight className="task__separator" />
                </div>
                <p>
                  Communicate with multi-disciplinary teams of engineers,
                  designers and clients on a daily basis
                </p>
              </div>
            </div>
          </article>
          <article className="company__role__container" id="experience">
            <div>
              <h3 className="company__name">Frontend Developer @Trailcube</h3>
              <p>January -Present(Paused at the Main Time)</p>
              <div className="single__task">
                <div>
                  <FaCaretRight className="task__separator" />
                </div>
                <p>
                  Write modern, performant, maintainable code for a diverse
                  array of client and internal projects
                </p>
              </div>
              <div className="single__task">
                <div>
                  <FaCaretRight className="task__separator" />
                </div>
                <p>
                  I worked with a team of developers to build a web
                  application,trailcube.I built different pages using modern
                  frontend tools around the React Ecosystem.
                </p>
              </div>
              <div className="single__task">
                <div>
                  <FaCaretRight className="task__separator" />
                </div>
                <p>
                  Communicate with multi-disciplinary teams of engineers,
                  designers, producers, and clients on a daily basis
                </p>
              </div>
            </div>
          </article>
          <article className="company__role__container">
            <div>
              <h3 className="company__name">
                Frontend Developer @ Makers Innovation Lab
              </h3>
              <p> May 2021- January 2022</p>
              <div className="single__task">
                <div>
                  <FaCaretRight className="task__separator" />
                </div>
                <p>
                  Write modern, performant, maintainable code for a diverse
                  array of client and internal projects
                </p>
              </div>
              <div className="single__task">
                <div>
                  <FaCaretRight className="task__separator" />
                </div>
                <p>
                  Work with a variety of different languages, platforms,
                  frameworks, and content management systems such as JavaScript,
                  TypeScript, React, Material UI,CSS and Netlify
                </p>
              </div>
              <div className="single__task">
                <FaCaretRight className="task__separator" />
                <p>
                  Communicate with multi-disciplinary teams of engineers,
                  designers, producers, and clients on a daily basis
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="my__projects__section" id="works">
        <article className="about__section work__places">
          <p>04.</p>
          <h3 className="about__header">Some Things I've Built</h3>
          <div className="underline"></div>
        </article>
        <div className="project__card__box">
          <article className="project__card">
            <div className="project__card__link">
              <h5>Featured Project</h5>
              <a href="https://www.trailcube.com">
                <h2>Trailcube</h2>
              </a>
              <p>
                Trailcube is a web application that allows you to manage the
                activities of your business virtually. This involves real-time
                management of business operations and other features such as
                managing employees Salaries at the company.
              </p>
              <p className="tools__used">React Material-UI Redux-Saga</p>
              <div>
                <a href="">
                  <AiOutlineGithub className=" project__host" />
                </a>
              </div>
            </div>
          </article>
          <article className="project__card">
            <div className="project__card__link khairo__diet">
              <h5>Featured Project</h5>
              <a href="https://www.trailcube.com">
                <h2>Khairo Diet App</h2>
              </a>

              <p>
                A mobile Application built by a team of Engineers of which I was
                a part. This app recommends diets for users based on their BMI
                values.An ecommerce feature was incoporated into this app for
                users to buy products
              </p>
              <p className="tools__used">React-Native TypeScript Axios</p>
              <div>
                <a href="">
                  <AiOutlineGithub className=" project__host" />
                </a>
              </div>
            </div>
          </article>
          <article className="project__card">
            <div className="project__card__link spring__food">
              <h5>Featured Project</h5>
              <a href="https://www.trailcube.com">
                <h2>Spring Food Website</h2>
              </a>
              <p>
                A mobile Application built by a team of Engineers of which I was
                a part. This app recommends diets for users based on their BMI
                values.An ecommerce feature was incoporated into this app for
                users to buy products
              </p>
              <p className="tools__used">HTML CSS JavaScript</p>
              <div>
                <a href="https://github.com/Agent-Ebimene/Spring-food-website">
                  <AiOutlineGithub className=" project__host" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="contact__me__section" id="contact">
        <p className="contact__first__text">04. What's Next?</p>
        <h1>Get In Touch</h1>
        <p className="contact__me__text">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <div className="contact__me__btn">
          {" "}
          <a href="https://www.linkedin.com/in/ebimene-agent-2532a71b5/">
            Say Hello
          </a>
        </div>
      </section>
      <article className="side__social__details">
        <div className="side__social__icon">
          <a href="https://github.com/Agent-Ebimene">
            <AiOutlineGithub className="social__icon" />
          </a>
        </div>
        <div className="side__social__icon">
          <a href="https://instagram.com/agentebimene">
            {" "}
            <BsInstagram className="social__icon" />
          </a>
        </div>
        <div className="side__social__icon">
          <a href="">
            {" "}
            <BsTwitter className="social__icon" />
          </a>
        </div>
        <div className="side__social__icon">
          <a href="">
            {" "}
            <FaLinkedinIn className="social__icon" />
          </a>
        </div>
        <div className="side__social__icon">
          <a href="">
            <FiCodepen className="social__icon" />
          </a>
        </div>
        <div className="divider"></div>
      </article>
      <section className="other_projects__container">
        <div className="other__project__header">
          <h3>Other Noteworthy Projects</h3>
          <p>View the archive</p>
        </div>
        <div className="other__projects__box">
          <article className="other__project__card">
            <div className="other__project__icon__box">
              <FaRegStickyNote className="other__project__icon" />
              <div>
                <a href="">
                  <AiOutlineGithub className="social__icon" />
                </a>
              </div>
            </div>
            <h3 className="project__title">Photography Website</h3>
            <p>
              Building a custom multisite wordpress plugin to build global
              search Algolia{" "}
            </p>
            <p className="project__tools">HTML CSS Javascript</p>
          </article>
          <article className="other__project__card">
            <div className="other__project__icon__box">
              <FaRegStickyNote className="other__project__icon" />
              <div>
                <a href="">
                  <AiOutlineGithub className="social__icon" />
                </a>
              </div>
            </div>
            <h3 className="project__title">OneKobo App</h3>
            <p>A mobile application that makes budgeting easy for users</p>
            <p className="project__tools">React-Native</p>
          </article>
        </div>
      </section>
      <footer>
        <article className="social__icon__container">
          <div>
            <a href="https://github.com/Agent-Ebimene">
              <AiOutlineGithub className="social__icon" />
            </a>
          </div>
          <div>
            <a href="">
              {" "}
              <BsInstagram className="social__icon" />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/EbimeneEli">
              {" "}
              <BsTwitter className="social__icon" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/ebimene-agent-2532a71b5/">
              {" "}
              <FaLinkedinIn className="social__icon" />
            </a>
          </div>
          <div>
            <a href="https://codesandbox.io/u/Agent%20Ebimene">
              <FiCodepen className="social__icon" />
            </a>
          </div>
        </article>

        <p className="footer__text">Designed and Built by Agent Ebimene</p>
      </footer>
    </div>
  );
}

export default App;
