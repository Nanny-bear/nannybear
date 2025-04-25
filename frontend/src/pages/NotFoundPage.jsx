// src/pages/NotFoundPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
// import bearImg from "../assets/bear-error.png"; 

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="settings-page-container-erorr">
      <img
       src="/images/bear-empty.png"
        alt="Сумний ведмедик"
        style={{
          width: "400px",
          marginBottom: "20px",      
          animation: "float 3s ease-in-out infinite",
        }}
      />
      <h1 className="title-dark">404</h1>
      <p className="description-dark">
        Ой! Сторінка загубилась у лісі... <br /> Але ведмедик допоможе знайти дорогу назад 🐻
      </p>
      <button className="reg-form-button" onClick={() => navigate("/")}>
        НА ГОЛОВНУ
      </button>
    </div>
  );
};

export default NotFoundPage;
