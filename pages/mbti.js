import React from "react";
import Image from "next/image";
import Navbar from "../components/common/Navbar";
import cogDescriptions from "../components/data/cog-description.json";
import Footer from "../components/common/Footer";
import SixteenPersonality from "../components/SixteenPersonality";
export default function Mbti() {
  return (
    <div>
      <Navbar />

      <div className={"container mx-auto lg:px-16 md:px-12 sm:px-4 px-4"}>
        <div className={"mt-12 max-w-3xl mx-auto"}>
          <h1 className={"text-2xl font-bold text-[#b358ce]"}>
            MBTI гэж юу вэ?
          </h1>
          <div className={"mt-6"}>
            <article>
              <p className={"font-semibold text-sm"}>
                Myers-Briggs Type Indicator буюу 16-н зан чанарын тест юм.
                Хүнийг 4(+1) шалгуураар 16-н төрлийн зан чанарт хуваадаг.
                Extroversion vs Introversion, Intuition vs Sensing, Thinking vs
                Feeling, Prospecting vs Judging, Turbulent vs Assertive. MBTI нь
                Big Five тесттэй төстэй хэмжүүртэй байдаг.
              </p>
            </article>
            <article className={"mt-10"}>
              <h1 className={"text-2xl font-bold mb-6 text-[#b358ce]"}>
                Cognitive function гэж юу вэ?
              </h1>
              <p className={"font-semibold text-sm"}>
                MBTI нь Carl Jung-ийн Cognitive Function Theory-гээс эх аван
                хийгдсэн систем юм. Зан чанар болгон 8-н cognitive function-ий
                4ээс нь бүтдэг. Хүн болгонд Thinking, Feeling, Sensing,
                Intuition өөр өөр хэмжээгээр байдаг хэмээн үздэг. Үүнээс 16-н
                төрлийн загварууд гарж ирсэн байдаг. Function гэдэг нь яг
                математикийн функц шиг, хүн болгонд яг адил түүхий бодит байдал
                Х-ийг функцдээ оруулахад хүн болгон өөрөөр хүлээж авж өөр өөр
                дүгнэлтэнд хүрдэг.
              </p>
              <div className={"flex justify-center mt-10"}>
                <Image src="/cogfunc.png" width={220} height={220} />
              </div>
            </article>
            <div className={"mt-20 text-center"}>
              <h1 className={"text-2xl font-bold text-[#b358ce] mb-4"}>
                16 зан чанарын Cognitive Function загвар
                <SixteenPersonality />
              </h1>

            </div>
            <article className={"mt-20"}>
              <h1 className={"text-2xl font-bold text-[#b358ce] mb-6"}>
                Cognitive Functions дэлгэрэнгүй
              </h1>

              <ul>
                <li className={"mb-8"}>
                  <h1 className={"text-md mb-6 font-bold "}>
                    Мэдээлэл найруулах function-ууд
                  </h1>
                  <p className={"font-normal mb-2  text-sm"}>
                    <span className={"font-bold text-xl"}>Si </span> -
                    {cogDescriptions.Si.text}
                  </p>
                  <p className={"font-normal text-sm"}>
                    <span className={"font-bold text-xl"}>Ni </span> -
                    {cogDescriptions.Ni.text}
                  </p>
                </li>
                <li className={"mb-8"}>
                  <h1 className={"text-md mb-6 font-bold "}>
                    Мэдээлэл цуглуулагч function-ууд
                  </h1>
                  <p className={"font-normal text-sm"}>
                    <span className={"font-bold text-xl"}>Ne </span> -
                    {cogDescriptions.Ne.text}
                  </p>
                  <p className={"font-normal mb-2   text-sm"}>
                    <span className={"font-bold text-xl"}>Se </span> -
                    {cogDescriptions.Se.text}
                  </p>
                </li>
                <li className={"mb-8"}>
                  <h1 className={"text-md mb-6 font-bold "}>
                    Хувийн дүгнэлт гаргагч function-ууд
                  </h1>
                  <p className={"font-normal mb-2 text-sm"}>
                    <span className={"font-bold text-xl"}>Ti </span> -
                    {cogDescriptions.Ti.text}
                  </p>
                  <p className={"font-normal text-sm"}>
                    <span className={"font-bold text-xl"}>Fi </span> -
                    {cogDescriptions.Fi.text}
                  </p>
                </li>
                <li className={"mb-8"}>
                  <h1 className={"text-md mb-6 font-bold"}>
                    Обьектив дүгнэлт хүлээн авах function-ууд
                  </h1>
                  <p className={"font-normal mb-2  text-sm"}>
                    <span className={"font-bold text-xl"}>Te </span> -
                    {cogDescriptions.Te.text}
                  </p>
                  <p className={"font-normal text-sm"}>
                    <span className={"font-bold text-xl"}>Fe </span> -
                    {cogDescriptions.Fe.text}
                  </p>
                </li>
              </ul>
            </article>
            <p className={"text-center text-sm mt-12 text-gray-400"}>Удахгүй 16 personality тус бүрд нь тайлбар оруулах болно. Илүү ихийг IG: @mbti_mongolia дээрээс үзээрэй.</p>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
