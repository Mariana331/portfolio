import css from "./Header.module.css";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";

import MobileMenu from "../MobileMenu/MobileMenu";
import Modal from "../Modal/Modal";

export default function Header() {
  const [isOpenModal, setOpenModal] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/home";
  const isAbout = location.pathname === "/about";
  const isProducts = location.pathname === "/products";
  const isSkills = location.pathname === "/skills";
  const isTestimonials = location.pathname === "/testimonials";
  const isContacts = location.pathname === "/contacts";

  return (
    <div className={css.header}>
      <div className={css.logo}>
        <svg className={css.logo_icon} width={30} height={30}>
          <use href="/sprite.svg#icon-flower" />
        </svg>
        <Link to="/" className={css.logo_text}>
          Mariana.
        </Link>
      </div>
      <nav className={css.nav}>
        <ul className={css.nav_list}>
          <li className={`${css.nav_item} ${isHome ? css.active : ""} `}>
            <Link className={css.nav_link} to="/home">
              Home
            </Link>
          </li>
          <li className={`${css.nav_item} ${isAbout ? css.active : ""} `}>
            <Link className={css.nav_link} to="/about">
              About
            </Link>
          </li>
          <li className={`${css.nav_item} ${isProducts ? css.active : ""} `}>
            <Link className={css.nav_link} to="/products">
              Products
            </Link>
          </li>
          <li className={`${css.nav_item} ${isSkills ? css.active : ""} `}>
            <Link className={css.nav_link} to="/skills">
              Skills
            </Link>
          </li>
          <li
            className={`${css.nav_item} ${isTestimonials ? css.active : ""} `}
          >
            <Link className={css.nav_link} to="/testimonials">
              Testimonials
            </Link>
          </li>
          <li className={`${css.nav_item} ${isContacts ? css.active : ""} `}>
            <Link className={css.nav_link} to="/contacts">
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
      <div className={css.header_button}>
        <button className={css.button}>Let&apos;s talk</button>
        <svg className={css.sparkle} width={30} height={30}>
          <use href="/sprite.svg#icon-sparkle"></use>
        </svg>
      </div>
      <button
        className={css.menu}
        type="button"
        onClick={() => setOpenModal(true)}
      >
        <svg className={css.burger} width={30} height={30}>
          <use href="/sprite.svg#icon-menu"></use>
        </svg>
      </button>
      {isOpenModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <MobileMenu
            onClose={() => setOpenModal(false)}
            isOpen={isOpenModal}
          />
        </Modal>
      )}
    </div>
  );
}
