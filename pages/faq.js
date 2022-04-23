import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function faq() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Navbar />
      <div className={"container mx-auto lg:px-16 md:px-12 sm:px-4 px-4 mt-12"}>
        <div className={"max-w-lg mx-auto mt-12 mb-36"}>
        <h1 className={"text-3xl text-center mb-12 font-bold text-[#b358ce]"}>
            Түгээмэл асуултууд
          </h1>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p className={"text-sm font-semibold"}>
                Яагаад Extro vs Intro шалгасан асуултууд байхгүй байгаа вэ?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className={"text-sm"}>
                - ENTP, ENFP, ENTJ гэх мэтийн зарим зан чанарууд тестууд дээр
                introvert гарах хандлагатай байдаг тул албаар асуугаагүй.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <p className={"text-sm font-semibold"}>
                Яагаад 16personality.com-ийн хариунаас шал өөр хариу гарна вэ?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className={"text-sm"}>
                - Англи тестийн асуултыг янз бүрээр ойлгохоос гадна тест авж буй
                хэмжүүрүүд нь mistype буюу оновчгүй хариу гаргахад хүргэдэг.
                Үүнтэй тэмцэхийн тулд энэхүү тестийг хийсэн юм. Энэхүү тест нь
                Intuitive vs Sensing, Introvert vs Extrovert, Thinking vs
                Feeling гэх мэтийн хар цагаан аргаар тестлэх бус cognitive
                function-ийг шалгаж хариу гаргадаг. Зан чанар бүрд thinking,
                feeling, sensing, intuiting зэрэг агуулагдаж байдаг ба заримдаа
                тэд нь хосолж ажилдаг. Жишээ нь ENTP нь {"Ne>Ti>Fe>Si"} гэсэн
                загвартай голд байгаа 2 function нь хоорондоо солбилцдог тул
                ENTP нь бусад тестууд дээр Feeler гэж гарах боломжтой байдаг.
                Мөн ENTP зан чанартай хүмүүс ambivert байдаг тул INTP гэж гарах
                хандлагатай. Жич: жинхэнэ INTP нь хамгийн introverted type гэсэн
                байдаг.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <p className={"text-sm font-semibold"}>
                Тест өгөх болгонд өөр гараад байх юм, энэ ямар учиртай вэ?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className={"text-sm"}>
                - Тухайн өдрийн сэтгэл санааны байдал, өөрийн талаар үзэл, гэх
                мэтийн дуусашгүй их хүчин зүйлс нөлөөлнө. Тест бол эцэст нь тест
                учир гарсан хариуг зөвхөн эхлэх цэг болгох нь зөв. Хэрвээ ямар
                зан чанартай таарах эсэхээ мэдэхгүй байвал MBTI сайн мэддэг
                хүнтэй ярилцах нь хамгийн шилдэг арга.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <p className={"text-sm font-semibold"}>
                Миний хамгийн ойролцоо санагддаг зан чанараас тэс ондоо хариулт
                гарж ирж байна?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className={"text-sm"}>
                - Та өөрийн хариуны линк-ийг хамгийн ойр санагддаг зан
                чанартайгаа манай google form-оор явуулж тестийг сайжруулахад
                тус болно уу.
              </p>
            </AccordionDetails>
          </Accordion>
          <div>
            <p className={"text-sm mt-6 text-center"}>
              Таньд ямар нэгэн эргэлзээтэй зүйл байвал бидний Mail-ээр
              холбогдоорой {":)"}
            </p>
          </div>
        </div>
      </div>
        <div className={"mt-12"}>
        <Footer />
        </div>
       
     
    </div>
  );
}
