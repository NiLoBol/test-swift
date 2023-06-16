import React from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

import PhoneCode from "./SelectOption";
import ButtonCard from "./ButtonCard";
import { Row, Col } from "antd";
const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div className="h-100 d-flex justify-content-center align-item-center">
      <Row justify="center" align="middle">
        <ButtonCard
          linkname="./Layout"
          texthead={t("Test") + " 1"}
          textsub={t("Layout")}
        ></ButtonCard>
        <ButtonCard
          linkname="."
          texthead={t("Test") + " 2"}
          textsub={t("Connect")}
        ></ButtonCard>
        <ButtonCard
          linkname="./From"
          texthead={t("Test") + " 3"}
          textsub={t("From")}
        ></ButtonCard>
      </Row>
    </div>
  );
};

export default HomePage;
