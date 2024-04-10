import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-[100vh] body-padding pt-1 hide-scrollbar"
    >
      <section className=" md:mt-24 mt-20">
        <h2 className="font-[Outfit-Semibold] text-center text-2xl font-bold text-prm border-b-2 border-b-prm">
          Contact Us
        </h2>
        {/* https://www.instagram.com/direct/t/17846087030622824/ */}
        <div className="flex justify-between items-center mt-20 md:flex-row flex-col">
          <div className="contact-info-box w-full pl-[0.30rem] h-full">
            <h3 className="text-[1.5rem] sm:text-[2rem] text-center mb-4 font-[Outfit-Medium]">
              Connect through our socials
            </h3>
            <div className="icons flex gap-4 items-center justify-center">
              <a
                href="https://www.instagram.com/direct/t/17846087030622824/"
                target="_blank"
                rel="noreferrer"
                className="text-xl sm:text-2xl bg-prm text-white grid place-items-center sm:size-12 size-10 rounded-full hover:bg-transparent hover:border-prm hover:border-2 hover:text-prm"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=9265598428"
                target="_blank"
                rel="noreferrer"
                className="text-xl sm:text-2xl bg-prm text-white grid place-items-center sm:size-12 size-10 rounded-full hover:bg-transparent hover:border-prm hover:border-2 hover:text-prm"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a
                href="mailto:fazilathar856@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="text-xl sm:text-2xl bg-prm text-white grid place-items-center sm:size-12 size-10 rounded-full hover:bg-transparent hover:border-prm hover:border-2 hover:text-prm"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
          <div className="md:w-[60rem] sm:w-11/12 md:px-10 mt-6 sm:mt-0">
            <form className="flex flex-col border-prm border-2 p-8">
              <h3 className="text-[1.5rem] sm:text-[2rem] text-center mb-2 font-[Outfit-Medium]">
                How can we help?
              </h3>
              <input
                name="name"
                className="change bg-transparent border-prm border px-2 py-1 rounded mb-4 w-full"
                type="text"
                placeholder="Name"
              />

              <input
                name="subject"
                className="change bg-transparent border-prm border px-2 py-1 rounded mb-4 w-full"
                type="text"
                placeholder="Subject"
              />

              <input
                name="email"
                className="change bg-transparent border-prm border px-2 py-1 rounded mb-4 w-full"
                type="email"
                placeholder="Email"
              />
              <textarea
                className="change bg-transparent border-prm border px-2 py-1 rounded mb-4resize-none  w-full"
                name="desc"
                id="desc"
                cols="30"
                row="5"
                placeholder="Message"
              ></textarea>
              <button
                type="button"
                className="font-medium bg-prm px-5 py-2 rounded-full text-white mt-6 hover:outline hover:outline-[var(--prm-clr)] hover:bg-transparent hover:text-prm active:bg-prm active:text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
