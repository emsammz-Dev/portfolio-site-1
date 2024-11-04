"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import { useEffect, useRef } from "react";

import type {
  AccordionOptions,
  AccordionItem,
  AccordionInterface,
  InstanceOptions,
} from "flowbite";

export default function Home() {
  const accordianRef = useRef(null);

  useEffect(() => {
    const accordionItems: AccordionItem[] = [
      {
        id: "accordion-flush-heading-1",
        triggerEl: document.querySelector("#accordion-flush-heading-1")!,
        targetEl: document.querySelector("#accordion-flush-body-1")!,
        active: true,
      },
      {
        id: "accordion-flush-heading-2",
        triggerEl: document.querySelector("#accordion-flush-heading-2")!,
        targetEl: document.querySelector("#accordion-flush-body-2")!,
        active: false,
      },
      {
        id: "accordion-flush-heading-3",
        triggerEl: document.querySelector("#accordion-flush-heading-3")!,
        targetEl: document.querySelector("#accordion-flush-body-3")!,
        active: false,
      },
    ];
    const options: AccordionOptions = {
      alwaysOpen: false,
      activeClasses: "bg-green-300 text-black rounded-lg",
      inactiveClasses: "text-black/80",
    };
    const instanceOptions: InstanceOptions = {
      id: "accordion-flush",
      override: true,
    };
    import("flowbite").then(({ Accordion }) => {
      const accordionElement = accordianRef.current;

      const accordion: AccordionInterface = new Accordion(
        accordionElement,
        accordionItems,
        options,
        instanceOptions
      )!;
    });
  }, []);

  // causing issue
  // const container = {
  //   hidden: { y: 20, opacity: 0 },
  //   show: {
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.1,
  //     },
  //   },
  // };

  // const item = {
  //   hidden: { y: 20, opacity: 0 },
  //   show: { y: 0, opacity: 1 },
  // };

  return (
    <>
      <div>
        {/* 1 */}
        <motion.div className="h-screen flex bg-gradient-to-r from-violet-400/10 via-lime-200/30 to-violet-400/10 font-mono">
          <motion.div className="flex-1 flex gap-4 flex-col justify-center items-center text-xl">
            <div className="rounded-xl border-2">Al CONTENT GENERATOR</div>
            <div className="flex flex-col text-center">
              <div className="text-5xl">CONTENT CREATOR IN</div>
              <div>In Seconds</div>
            </div>
            <div className="text-center text-balance">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              quas?
            </div>
            <button className="bg-green-300 p-2 rounded-lg">
              reate my content(it's free)
            </button>
          </motion.div>
        </motion.div>
        {/* 2 */}
        <motion.div className="flex h-96 justify-center items-center flex-col gap-4">
          <motion.div
            className="bg-green-100 px-2 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.2 }}
          >
            KEY FEATURES
          </motion.div>
          <div className="text-center">
            <motion.div
              className="text-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.2 }}
            >
              Automate your content creation & save time
            </motion.div>
            <motion.div
              className="text-center text-balance text-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.2 }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
              necessitatibus? Lorem ipsum dolor sit amet.
            </motion.div>
          </div>
        </motion.div>
        {/* 3 */}
        <div className="text-center flex max-xl:flex-col gap-4 bg-green-100/50 rounded-xl">
          <div className="flex-1 flex flex-col justify-center items-center gap-4">
            <div>
              <div className="text-3xl">Get 100s of click-worthy headlines</div>
              <div className="text-center text-balance text-xl">
                Stuck on what to write about? Our tool creates crafty and
                click-worthy headlines for your next blog post or piece of
                content, helping you save lots of time.
              </div>
            </div>
            <button className="bg-green-300 p-2 rounded-lg">
              GET STARTED NOW
            </button>
            <div className="flex items-center gap-2 border-2 rounded-xl p-1">
              <div className="text-xl">
                <div className="font-semibold">Article generated</div>
                <div>1.12K</div>
              </div>
              <div className="text-xl">
                <div className="font-semibold">Headlines generated</div>
                <div>1.12K</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="/image.avif"
              width={400}
              height={400}
              alt="image"
              priority
              style={{ width: "auto", height: "auto" }}
            ></Image>
          </div>
        </div>
        {/* 4 */}
        <motion.div className="flex h-96  justify-center items-center flex-col gap-4">
          <motion.div
            className="bg-green-100 px-2 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.2 }}
          >
            KEY FEATURES
          </motion.div>
          <div className="text-center">
            <motion.div
              className="text-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.2 }}
            >
              Automate your content creation & save time
            </motion.div>
            <motion.div
              className="text-center text-balance text-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.2 }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
              necessitatibus? Lorem ipsum dolor sit amet.
            </motion.div>
          </div>
        </motion.div>
        {/* 5 */}
        <div className="flex max-xl:flex-col max-xl:gap-4 bg-green-100/50 mt-20 p-4 overflow-hidden">
          <motion.div
            className="flex-1 flex flex-col items-center border-r-2 gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <div className="text-3xl">Article Writng</div>
            <div className="text-balance text-center text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet.
            </div>
            <Image
              className="flex-1"
              src="/image2.avif"
              width={400}
              height={400}
              alt="image2"
              priority
              style={{ width: "auto", height: "auto" }}
            ></Image>
          </motion.div>
          <motion.div
            className="flex-1 flex flex-col items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <div className="text-3xl">Social media posts</div>
            <div className="text-balance text-center text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus eum placeat tenetur!
            </div>
            <Image
              className="flex-1"
              src="/image3.avif"
              width={400}
              height={400}
              alt="image3"
              priority
            ></Image>
          </motion.div>
        </div>
        {/* 6 */}
        <div>
          {/* 61 */}
          <div className="flex flex-col pt-16 gap-6 items-center">
            <motion.div
              className="bg-green-300 p-2 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.2 }}
            >
              WHY CHOOSE US
            </motion.div>
            <motion.div
              className="text-5xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.2 }}
            >
              Our user base is growing every day
            </motion.div>
          </div>
          {/* 62 */}
          <motion.div
            className="flex mt-14  text-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.2 }}
          >
            <div className="flex-1 flex flex-col justify-center items-center pt-10">
              <div>40+</div>
              <div>users</div>
            </div>
            <div className="flex-1 flex flex-col border-x-4 justify-center items-center pt-10">
              <div>40+</div>
              <div>users</div>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center pt-10">
              <div>40+</div>
              <div>users</div>
            </div>
          </motion.div>
        </div>
        {/* 7 */}
        <div className="flex max-xl:flex-col h-[450px] max-xl:h-[500px] mt-16 border-y-2  bg-green-100/50 p-2">
          <div className="xl:flex-1 text-3xl flex justify-center items-center">
            Frequently Ask Questions??
          </div>
          <div
            className="flex-1"
            ref={accordianRef}
            id="accordion-flush"
            data-accordion="collapse"
          >
            <h2 id="accordion-flush-heading-1">
              <button
                type="button"
                className="flex items-center w-full p-5 gap-3 border-b-2"
                data-accordion-target="#accordion-flush-body-1"
                aria-expanded="true"
                aria-controls="accordion-flush-body-1"
              >
                <span>What is Flowbite?</span>
                <svg
                  data-accordion-icon
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-1"
              className="hidden"
              aria-labelledby="accordion-flush-heading-1"
            >
              <div className="p-5 border-b">
                <p className="mb-2">
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
                <p>
                  Check out this guide to learn how to
                  <a
                    href="/docs/getting-started/introduction/"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    get started
                  </a>{" "}
                  and start developing websites even faster with components on
                  top of Tailwind CSS.
                </p>
              </div>
            </div>
            {/* 2 */}
            <h2 id="accordion-flush-heading-2">
              <button
                type="button"
                className="flex items-center w-full p-5 gap-3 border-b-2"
                data-accordion-target="#accordion-flush-body-2"
                aria-expanded="false"
                aria-controls="accordion-flush-body-2"
              >
                <span>Is there a Figma file available?</span>
                <svg
                  data-accordion-icon
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-2"
              className="hidden"
              aria-labelledby="accordion-flush-heading-2"
            >
              <div className="p-5 border-b">
                <p className="mb-2">
                  Flowbite is first conceptualized and designed using the Figma
                  software so everything you see in the library has a design
                  equivalent in our Figma file.
                </p>
                <p>
                  Check out the{" "}
                  <a
                    href="https://flowbite.com/figma/"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Figma design system
                  </a>{" "}
                  based on the utility classes from Tailwind CSS and components
                  from Flowbite.
                </p>
              </div>
            </div>
            {/* 3 */}
            <h2 id="accordion-flush-heading-3">
              <button
                type="button"
                className="flex items-center w-full p-5 gap-3 border-b-2"
                data-accordion-target="#accordion-flush-body-3"
                aria-expanded="false"
                aria-controls="accordion-flush-body-3"
              >
                <span>
                  What are the differences between Flowbite and Tailwind UI?
                </span>
                <svg
                  data-accordion-icon
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-3"
              className="hidden"
              aria-labelledby="accordion-flush-heading-3"
            >
              <div className="p-5 border-b">
                <p className="mb-2">
                  The main difference is that the core components from Flowbite
                  are open source under the MIT license, whereas Tailwind UI is
                  a paid product. Another difference is that Flowbite relies on
                  smaller and standalone components, whereas Tailwind UI offers
                  sections of pages.
                </p>
                <p className="mb-2">
                  However, we actually recommend using both Flowbite, Flowbite
                  Pro, and even Tailwind UI as there is no technical reason
                  stopping you from using the best of two worlds.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 8 */}
        <div className="flex flex-col  h-96 items-center justify-center gap-4">
          <motion.div
            className="bg-green-300 rounded-xl p-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.2 }}
          >
            GET YOUR CONTENT
          </motion.div>
          <motion.div
            className="text-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.2 }}
          >
            Automate your content creation today
          </motion.div>
          <motion.div
            className="text-center text-balance text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.2 }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            architecto, natus amet cumque dolores laborum cupiditate ad
            voluptatibus excepturi minus quidem ea veritatis quae non.
          </motion.div>
          <motion.div
            className="flex gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.2 }}
          >
            <div className="bg-green-300 rounded-lg text-2xl p-4">
              Generate My Content
            </div>
            <div className="bg-black/30 rounded-lg text-2xl p-4">All Tools</div>
          </motion.div>
        </div>
        {/* 9 */}
        <div>
          <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
              <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                  <a href="https://flowbite.com/" className="flex items-center">
                    <img
                      src="https://flowbite.com/docs/images/logo.svg"
                      className="h-8 me-3"
                      alt="FlowBite Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                      Flowbite
                    </span>
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                  <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                      Resources
                    </h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                        <a
                          href="https://flowbite.com/"
                          className="hover:underline"
                        >
                          Flowbite
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://tailwindcss.com/"
                          className="hover:underline"
                        >
                          Tailwind CSS
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                      Follow us
                    </h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                        <a
                          href="https://github.com/themesberg/flowbite"
                          className="hover:underline "
                        >
                          Github
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://discord.gg/4eeurUVvTy"
                          className="hover:underline"
                        >
                          Discord
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                      Legal
                    </h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                        <a href="#" className="hover:underline">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline">
                          Terms &amp; Conditions
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                  © 2023{" "}
                  <a href="https://flowbite.com/" className="hover:underline">
                    Flowbite™
                  </a>
                  . All Rights Reserved.
                </span>
                <div className="flex mt-4 sm:justify-center sm:mt-0">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 8 19"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Facebook page</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 21 16"
                    >
                      <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                    </svg>
                    <span className="sr-only">Discord community</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 17"
                    >
                      <path
                        fillRule="evenodd"
                        d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Twitter page</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">GitHub account</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Dribbble account</span>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
