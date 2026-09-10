import css from "./MobileMenu.module.css";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  onClose: () => void;
  isOpen: boolean;
}

export default function MobileMenu({ onClose, isOpen }: MobileMenuProps) {
  if (!isOpen) return null;
  return (
    <div className={css.mobile}>
      <div className={css.logo}>
        <svg className={css.logo_icon} width={30} height={30}>
          <use href="/sprite.svg#icon-flower" />
        </svg>
        <Link to="/" className={css.logo_text}>
          Mariana.
        </Link>
      </div>
      <button className={css.btn_close} type="button" onClick={onClose}>
        <svg className={css.close} width={30} height={30}>
          <use href="/sprite.svg#icon-x"></use>
        </svg>
      </button>
      <nav className={css.nav}>
        <ul className={css.nav_list}>
          <li className={css.nav_item}>
            <Link className={css.nav_link} to="/home" onClick={onClose}>
              Home
            </Link>
          </li>
          <li className={css.nav_item}>
            <Link className={css.nav_link} to="/about" onClick={onClose}>
              About
            </Link>
          </li>
          <li className={css.nav_item}>
            <Link className={css.nav_link} to="/products" onClick={onClose}>
              Products
            </Link>
          </li>
          <li className={css.nav_item}>
            <Link className={css.nav_link} to="/skills" onClick={onClose}>
              Skills
            </Link>
          </li>
          <li className={css.nav_item}>
            <Link className={css.nav_link} to="/testimonials" onClick={onClose}>
              Testimonials
            </Link>
          </li>
          <li className={css.nav_item}>
            <Link className={css.nav_link} to="/contacts" onClick={onClose}>
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
      <div className={css.header_button}>
        <button className={css.button} onClick={onClose}>
          Let&apos;s talk
        </button>
        <svg className={css.sparkle} width={30} height={30}>
          <use href="/sprite.svg#icon-sparkle"></use>
        </svg>
      </div>
    </div>
  );
}
