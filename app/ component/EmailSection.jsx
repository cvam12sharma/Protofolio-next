"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import NextIcon from '/public/next.svg';

import { Github } from "./svgs";
import { Linkedin } from "./svgs";

// ... (other imports)

// ... (imports)

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative">
      <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/cvam12sharma">
            <Github className=" h-[75px] w-[75px]" />
          </Link>
          <Link href="https://www.linkedin.com/in/shivam-sharma-3b7a061a6/">
            <Linkedin className=" h-[75px] w-[75px]"/>
          </Link>
          <div>
            <Github/>
          </div>
        </div>
      </div>
      <div>
        <form action="https://getform.io/f/92145a2d-9758-4711-af40-927f25c55e78" method="POST">
          <div className="mb-6">
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Write your mail"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              id="subject"
              name="subject"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <textarea
              id="message"
              name="message"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let&apos;s talk about..."
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
