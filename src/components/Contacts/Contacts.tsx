import css from "./Contacts.module.css";

export default function Contacts() {
  return (
    <section className={css.contacts}>
      <div className="container">
        <div className={css.contacts_container}>
          <p className={css.contacts_text}>• LET&apos;S CONNECT</p>
          <div className={css.top_contacts}>
            <h2 className={css.top_title}>
              Let&apos;s create something beautiful together.
            </h2>
            <p className={css.top_text}>
              Have an idea, project or opportunity? I&apos;d love to hear from
              you.
            </p>
            <div className={css.box_btn}>
              <button className={css.top_btn}>Let's talk</button>
              <svg className={css.sparkle} width={30} height={30}>
                <use href="/sprite.svg#icon-sparkle"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
