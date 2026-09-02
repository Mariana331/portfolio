import css from "./Header.module.css";

export default function Header() {
  return (
    <div className={css.header}>
      <div className={css.logo}>
        <svg className={css.logo_icon} width={30} height={30}>
          <use href="/sprite.svg#icon-flower" />
        </svg>
        <p className={css.logo_text}>Mariana.</p>
      </div>
      <nav className={css.nav}>
        <ul className={css.nav_list}>
          <li>
            <a className={css.nav_item} href="#home">
              Home
            </a>
          </li>
          <li className={css.nav_item}>
            <a href="#about">About</a>
          </li>
          <li className={css.nav_item}>
            <a href="#products">Products</a>
          </li>
          <li className={css.nav_item}>
            <a href="#skills">Skills</a>
          </li>
          <li className={css.nav_item}>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className={css.nav_item}>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>
      <div className={css.header_button}>
        <button className={css.button}>Let&apos;s talk</button>
        <svg className={css.button_icon}>
          <use href="/sprite.svg#icon-right"></use>
        </svg>
      </div>
    </div>
  );
}
