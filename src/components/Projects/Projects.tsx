import css from "./Projects.module.css";
import { Link } from "react-router-dom";

export function Projects() {
  return (
    <section className={css.project_section}>
      <div className="container">
        <div className={css.projects_container}>
          <p className={css.projects_text}>• MY PROJECTS</p>
          <h2 className={css.projects_title}>Things I&apos;ve built</h2>
          <ul className={css.projects_list}>
            <li className={css.project_item_one}>
              <h3 className={css.item_title}>DriveSafely</h3>
              <p className={css.item_text}> AI-powered road safety platform</p>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://drive-safely.vercel.app/"
                className={css.item_link}
              >
                View project →
              </Link>
            </li>

            <li className={css.project_item_two}>
              <h3 className={css.item_title}>E-Pharmacy</h3>
              <p className={css.item_text}> Project preview</p>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://e-pharmacy-two.vercel.app/"
                className={css.item_link}
              >
                View project →
              </Link>
            </li>

            <li className={css.project_item_three}>
              <h3 className={css.item_title}>PetLove</h3>
              <p className={css.item_text}> Project preview</p>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://pet-love-liart.vercel.app/"
                className={css.item_link}
              >
                View project →
              </Link>
            </li>

            <li className={css.project_item_four}>
              <h3 className={css.item_title}>Nanny.Services</h3>
              <p className={css.item_text}> Project preview</p>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://app-nannies-services.vercel.app/"
                className={css.item_link}
              >
                View project →
              </Link>
            </li>

            <li className={css.project_item_five}>
              <h3 className={css.item_title}>MedOrder AI</h3>
              <p className={css.item_text}> Project preview</p>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://github.com/Mariana331/med-order-ai-automation"
                className={css.item_link}
              >
                View project →
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
