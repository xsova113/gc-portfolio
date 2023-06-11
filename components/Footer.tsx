import React from "react";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 transition bg-neutral-300 dark:bg-neutral-500 border-0" />
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="text-neutral-500 dark:text-neutral-100">
          © 2023 George Chang
        </div>

        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/xsova113" rel="noreferrer" target="_new">
            <AiOutlineGithub
              className="hover:-translate-y-1 dark:fill-white transition-transform cursor-pointer"
              size={30}
            />
          </a>
          <a
            href="https://www.instagram.com/georgeclife/"
            rel="noreferrer"
            target="_new"
          >
            <AiOutlineInstagram
              className="hover:-translate-y-1 dark:fill-white transition-transform cursor-pointer"
              size={30}
            />
          </a>
          <a
            href="https://www.facebook.com/george.chang.392"
            rel="noreferrer"
            target="_new"
          >
            <AiOutlineFacebook
              className="hover:-translate-y-1 dark:fill-white transition-transform cursor-pointer"
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/george-chang-b0121513a/"
            rel="noreferrer"
            target="_new"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 dark:fill-white transition-transform cursor-pointer"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
