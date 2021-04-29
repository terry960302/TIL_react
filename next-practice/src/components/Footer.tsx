import React from "react";
import css from "../../styles/Footer.module.scss";

type FooterProps = {
  roo?: string;
};

function Footer({ roo = "asda" }: FooterProps) {
  return (
    <div className={css.item}>
      <h1>hello</h1>
      <h2>{roo}</h2>
    </div>
  );
}

export default Footer;
