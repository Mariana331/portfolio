import css from "./Contacts.module.css";

export default function Contacts() {
  return (
    <section className={css.contacts}>
      <div className="container">
        <div className={css.contacts_container}>
          <p className={css.contacts_text}>• LET&apos;S CONNECT</p>
          <div className={css.top_container}>
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
            <form className={css.form}>
              <div className={css.input_top}>
                <label className={css.form_label} htmlFor="name">
                  Your name
                </label>
                <input
                  className={css.form_input}
                  type="text"
                  id="name"
                  name="name"
                />

                <label className={css.form_label} htmlFor="email">
                  Email address
                </label>
                <input
                  className={css.form_input}
                  type="email"
                  id="email"
                  name="email"
                />
              </div>

              <label className={css.form_label} htmlFor="subject">
                Subject
              </label>
              <input
                className={css.form_input}
                type="text"
                id="subject"
                name="subject"
              />

              <label className={css.form_label} htmlFor="message">
                Your message
              </label>
              <textarea
                className={css.form_text}
                id="message"
                name="message"
                rows={6}
              ></textarea>
              <div className={css.form_box}>
                <button className={css.form_btn}>Send message</button>
                <p className={css.form_reply}>
                  I usually reply within 24 hours ✦
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
