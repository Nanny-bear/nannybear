// src/pages/SupportServicePage.jsx
import React from "react";
import "../styles/policies.css";
import { BodyHyperlink } from "../components/BodyHyperlink/BodyHyperlink.jsx";
import { FormButton } from "../components/FormButton/FormButton.jsx";
import { InstaIcon } from "../icons/InstaIcon/InstaIcon.jsx";
import { Property1Default } from "../icons/Property1Default/Property1Default.jsx";
import { Property1Default1 } from "../icons/Property1Default1/Property1Default1.jsx";

const SupportServicePage = () => {
  return (
    <div className="main">
      <div className="div-2">
        <div className="policy-title">
          СЛУЖБА ПІДТРИМКИ
        </div>
        <div className="policy-small-title">
          Адреса офісу
        </div>
        <div className="policy-text">
          01010, м. Київ, вул. Левандовська, 5, оф. 9
        </div>
        <div className="policy-small-title">
          Електрона пошта
        </div>
        <div className="policy-text">
          nanny.bear@gmail.com
        </div>
        <div className="policy-small-title">
          Гаряча лінія
        </div>
        <div className="policy-text">
          +38 (050) 310-44-10
          <br />+38 (050) 330-94-75
          <br />+38 (050) 382-62-46
        </div>
        <div className="footer">
          <div className="rectangle-14" />

          <div className="overlap-wrapper">
            <div className="overlap-11">
              <img
                className="vector-3"
                alt="Vector"
                src="/assets/vector-2.svg"
              />

              <img
                className="vector-4"
                alt="Vector"
                src="/assets/vector-3.svg"
              />

              <img
                className="group-2"
                alt="Group"
                src="/assets/group@2x.png"
              />

              <img
                className="vector-5"
                alt="Vector"
                src="/assets/vector-4.svg"
              />

              <img
                className="vector-6"
                alt="Vector"
                src="/assets/vector-5.svg"
              />
            </div>
          </div>

          <div className="email">ПІДПИСКА НА EMAIL-РОЗСИЛКУ</div>

          <p className="text-wrapper-26">
            Ваш спокій – наш пріоритет! Нові няні, вигідні пропозиції та
            практичні поради!
          </p>

          <p className="text-wrapper-27">
            v. 1.1.1 © 2025 Nanny Bear. Всі права захищені
          </p>

          <div className="text-wrapper-28">ІНФОРМАЦІЯ</div>

          <div className="text-wrapper-29">КОРИСНЕ</div>

          <FormButton className="form-button-instance" />
          <a href="/disclaimer">
            <BodyHyperlink className="body-hyperlink-instance"/>
          </a>
          <BodyHyperlink className="body-hyperlink-2" text="Сайт МОЗ" />
          <a href="/support-service">
            <BodyHyperlink className="body-hyperlink-3" text="Служба підтримки" />
          </a>
          <a href="/privacy-policy">
            <BodyHyperlink
              className="body-hyperlink-4"
              text="Політика конфіденційності"
            />
          </a>
          <a href="/acceptable-use-policy">
            <BodyHyperlink
              className="body-hyperlink-5"
              text="Політика допустимого використання"
            />
          </a>
          <a href="/terms-and-conditions">
            <BodyHyperlink
              className="body-hyperlink-6"
              text={
                <>
                  Загальні умови <br />
                  та положення
                </>
              }
            />
          </a>
          <InstaIcon className="insta-icon" color="#FFFAEE" />
          <Property1Default1 className="tiktok-icon" color="#FFFAEE" />
          <Property1Default className="facebook-icon" color="#FFFAEE" />
          <div className="group-wrapper">
            <div className="div-wrapper">
              <div className="logo-2">
                <img
                  className="ICON-2"
                  alt="Icon"
                  src="/assets/LogoNannyBearGrid.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportServicePage;