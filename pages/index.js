import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.jpg";
import Navbar from "../components/common/Navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import TestButton from "../components/common/TestButton";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Footer from "../components/common/Footer";

export default function Home() {
  const [personality, setPersonality] = useState("");
  const [resultURL, setResultURL] = useState("");
  useEffect(() => {
    let personality = localStorage.getItem("personality");
    let url = localStorage.getItem("url");
    if (personality) {
      setPersonality(personality);
      setResultURL(url);
    }
    console.log("get item", localStorage.getItem("personality"));
  }, []);
  const [preTest, setPreTest] = useState("");

  const checkPreviousTest = () => {
    let answer = window.localStorage.getItem("previousTest");
    if (answer) {
      setPreTest(answer);
    }
    console.log(preTest);
  };

  return (
    <div className={""}>
      
      <Navbar />
      <main className={""}>
        <div
          className={"container mx-auto lg:px-16 md:px-12 sm:px-4 px-4 my-12"}
        >
          <div className={"grid md:grid-cols-2 gap-6 mb-20"}>
            <div className={"flex flex-col mt-6"}>
              <div className={""}>
                <h1 className={"text-6xl font-semibold mb-6"}>
                  Зан чанарын тест
                </h1>
                <h4 className={"text-1xl text-gray-600"}>
                  Бид уг тестийг сайн дураараа хийсэн болно. Уг тестийг Jungian
                  Typology буюу Cognitive personality theory-ээс эх аван хийсэн.
                  Өөрийнхөө жинхэнэ зан чанараа олж мэдэхийн тулд цаг заваа
                  гаргаж, шударгаар хариулаарай! Жич: Зан чанарын хариу дангаар
                  гарах тул илүү мэдээллийг манай Instagram хуудсаас олж
                  уншаарай.
                </h4>
                <div className={"mt-4"}>
                  <Link href="/mbti">
                    <a className={"px-4 py-1 text-black text-sm border-black border-2 rounded-full"}>
                      Илүү ихийг унших
                    </a>
                  </Link>
                </div>

                <div className={"w-40 mt-4"}>
                  <Link href="/test">
                    <a>
                      {" "}
                      <TestButton />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={"flex justify-center"}>
              <div>
                <Image
                  className={"rounded-full "}
                  alt="MBTI Mongolia Logo big"
                  src={Logo}
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
          <div className={"flex flex-col items-center justify-center"}>
            <h1 className={"text-center font-medium mb-3"}>Хариуны Код:</h1>
            <div
              className={
                " w-60 md:w-96 flex flex-row justify-between items-center border-2 rounded-2xl"
              }
            >
              <input
                className={"rounded-2xl flex-1 outline-none px-3"}
                type="input"
              />
              <a
                style={{ backgroundColor: "rgb(65,142,89)", color: "white" }}
                className={
                  "cursor-pointer outline-0 rounded-2xl px-2 py-1 flex justify-center text-center max-h-full"
                }
              >
                <BsSearch size={"25px"} />
              </a>
            </div>
            {personality && (
              <div className={"mt-6"}>
                <h1 className={"text-center mb-3 font-medium"}>Өмнөх хариу:</h1>
                <div className={"flex justify-center"}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`/result/${resultURL}`}
                    className={
                      "border-2 text-white text-xl bg-[#7A468A] px-10 py-4 rounded-full"
                    }
                  >
                    {personality}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Section 2 */}
        <div></div>
      </main>

      {/* to deploy */}

      <footer className={""}>
        <Footer />
      </footer>
    </div>
  );
}
