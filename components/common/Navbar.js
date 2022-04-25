import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Logo from "/public/logo.jpg";
import { FaDiscord } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import TestButton from "./TestButton.js";
import styles from "/styles/navbar.module.css";
export default function Navbar() {
  const [mobNavbar, setMobNavbar] = useState(false);
  return (
    <div className={styles.navbar_shadow}>
      {/* Desktop */}
      <nav
        className={
          "container hidden sm:block mx-auto lg:px-16 md:px-12 sm:px-4 px-4 py-2"
        }
      >
        <ul className={"flex flex-row justify-between"}>
          <div className={"flex flex-row items-center"}>
            <li className={"pr-6 flex shrink-0"}>
              <Link href="/">
                <a>
                  <Image
                    className={"rounded-full "}
                    src={Logo}
                    alt="MBTI Mongolia Logo"
                    width={"50px"}
                    height={"50px"}
                  />
                </a>
              </Link>
            </li>
            <li className={"ml-4 hidden md:block"}>
              <Link href="/mbti">
                <a className={"text-gray-600 hover:text-black"}>MBTI</a>
              </Link>
            </li>
            <li className={"ml-8 hidden md:block"}>
              <Link href="/faq">
                <a className={"text-gray-600 hover:text-black"}>FAQ</a>
              </Link>
            </li>
          </div>
          <div className={"flex flex-row items-center"}>
            <li className={"mr-2 md:mr-6"}>
              <Link href="/test">
                <a>
                  {" "}
                  <TestButton />
                </a>
              </Link>
            </li>
            <li className={"hidden md:block"}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.gg/a3tUXncYBG"
                className={"cursor-pointer "}
              >
                {/* <FaDiscord
                  className={""}
                  style={{ color: "rgb(210,162,55)" }}
                  size={"3rem"}
                /> */}
              </a>
            </li>
          </div>
        </ul>
      </nav>
      <div className={"border-b-2"}></div>
      {/* Mobile */}
      <nav
        className={
          "container block sm:hidden mx-auto lg:px-16 md:px-12 sm:px-4 px-4 py-2"
        }
      >
        <ul className={"flex flex-row justify-between"}>
          <div className={"flex flex-row items-center"}>
            <li className={"pr-6 flex shrink-0"}>
              <Link href="/">
                <a>
                  <Image
                    className={"rounded-full "}
                    src={Logo}
                    alt="MBTI Mongolia Logo"
                    width={"50px"}
                    height={"50px"}
                  />
                </a>
              </Link>
            </li>
            <li className={"ml-4 hidden md:block"}>
              <Link href="/mbti">
                <a className={"text-gray-600 hover:text-black"}>MBTI</a>
              </Link>
            </li>
            <li className={"ml-8 hidden md:block"}>
              <Link href="/faq">
                <a className={"text-gray-600 hover:text-black"}>FAQ</a>
              </Link>
            </li>
          </div>
          <div className={"flex flex-row items-center"}>
            <li className={"mr-2 md:mr-6"}>
              <Link href="/test">
                <a>
                  {" "}
                  <TestButton />
                </a>
              </Link>
            </li>
            <li className={"ml-4"}>
              <a
                onClick={() => {
                  !mobNavbar ? setMobNavbar(true) : setMobNavbar(false);
                }}
              >
                <GiHamburgerMenu size={"24px"} />
              </a>
            </li>
          </div>
        </ul>
      </nav>
      {mobNavbar && (
        <div className={"w-full"}>
          <div className={""}>
            <Link href="/mbti" className="flex flex-row justify-end">
              <a className={"text-blue-500 w-full text-right hover:text-black"}>
                <p className={"py-2 pr-4"}>MBTI-ийн тухай</p>
              </a>
            </Link>
          </div>
          <div className={"border-b-2"}></div>

          <div>
            <Link href="/faq">
              <a className={"text-blue-500 text-right w-full hover:text-black"}>
              <p className={"py-2 pr-4"}>Түгээмэл асуултууд</p>
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
