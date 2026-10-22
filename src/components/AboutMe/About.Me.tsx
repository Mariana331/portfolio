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
                <h3 className={css.list_title}>Web Development</h3>
                <p className={css.list_text}>
                  Short description about this area of work.
                </p>
              </li>

              <li className={css.list_two}>
                <h3 className={css.list_title}>AI Automation</h3>
                <p className={css.list_text}>
                  Short description about this area of work.
                </p>
              </li>

              <li className={css.list_three}>
                <h3 className={css.list_title}>Problem Solving</h3>
                <p className={css.list_text}>
                  Short description about this area of work.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
