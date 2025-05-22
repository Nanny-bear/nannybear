import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const Marketing = ({ className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/registrationlogin");
  };

  return (
    <div className={`marketing ${className}`} onClick={handleClick} style={{ cursor: "pointer" }}>
      <p className="text-wrapper-13">Отримайте знижку 20% на першу послугу!</p>
      <img className="waves" alt="Waves" src="/assets/waves.svg" />
      <img className="waves-2" alt="Waves" src="/assets/waves-2.svg" />
    </div>
  );
};