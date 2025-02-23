import React from "react";
import "./timeline-component.css";
import { ScrollArea } from "../ui/scroll-area";

const Timeline = ({ route }) => {
  const formatTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };
  return (
    <ScrollArea>
      <div className="timeline-container ">
        {route.map((point, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-date">{formatTime(point.arrivalTime)}</div>
            <div className="timeline-content">
              <div className="timeline-bar"></div>
              <div className="timeline-point"></div>
              <div className="timeline-details">
                <h3>Station {point.station}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default Timeline;
