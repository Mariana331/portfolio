import css from "./Hero.module.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className={css.hero}>
      <div className={css.hero_left}>
        <div className={css.left_opportunity}>
          <svg className={css.opportunity_icon}>
            <use href="/sprite.svg#icon-point" width={30} height={30}></use>
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
          Full-Stack Developer &{" "}
          <span className={css.description_span}>AI Automation</span> Engineer
          <span className={css.description_span_one}>
            I build modern web applications and AI-powered automation that turn
            ideas into real digital products.
          </span>
        </p>
      </div>
      <div className={css.hero_btn}>
        <button className={css.btn_view}>
          <Link to="/products">View my work</Link>
          <svg className={css.view_icon} width={30} height={30}>
            <use href="/sprite.svg#icon-right"></use>
          </svg>
        </button>
        <button className={css.btn_download}></button>
      </div>
      <div className={css.hero_right}>Download CV</div>
    </div>
  );
}
