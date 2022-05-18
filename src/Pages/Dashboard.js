import React from "react";
import { useLocation } from "react-router-dom";
import { Post } from "../Components/Post";
import { presidents } from "../presidents";

function _scrollTo(selector, yOffset = 0) {
  const el = document.querySelector(selector);
  const y = el?.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export const Dashboard = () => {
  const { hash } = useLocation();

  React.useEffect(() => {
    if (hash) _scrollTo(hash, -60);
  }, [hash]);

  return (
    <div className="App">
      {presidents.map((president) => (
        <Post data={president} key={president?.name + 1} />
      ))}
    </div>
  );
};
