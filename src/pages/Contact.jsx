import { useState, useCallback, useMemo } from "react";
import emailjs from "@emailjs/browser";
import { useTheme } from "../context/ThemeContext";

import { BiMap, BiShareAlt, BiEnvelope, BiPhone } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaLaptopCode } from "react-icons/fa";

export default function Contact() {
  const { darkMode } = useTheme();
  const [showToast, setShowToast] = useState(false);

  const cardStyle = useMemo(
    () => ({
      background: darkMode ? "#0f172a" : "#ffffff",
      color: darkMode ? "#d6dae1" : "#1f2937",
      border: "1px solid rgba(0,0,0,0.15)",
    }),
    [darkMode],
  );

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const templateParams = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        e.target.reset();
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      });
  }, []);

  return (
    <section
      className="min-h-screen-100vh py-8 transition-all duration-300"
      style={{
        background: darkMode ? "#00091a" : "#e7eaee",
        color: darkMode ? "#d6dae1" : "#1f2937",
      }}
    >
      <div className="max-w-[210mm] mx-auto px-4">
        {/* HEADING */}
        <h2 className="border-l-4 border-orange-400 pl-3 mb-6 font-bold text-orange-400">
          Contact
        </h2>

        {/* GRID 1 */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* ADDRESS */}
          <div className="p-5 rounded-xl" style={cardStyle}>
            <div className="flex gap-3 items-start">
              <BiMap className="text-2xl text-yellow-400" />
              <div>
                <p className="font-bold text-green-400">Address</p>
                <p>Abdul Chalk Islam</p>
                <p>Dandopur, Kushinagar</p>
                <p>274304</p>
              </div>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="p-5 rounded-xl" style={cardStyle}>
            <div className="flex gap-3 items-center mb-3">
              <BiShareAlt className="text-2xl text-yellow-400" />
              <p className="font-bold text-green-400">Social</p>
            </div>

            <div className="flex gap-4 text-2xl">
              <a href="https://github.com" className="hover:text-yellow-400">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" className="hover:text-yellow-400">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-yellow-400">
                <FaLaptopCode />
              </a>
            </div>
          </div>
        </div>

        {/* GRID 2 */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* EMAIL */}
          <div className="p-5 rounded-xl" style={cardStyle}>
            <div className="flex gap-3">
              <BiEnvelope className="text-2xl text-yellow-400" />
              <div>
                <p className="font-bold text-green-400">Email</p>
                <p>rohn1895@gmail.com</p>
                <p>ry703606@gmail.com</p>
              </div>
            </div>
          </div>

          {/* PHONE */}
          <div className="p-5 rounded-xl" style={cardStyle}>
            <div className="flex gap-3">
              <BiPhone className="text-2xl text-yellow-400" />
              <div>
                <p className="font-bold text-green-400">Phone</p>
                <p>+91 8423712322</p>
                <p>+91 8604626646</p>
              </div>
            </div>
          </div>
        </div>

        {/* FORM */}
        <h2 className="border-l-4 border-orange-400 pl-3 mb-6 font-bold text-orange-400">
          Send Message
        </h2>

        <form
          onSubmit={handleSubmit}
          className="p-6 rounded-xl space-y-4 mb-4"
          style={cardStyle}
        >
          <input
            name="name"
            placeholder="Name"
            className="w-full p-2 rounded bg-transparent border border-gray-400"
            required
          />

          <input
            name="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-transparent border border-gray-400"
            required
          />

          <input
            name="subject"
            placeholder="Subject"
            className="w-full p-2 rounded bg-transparent border border-gray-400"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            className="w-full p-2 rounded bg-transparent border border-gray-400"
            required
          />

          <button
            type="submit"
            className="w-full py-2 rounded font-bold bg-cyan-500 text-black hover:bg-yellow-400 transition"
          >
            Send Message
          </button>
        </form>

        {/* TOAST */}
        {showToast && (
          <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
            Message Sent Successfully!
          </div>
        )}
      </div>
    </section>
  );
}
