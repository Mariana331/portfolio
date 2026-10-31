import css from "./TechStack.module.css";

export default function TechStack() {
  return (
    <section className={css.techStack}>
      <div className="container">
        <div className={css.techStack_container}>
          <p className={css.techStack_text}>• MY SKILLS</p>
          <h2 className={css.techStack_title}>What I love working with</h2>
          <ul className={css.techStack_list}>
            <li className={css.techStack_item}>React</li>
            <li className={css.techStack_item}>Next.js</li>
            <li className={css.techStack_item}>TypeScript</li>
            <li className={css.techStack_item}>JavaScript</li>
            <li className={css.techStack_item}> Node.js</li>
            <li className={css.techStack_item}>MongoDB</li>
            <li className={css.techStack_item}>n8n</li>
            <li className={css.techStack_item}>OpenAI</li>
          </ul>

          <ul className={css.techStack_amount}>
            <li className={css.amount}>
              3+<br></br>
              <span className={css.span_amount}>Projects</span>
            </li>
            <li className={css.amount}>
              4+<br></br>
              <span className={css.span_amount}>AI workflows</span>
            </li>
            <li className={css.amount}>
              10+<br></br>
              <span className={css.span_amount}>Technologies</span>
            </li>
            <li className={css.amount}>
              ∞<br></br>
              <span className={css.span_amount}>Ideas</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
