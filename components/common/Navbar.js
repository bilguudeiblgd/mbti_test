import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Logo from "/public/logo.jpg";
import { FaDiscord } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import TestButton from "./TestButton.js";
import styles from "/styles/navbar.module.css";
import { FaHamburger } from "react-icons/fa";
export default function Navbar() {
  const [mobNavbar, setMobNavbar] = useState(false);
  // const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-3 border-solid border-b-2">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
          <img
            src="/logo.jpg"
            className="mr-3 h-9 sm:h-9 rounded-full"
            alt="Flowbite Logo"
          />
        </Link>
        <div className="flex md:order-2">
          <Link href="/test">
            <a>
              <TestButton />
            </a>
          </Link>
          <button
            type="button"
            className="ml-2 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
            aria-controls="mobile-menu-4"
            aria-expanded="false"
            onClick={() => setMobNavbar(!mobNavbar)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link href="/mbti">
                <a
                  className="text-base block py-2 pr-4 pl-3 text-gray-400 hover:text-gray-700 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  MBTI
                </a>
              </Link>
            </li>
            <li>
              <Link href="/faq">
                <a className="text-base block py-2 pr-4 pl-3 text-gray-400 hover:text-gray-700 rounded md:bg-transparent md:p-0">
                  FAQ
                </a>
              </Link>
            </li>
            <li>
              <Link href="/personalities">
                <a className="text-base block py-2 pr-4 pl-3 text-gray-400 hover:text-gray-700 rounded md:bg-transparent md:p-0">
                  16 Personalities
                </a>
              </Link>
            </li>
          </ul>
        </div>
        {mobNavbar && (
          <div
            className=" justify-between items-center w-full md:flex md:w-auto md:order-1 relative"
            id="mobile-menu-4"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium absolute w-full bg-gray-100 shadow-sm rounded-md">
              <li>
                <Link href="/mbti">
                  <a className="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-900 rounded md:bg-transparent md:p-0 m-1">
                    MBTI
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-900 rounded md:bg-transparent md:p-0 m-1">
                    FAQ
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/personalities">
                  <a className="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-900 rounded md:bg-transparent md:p-0 m-1">
                    16 Personalities
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
    // <div className={styles.navbar_shadow}>
    //   {/* Desktop */}
    //   <nav
    //     className={
    //       "container hidden sm:block mx-auto lg:px-16 md:px-12 sm:px-4 px-4 py-2"
    //     }
    //   >
    //     <ul className={"flex flex-row justify-between"}>
    //       <div className={"flex flex-row items-center"}>
    //         <li className={"pr-6 flex shrink-0"}>
    //           <Link href="/">
    //             <a>
    //               <Image
    //                 className={"rounded-full "}
    //                 src={Logo}
    //                 alt="MBTI Mongolia Logo"
    //                 width={"50px"}
    //                 height={"50px"}
    //               />
    //             </a>
    //           </Link>
    //         </li>
    //         <li className={"ml-4 hidden md:block"}>
    //           <Link href="/mbti">
    //             <a className={"text-gray-600 hover:text-black"}>MBTI</a>
    //           </Link>
    //         </li>
    //         <li className={"ml-8 hidden md:block"}>
    //           <Link href="/faq">
    //             <a className={"text-gray-600 hover:text-black"}>FAQ</a>
    //           </Link>
    //         </li>
    //         <li className={"ml-8 hidden md:block"}>
    //           <Link href="/personalities">
    //             <a className={"text-gray-600 hover:text-black"}>16 Personalities</a>
    //           </Link>
    //         </li>
    //       </div>
    //       <div className={"flex flex-row items-center"}>
    //         <li className={"mr-2 md:mr-6"}>
    //           <Link href="/test">
    //             <a>
    //               {" "}
    //               <TestButton />
    //             </a>
    //           </Link>
    //         </li>
    //         <li className={"hidden md:block"}>
    //           <a
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             href="https://discord.gg/a3tUXncYBG"
    //             className={"cursor-pointer "}
    //           >
    //             {/* <FaDiscord
    //               className={""}
    //               style={{ color: "rgb(210,162,55)" }}
    //               size={"3rem"}
    //             /> */}
    //           </a>
    //         </li>
    //       </div>
    //     </ul>
    //   </nav>
    //   <div className={"border-b-2"}></div>
    //   {/* Mobile */}
    //   <nav
    //     className={
    //       "container block sm:hidden mx-auto lg:px-16 md:px-12 sm:px-4 px-4 py-2"
    //     }
    //   >
    //     <ul className={"flex flex-row justify-between"}>
    //       <div className={"flex flex-row items-center"}>
    //         <li className={"pr-6 flex shrink-0"}>
    //           <Link href="/">
    //             <a>
    //               <Image
    //                 className={"rounded-full "}
    //                 src={Logo}
    //                 alt="MBTI Mongolia Logo"
    //                 width={"50px"}
    //                 height={"50px"}
    //               />
    //             </a>
    //           </Link>
    //         </li>
    //         <li className={"ml-4 hidden md:block"}>
    //           <Link href="/mbti">
    //             <a className={"text-gray-600 hover:text-black"}>MBTI</a>
    //           </Link>
    //         </li>
    //         <li className={"ml-8 hidden md:block"}>
    //           <Link href="/faq">
    //             <a className={"text-gray-600 hover:text-black"}>FAQ</a>
    //           </Link>
    //         </li>
    //       </div>
    //       <div className={"flex flex-row items-center"}>
    //         <li className={"mr-2 md:mr-6"}>
    //           <Link href="/test">
    //             <a>
    //               {" "}
    //               <TestButton />
    //             </a>
    //           </Link>
    //         </li>
    //         <li className={"ml-4"}>
    //           <a
    //             onClick={() => {
    //               !mobNavbar ? setMobNavbar(true) : setMobNavbar(false);
    //             }}
    //           >
    //             <GiHamburgerMenu size={"24px"} />
    //           </a>
    //         </li>
    //       </div>
    //     </ul>
    //   </nav>
    //   {mobNavbar && (
    //     <div className={"w-full"}>
    //       <div className={""}>
    //         <Link href="/mbti" className="flex flex-row justify-end">
    //           <a className={"text-blue-500 w-full text-right hover:text-black"}>
    //             <p className={"py-2 pr-4"}>MBTI-ийн тухай</p>
    //           </a>
    //         </Link>
    //       </div>
    //       <div className={"border-b-2"}></div>

    //       <div>
    //         <Link href="/faq">
    //           <a className={"text-blue-500 text-right w-full hover:text-black"}>
    //           <p className={"py-2 pr-4"}>Түгээмэл асуултууд</p>
    //           </a>
    //         </Link>
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
}
