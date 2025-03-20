import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <section
      id="footer"
      className="container mx-auto mt-12 p-8 flex max-sm:flex-col sm:justify-between justify-center items-center gap-10 "
    >
      <p className="text-white-200 caption-bottom lg:block">
        © 2025 All right reserved.
      </p>

      <ul className="flex flex-wrap gap-10">
        <a href="" target="_blank" className="">
          <AiFillGithub size={30} />
        </a>
        <a href="" target="_blank" className="">
          <AiFillLinkedin size={30} />
        </a>
        <a href="" target="_blank" className="">
          <AiFillInstagram size={30} />
        </a>
      </ul>
    </section>
  );
}

export default Footer;
