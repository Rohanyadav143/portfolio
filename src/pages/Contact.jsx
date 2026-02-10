import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { BiMap, BiShareAlt, BiEnvelope, BiPhone } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaLaptopCode } from "react-icons/fa";

export default function Contact() {
  const [formMessage, setFormMessage] = useState("");
  const [showToast, setShowToast] = useState(false); // toast state

  const handleSubmit = (e) => {
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
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormMessage("");
          e.target.reset(); // reset the form

          // show toast
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3000); // hide after 3s
        },
        (error) => {
          console.log("FAILED...", error);
          setFormMessage("Failed to send message. Please try again.");
        },
      );
  };

  return (
    <section className="bg-[#00091a] min-h-screen py-0 text-white relative">
      <h6 className="ml-[15%] mt-0 font-bold text-orange-400 mb-8">
        Contact ---------
      </h6>

      {/* First Row: My Address + Social Profiles */}
      <div className="container mx-auto grid md:grid-cols-2 sm:grid-cols-1 gap-6 mb-6 max-w-4xl">
        <div className="bg-[#160000] p-4 rounded-lg flex gap-3 items-start hover:-translate-y-2 transition-transform">
          <BiMap className="text-3xl mt-1 text-yellow-300" />
          <div>
            <p className="font-bold text-green-400">My Address</p>
            <h6>Abdul chalkIslam</h6>
            <h6>Post - Dandopur</h6>
            <h6>Dist - Kushinagar</h6>
            <h6>Pin - 274304</h6>
          </div>
        </div>

        <div className="bg-[#160000] p-4 rounded-lg flex flex-col gap-3 hover:-translate-y-2 transition-transform">
          <div className="flex gap-3 items-start">
            <BiShareAlt className="text-3xl mt-1 text-yellow-300" />
            <p className="font-bold text-green-400">Social Profiles</p>
          </div>
          <div className="flex gap-4 ml-9 mt-2 text-2xl">
            <a
              href="https://github.com/Rohanyadav143"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-yadav-20b064255"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/rohn1895"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400"
            >
              <FaLaptopCode />
            </a>
          </div>
        </div>
      </div>

      {/* Second Row: Emails + Contacts */}
      <div className="container mx-auto grid md:grid-cols-2 sm:grid-cols-1 gap-6 mb-16 max-w-4xl">
        <div className="bg-[#160000] p-4 rounded-lg flex gap-3 items-start hover:-translate-y-2 transition-transform">
          <BiEnvelope className="text-3xl mt-1 text-yellow-300" />
          <div>
            <p className="font-bold text-green-400">Emails</p>
            <h6>rohn1895@gmail.com</h6>
            <h6>ry703606@gmail.com</h6>
          </div>
        </div>

        <div className="bg-[#160000] p-4 rounded-lg flex gap-3 items-start hover:-translate-y-2 transition-transform">
          <BiPhone className="text-3xl mt-1 text-yellow-300" />
          <div>
            <p className="font-bold text-green-400">Contacts</p>
            <h6>+91 - 8423712322</h6>
            <h6>+91 - 8604626646</h6>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto">
        <h6 className="ml-[10%] mt-0 font-bold text-orange-400 mb-8">
          Send a Message ----------
        </h6>
        <form
          className="bg-gradient-to-r from-[#1a1a2e] to-[#162447] p-6 rounded-lg shadow-lg pb-16"
          onSubmit={handleSubmit}
        >
          <label className="block font-bold text-green-400 mb-2">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full mb-4 p-2 rounded bg-[#0f1621] text-white border border-gray-600"
            required
          />

          <label className="block font-bold text-green-400 mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full mb-4 p-2 rounded bg-[#0f1621] text-white border border-gray-600"
            required
          />

          <label className="block font-bold text-green-400 mb-2">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Enter subject"
            className="w-full mb-4 p-2 rounded bg-[#0f1621] text-white border border-gray-600"
            required
          />

          <label className="block font-bold text-green-400 mb-2">Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message here"
            className="w-full mb-4 p-2 rounded bg-[#0f1621] text-white border border-gray-600"
            required
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#ffaa00] to-[#a800b7] font-bold py-2 rounded hover:scale-105 hover:from-[#21ff00] hover:to-[#0099ff] transition-transform"
          >
            Send
          </button>
        </form>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
          Message sent successfully!
        </div>
      )}
    </section>
  );
}
