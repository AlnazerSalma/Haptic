import React, { useState } from "react";
import './WorkCard.css';
import workData from "../../data/Work/WorkData";
import WorksSliderPanel from "../RightSliderPanel/WorksSliderPanel"; // adjust path as needed

function WorkCard() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleRowClick = (item) => {
    setSelectedItem(item);
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <div className="workcard-container">
        {workData.map((item, index) => {
          const firstMedia = item.media?.[0];

          return (
            <div className="workcard-row" key={index} onClick={() => handleRowClick(item)}>
              <div className="workcard-title">{item.title}</div>
              <div className="workcard-image-wrapper">
                {firstMedia?.type === "video" ? (
                  <video
                    src={firstMedia.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="workcard-media"
                  />
                ) : (
                  <img
                    src={firstMedia?.src || item.image}
                    alt={item.title}
                    className="workcard-media"
                  />
                )}
              </div>
              <div className="workcard-desc">{item.type}</div>
              <div className="workcard-year">{item.year}</div>
            </div>
          );
        })}
      </div>

      <WorksSliderPanel
        isOpen={isPanelOpen}
        onClose={handleClosePanel}
        role={selectedItem}
      />
    </>
  );
}

export default WorkCard;
