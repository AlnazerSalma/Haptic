import React from "react";
import "./Gallery.css";
import { SiVisualstudiocode, SiAndroidstudio, SiXampp } from "react-icons/si";

const icons = [
  { icon: <SiVisualstudiocode />, title: "VS code" },
  { icon: <SiAndroidstudio />, title: "Android studio" },
  { icon: <SiXampp />, title: "Xampp" },
];

const Toolstack = () => {
  return (
    <div className="gallery">
      {icons.map((item, index) => (
        <div key={index} className="avatar" title={item.title}>
          <div className="icon" >{item.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default Toolstack;
