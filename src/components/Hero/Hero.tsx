import css from "./Hero.module.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <div className={css.hero_left}>
          <div className={css.left_opportunity}>
            <svg className={css.opportunity_icon}>
              <use href="/sprite.svg#icon-point"></use>
            </svg>
            <p className={css.opportunity_text}>
              Available for new opportunities
            </p>
          </div>
          <h1 className={css.title}>
            Hi, I am<br></br>
            <span className={css.hero_mari}>Mariana</span>
            <br></br>
            <span className={css.hero_ko}>Koval</span>
          </h1>
          <p className={css.description}>
            Full-Stack Developer<br></br>&{" "}
            <span className={css.description_span}>AI Automation</span>{" "}
            Engineer{" "}
          </p>
          <p className={css.description_one}>
            I build modern web applications and AI-powered automation that turn
            ideas into real digital products.
          </p>
          <div className={css.hero_btn}>
            <button className={css.btn_view}>
              <Link to="/products">View my work</Link>
              <svg className={css.view_icon}>
                <use href="/sprite.svg#icon-right"></use>
              </svg>
            </button>
            <button className={css.btn_download}>
              <a
                href="/Mariana-Koval-CV.pdf"
                download
                className={css.btn_download}
              >
                Download CV
              </a>
            </button>
          </div>
          <div className={css.hero_links}>
            <ul className={css.links_list}>
              <li className={css.links_item}>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://github.com/Mariana331"
                  aria-label="Go to GitHub"
                >
                  <svg className={css.links_icon_f}>
                    <use href="/sprite.svg#icon-github"></use>
                  </svg>
                </Link>
              </li>
              <li className={css.links_item}>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://www.linkedin.com/in/mariana-koval-fullstack-developer/"
                  aria-label="Go to LinkedIn"
                >
                  <svg className={css.links_icon_s}>
                    <use href="/sprite.svg#icon-linkedin"></use>
                  </svg>
                </Link>
              </li>
              <li className={css.links_item}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:m.koval000@gmail.com"
                  aria-label="Send email"
                >
                  <svg className={css.links_icon_t}>
                    <use href="/sprite.svg#icon-mail"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={css.hero_right}>
          <div className={css.photo_wrapper}></div>
          <div className={css.techCard}>
            <svg className={`${css.icon_tech} ${css.icon_react}`}>
              <use href="/sprite.svg#icon-react"></use>
            </svg>
            React
          </div>
          <div className={css.techCard}>
            <svg className={`${css.icon_tech} ${css.icon_next}`}>
              <use href="/sprite.svg#icon-next"></use>
            </svg>
            Next.js
          </div>
          <div className={css.techCard}>
            <svg className={`${css.icon_tech} ${css.icon_type}`}>
              <use href="/sprite.svg#icon-ts"></use>
            </svg>
            TypeScript
          </div>
          <div className={css.techCard}>
            <svg className={`${css.icon_tech} ${css.icon_node}`}>
              <use href="/sprite.svg#icon-node"></use>
            </svg>
            Node.js
          </div>
        </div>
      </div>
    </section>
  );
}
