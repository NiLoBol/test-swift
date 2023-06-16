import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import ButtonCard from "./ButtonCard";
import { Row, Col, Layout } from "antd";
import CardImg from "./CardImg";

const Data = (count: number) => {
  if (count === 1) {
    return (
      <div className="d-flex justify-content-evenly">
        <svg viewBox="0 0 100 100" width="100" height="100">
          <polygon points="0,0 100,0 100,100 0,100" fill="#777777" />
        </svg>
      </div>
    );
  }
  if (count === 2) {
    return (
      <div className="d-flex justify-content-evenly ">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
          <circle cx="50" cy="50" r="50" fill="#777777" />
        </svg>
      </div>
    );
  }

  if (count === 3) {
    return (
      <div className="d-flex justify-content-evenly">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100">
          <ellipse cx="100" cy="50" rx="100" ry="50" fill="#777777" />
        </svg>
      </div>
    );
  }
  if (count === 4) {
    return (
      <div className="d-flex justify-content-evenly">
        <svg viewBox="0 0 200 100" width="200" height="100">
          <polygon points="50,0 150,0 200,100 0,100" fill="#777777" />
        </svg>
      </div>
    );
  }
  if (count === 5) {
    return (
      <div className="d-flex justify-content-evenly ">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100">
          <rect width="200" height="100" fill="#777777" />
        </svg>
      </div>
    );
  }
  if (count === 6) {
    return (
      <div className="d-flex justify-content-evenly">
        <svg viewBox="0 0 200 100" width="200" height="100">
          <polygon points="0,0 150,0 200,100 50,100" fill="#777777" />
        </svg>
      </div>
    );
  }
  return null; // คืนค่า null เป็นค่าเริ่มต้นสำหรับค่า count ที่ไม
};
const LayoutPage = () => {
  const { t } = useTranslation();
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6]);
  const [styleRow, setstyleRow] = useState(true);
  const randomizeNumbers = () => {
    const uniqueNumbers: number[] = [];
  
    while (uniqueNumbers.length < numbers.length) {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
  
      if (!uniqueNumbers.includes(randomNumber)) {
        uniqueNumbers.push(randomNumber);
      }
    }
  
    setNumbers(uniqueNumbers);
  };
  
  const leftMove = () => {
    const num0 = numbers[0];
    console.log(num0);

    setNumbers((prevNumbers) => {
      const updatedNumbers = prevNumbers.map((num, index) => {
        if (index === prevNumbers.length - 1) {
          return num0;
        } else {
          return prevNumbers[index + 1];
        }
      });

      return updatedNumbers.slice(0, updatedNumbers.length);
    });
  };
  const RightMove = () => {
    const num0 = numbers[5];
    console.log(num0);

    setNumbers((prevNumbers) => {
      const updatedNumbers = prevNumbers.map((num, index) => {
        if (index === 0) {
          return num0;
        } else {
          return prevNumbers[index - 1];
        }
      });

      return updatedNumbers.slice(0, updatedNumbers.length);
    });
  };

  return (
    <div className="h-100">
      <h1 className="mb-4">{t("Layout")}</h1>
      {/* content -> <-  */}
      <Row className="mb-5 " justify="center" align="middle">
        <span onClick={leftMove}>
          <CardImg texthead={t("MoveShape")}>
            <div className="d-flex justify-content-evenly">
              <svg viewBox="0 0 100 100" width="100" height="100">
                <polygon points="0,50 100,0 100,100" fill="#777777" />
              </svg>
            </div>
          </CardImg>
        </span>
        <span onClick={() => setstyleRow(!styleRow)}>
          <CardImg texthead={t("MoveShape")} width={620}>
            <div className="d-flex justify-content-evenly ">
              <svg viewBox="0 0 100 100" width="100" height="100">
                <polygon points="0,100 50,0 100,100" fill="#777777" />
              </svg>

              <svg viewBox="0 0 100 100" width="100" height="100">
                <polygon points="0,0 50,100 100,0" fill="#777777" />
              </svg>
            </div>
          </CardImg>
        </span>
        <span onClick={RightMove}>
          <CardImg texthead={t("MoveShape")}>
            <div className="d-flex justify-content-evenly">
              <svg viewBox="0 0 100 100" width="100" height="100">
                <polygon points="0,0 0,100 100,50" fill="#777777" />
              </svg>
            </div>
          </CardImg>
        </span>
      </Row>
      {/* Cricle */}
      <Row
        className={"mb-3 " + (styleRow ? "ms-300" : null)}
        justify="center"
        align="middle"
      >
        <span onClick={randomizeNumbers}><CardImg texthead={t("no")}>{Data(numbers[0])}</CardImg></span>
        <span onClick={randomizeNumbers}><CardImg texthead={t("no")}>{Data(numbers[1])}</CardImg></span>
        <span onClick={randomizeNumbers}><CardImg texthead={t("no")}>{Data(numbers[2])}</CardImg></span>
      </Row>
      <Row
        className={"mb-5 " + (styleRow ? null : "ms-300")}
        justify="center"
        align="middle"
      >
        <span onClick={randomizeNumbers}><CardImg texthead={t("no")}>{Data(numbers[3])}</CardImg></span>
        <span onClick={randomizeNumbers}><CardImg texthead={t("no")}>{Data(numbers[4])}</CardImg></span>
        <span onClick={randomizeNumbers}><CardImg texthead={t("no")}>{Data(numbers[5])}</CardImg></span>
      </Row>
    </div>
  );
};

export default LayoutPage;
