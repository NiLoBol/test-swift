import React from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Card } from "antd";
const ButtonCard = (props: { texthead: string; textsub: string;linkname:string }) => {
  const head = props.texthead;
  const sub = props.textsub;
  const linkname = props.linkname;
  const { t } = useTranslation();
  return (
    <Link to={linkname} className="custom-link">
    <Card className="mx-3" style={{ width: 300 }}>
      <h5 className="mb-4">{head}</h5>
      <p className="mb-0">{sub}</p>
    </Card>
    </Link>
    
  );
};

export default ButtonCard;