import React, { useEffect, useRef, useState } from "react";
import "./AnimatedSlider.css";
import WorkData from "../../data/Work/WorkData";
import WorksSliderPanel from "../RightSliderPanel/WorksSliderPanel";

const HomePageSlider = () => {
  const sliderTrackRef = useRef(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const slideDuration = 40;

  useEffect(() => {
    const track = sliderTrackRef.current;

    const slideAnimation = () => {
      track.style.animation = `${slideDuration}s linear infinite slideAnimation`;
    };

    slideAnimation();
  }, []);

  const handleItemClick = (work) => {
    setSelectedItem(work);
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
  };

  return (
    <div className="slider-wrapper">
      <div className="slider-track" ref={sliderTrackRef}>
        {WorkData.map((work, index) => (
          <div
            className="slider-item"
            key={index}
            onClick={() => handleItemClick(work)}
          >
            <div className="slider-content">
              <h3>{work.title}</h3>
              <p>{work.desc}</p>
            </div>
            {work.media[0]?.type === "video" ? (
              <video
                src={work.media[0]?.src}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img src={work.media[0]?.src} alt={work.title} />
            )}
          </div>
        ))}
      </div>
      {isPanelOpen && (
        <WorksSliderPanel
          isOpen={isPanelOpen}
          onClose={handleClosePanel}
          role={selectedItem}
        />
      )}
    </div>
  );
};

export default HomePageSlider;
