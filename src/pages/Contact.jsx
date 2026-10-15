import { useCallback, useState } from "react";
import emailjs from "@emailjs/browser";
import { BiEnvelope, BiMap, BiPhone, BiShareAlt } from "react-icons/bi";
import { FaGithub, FaLaptopCode, FaLinkedin } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import PageHeading from "../components/PageHeading";
import Reveal from "../components/Reveal";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "The contact form is not configured yet. Please email me directly using the address above.",
      });
      return;
    }

    const formData = new FormData(form);
    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    setIsSending(true);
    setStatus(null);
    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      form.reset();
      setStatus({ type: "success", message: "Message sent successfully." });
    } catch (error) {
      console.error("[contact-form] Unable to send message:", error);
      setStatus({
        type: "error",
        message: "Your message could not be sent. Please try again or email me directly.",
      });
    } finally {
      setIsSending(false);
    }
  }, []);

  return (
    <section className="page-shell">
      <PageHeading
        eyebrow="Get in touch"
        title="Let’s build something."
        description="Have a question or an opportunity to discuss? Feel free to reach out."
      />

      <div className="grid-layout contact-grid">
        <Reveal className="surface-card contact-card">
          <span className="contact-icon"><BiMap aria-hidden="true" /></span>
          <div>
            <h2>Address</h2>
            <div className="contact-details">
              <span>Abdul Chalk Islam</span>
              <span>Dandopur, Kushinagar</span>
              <span>274304</span>
            </div>
          </div>
        </Reveal>

        <Reveal className="surface-card contact-card">
          <span className="contact-icon"><BiShareAlt aria-hidden="true" /></span>
          <div>
            <h2>Social</h2>
            <div className="social-row">
              <a
                className="icon-link"
                href="https://github.com/Rohanyadav143"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              ><FaGithub /></a>
              <a
                className="icon-link"
                href="https://www.linkedin.com/in/rohan-yadav-20b064255/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              ><FaLinkedin /></a>
              <a
                className="icon-link"
                href="https://leetcode.com/u/rohn1895/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode profile"
              ><FaLaptopCode /></a>
            </div>
          </div>
        </Reveal>

        <Reveal className="surface-card contact-card">
          <span className="contact-icon"><BiEnvelope aria-hidden="true" /></span>
          <div>
            <h2>Email</h2>
            <div className="contact-details">
              <a href="mailto:rohn1895@gmail.com">rohn1895@gmail.com</a>
              <a href="mailto:ry703606@gmail.com">ry703606@gmail.com</a>
            </div>
          </div>
        </Reveal>

        <Reveal className="surface-card contact-card">
          <span className="contact-icon"><BiPhone aria-hidden="true" /></span>
          <div>
            <h2>Phone</h2>
            <div className="contact-details">
              <a href="tel:+918423712322">+91 8423712322</a>
              <a href="tel:+918604626646">+91 8604626646</a>
            </div>
          </div>
        </Reveal>
      </div>

      <section className="contact-form-wrap" aria-labelledby="send-message-heading">
        <h2 className="section-label" id="send-message-heading">Send Message</h2>
        <Reveal as="form" className="surface-card contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form-field form-field-full">
            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              name="subject"
              placeholder="What would you like to discuss?"
              required
            />
          </div>
          <div className="form-field form-field-full">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
            />
          </div>
          <button className="button button-primary form-field-full" type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
            {!isSending && <FaArrowRight aria-hidden="true" />}
          </button>
          {status && (
            <p className={`form-status ${status.type}`} role="status">
              {status.message}
            </p>
          )}
        </Reveal>
      </section>
    </section>
  );
}
