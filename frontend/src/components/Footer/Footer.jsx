import React from "react";
import { BodyHyperlink } from "../BodyHyperlink/BodyHyperlink.jsx";
import { FormButton } from "../../components/FormButton/FormButton.jsx";
import "./footer.css";
import bear from "../../assets/bear-light.png";


const Footer = () => {

  return (
    <div className="footer">
      <div className="footer-content">
        {/* Перший стовпець */}
        <div className="footer-column">
          <div className="footer-title">ПІДПИСКА НА EMAIL-РОЗСИЛКУ</div>

          <p className="footer-text-wrapper-26">
            Ваш спокій – наш пріоритет! Нові няні, вигідні пропозиції та
            практичні поради!
          </p>

          <FormButton className="footer-form-button-instance" />

          {/* Логотип */}
          <div className="footer-logo-2">
            <img
              className="footer-ICON-2"
              alt="Icon"
              src="/assets/LogoNannyBearGrid.png"
            />
          </div>

          {/* Соціальні іконки */}
          <div className="footer-social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <div className="icon-hover footer-insta-icon">
                <img src="/assets/insta-icon.png" alt="Instagram" className="insta-icon default" />
                <img src="/assets/insta-icon-hover.png" alt="Instagram Hover" className="insta-icon hover" />
              </div>
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <div className="icon-hover footer-tiktok-icon">
                <img src="/assets/tiktok-icon.png" alt="TikTok" className="tiktok-icon default" />
                <img src="/assets/tiktok-icon-hover.png" alt="TikTok Hover" className="tiktok-icon hover" />
              </div>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <div className="icon-hover footer-facebook-icon">
                <img src="/assets/facebook-icon.png" alt="Facebook" className="facebook-icon default" />
                <img src="/assets/facebook-icon-hover.png" alt="Facebook Hover" className="facebook-icon hover" />
              </div>
            </a>
          </div>

        </div>

        {/* Обгортка для другого та третього стовпця */}
        <div className="footer-columns-wrapper">
          {/* Другий стовпець */}
          <div className="footer-column second-column">
            <div className="footer-text-wrapper-28">ІНФОРМАЦІЯ</div>
            <BodyHyperlink
              className="footer-body-hyperlink-instance"
              text="Дисклеймер"
              to="/disclaimer"
            />
            <BodyHyperlink
              className="footer-body-hyperlink-6"
              text="Загальні умови та положення"
              to="/terms"
            />
            <BodyHyperlink
              className="footer-body-hyperlink-4"
              text="Політика конфіденційності"
              to="/privacy"
            />
            <BodyHyperlink
              className="footer-body-hyperlink-5"
              text="Політика допустимого використання"
              to="/acceptable-use"
            />
            <p className="footer-text-wrapper-27">v. 1.1.1 © 2025 Nanny Bear. Всі права захищені</p>
          </div>

          {/* Третій стовпець */}
          <div className="footer-column third-column">
            <div className="footer-text-wrapper-29">КОРИСНЕ</div>
            <BodyHyperlink
              className="footer-body-hyperlink-2"
              text="Сайт МОЗ"
              to="https://moz.gov.ua/"
              external={true}
            />
            <BodyHyperlink
              className="footer-body-hyperlink-3"
              text="Служба підтримки"
              to="/support"
            />
            <div className="bear-wrapper">
              <img
                className="bear-ligth"
                alt="Bear-ligth"
                src={bear}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
