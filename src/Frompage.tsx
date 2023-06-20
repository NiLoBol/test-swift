import React from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

import PhoneCode from "./SelectOption";
import ButtonCard from "./ButtonCard";
import { Row, Col, Checkbox, Button } from "antd";
import FromDetail from "./From";
import DataCard from "./DataCard";
const Frompage = () => {
  const { t } = useTranslation();
  return (
    <div className="h-100">
      <Button
        className="position-absolute top-0 end-0 m-3 mt-60"
        htmlType="button"
      >
        <Link to="..">{t("mainpage")}</Link>
      </Button>

      <h1 className="mb-4">{t("From")}</h1>
      <div className="bordercard mx-auto mb-5">
        <FromDetail></FromDetail>
      </div>

      <DataCard></DataCard>
    </div>
  );
};

export default Frompage;
