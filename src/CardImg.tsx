import React from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Button, Card } from "antd";

const CardImg = (props: { texthead: string; children: React.ReactNode ;width?: number,onClick?: () => void;}) => {
  const head = props.texthead;
  const { t } = useTranslation();

  return (
    <Card className={"mx-2 "+((head==="no")?null:" nohovercolor") }  style={{ width:props.width || 300  } }
    >
      {props.children}
      {(head==="no")?null:<Button className="Buttonsmall position-absolute top-100 start-50 translate-middle" >{head}</Button>}
    </Card>
  );
};

export default CardImg;

