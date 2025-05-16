import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Hyperlink = ({ className, divClassName, text = "ПРО НАС", to, onClick }) => {
const scrollToTarget = (id) => {
  const target = document.getElementById(id);
  console.log(`Trying to scroll to #${id}`, target, target?.getBoundingClientRect());
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    return true;
  }
  return false;
};

const handleClick = (e) => {
  e.preventDefault();

  if (to) {
    if (!scrollToTarget(to)) {
      // Wait 100ms and try again
      setTimeout(() => {
        scrollToTarget(to);
      }, 100);
    }
  }

  if (onClick) {
    onClick(e);
  }
};

  return (
    <Link to={`#${to}`} className={`hyperlink ${className}`} onClick={handleClick}>
      <div className={`text-wrapper-10 ${divClassName}`}>{text}</div>
    </Link>
  );
};
