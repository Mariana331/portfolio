import css from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <section className={css.about}>
      <div className="container">
        <div className={css.about_container}>
          <div className={css.about_top}>
            <p className={css.about_text}>• ABOUT ME</p>
            <h2 className={css.about_title}>A little about me</h2>
            <p className={css.about_description}>
              I&apos;m a Full-Stack Developer and AI Automation Engineer who
              loves combining code, creativity and AI to build useful and
              beautiful digital products.
            </p>
            <p className={css.about_description_two}>
              I enjoy solving problems, learning new technologies and turning
              ideas into real solutions.
            </p>
            <button className={css.about_btn}>More about me →</button>
          </div>
          <div className={css.about_down}>
            <ul className={css.about_list}>
              <li className={css.list_one}>
                <svg className={css.about_icon}>
                  <use href="/sprite.svg#icon-untitled"></use>
                </svg>
                <h3 className={css.list_title}>
                  Web <span className={css.about_span}>Development</span>
                </h3>
                <p className={css.list_text}>
                  Building responsive and modern web applications with React,
                  Next.js and Node.js.
                </p>
              </li>

              <li className={css.list_two}>
                <svg className={css.about_icon}>
                  <use href="/sprite.svg#icon-1"></use>
                </svg>
                <h3 className={css.list_title}>
                  AI <span className={css.about_span}>Automation</span>
                </h3>
                <p className={css.list_text}>
                  Creating AI workflows and smart automations with n8n, OpenAI
                  and more.
                </p>
              </li>

              <li className={css.list_three}>
                <svg className={css.about_icon}>
                  <use href="/sprite.svg#icon-2"></use>
                </svg>
                <h3 className={css.list_title}>
                  Problem <span className={css.about_span}>Solving</span>
                </h3>
                <p className={css.list_text}>
                  I love challenges and enjoy turning complex problems into
                  simple solutions.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
