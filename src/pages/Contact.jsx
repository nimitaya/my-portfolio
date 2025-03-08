import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="section-contact scroll-offset" id="contact">
      <div className="contact-text">
        <h2>Contact me</h2>
        <p>
          Please use the provided form or contact me by{" "}
          <a href="mailto:">email</a>.
        </p>
        <p>Looking forward to hear from you!</p>
      </div>
      <form action="" className="contact-form">
        <div className="contact-form-name-container">
          <div className="contact-form-names">
            <label htmlFor="first-name">First Name</label>
            <input type="text" name="First-Name" id="first-name" />
          </div>
          <div className="contact-form-names">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" name="Last-Name" id="last-name" />
          </div>
        </div>
        <label htmlFor="email">
          Email <span>(required)</span>
        </label>
        <input type="email" name="e-Mail" id="email" required />
        <label htmlFor="message">
          Message <span>(required)</span>
        </label>
        <textarea name="Message" id="message" required></textarea>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </section>
  );
};
export default Contact;
