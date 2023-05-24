import React from "react";
import "./circular.scss";

import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Circle from "../../assets/casual-life-3d-pie-chart-5.png";
function CircularProgressBar() {
  const percentage = 66; // ilerleme yüzdesi

  return (
    <div className="circu">
      <span></span>
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={66}
        duration={1.4}
        easingFunction={easeQuadInOut}
        repeat={false}
      >
        {(value) => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%  OKAY`}
              strokeWidth={3}
              styles={{
                path: {
                  stroke: "#dad7f4",
                  strokeLinecap: "round",
                  transition: "stroke-dashoffset 0.5s ease 0s",
                },
                trail: {
                  stroke: "#ddd",
                },
                text: {
                  fill: "#dad7f4",
                  fontSize: "14px",
                  fontWeight: "500",
                },
              }}
            />
          );
        }}
      </AnimatedProgressProvider>

      <div className="circu-bot">
        <p className="project-rate-1">Project Count</p>
      </div>
    </div>
  );
}

export default CircularProgressBar;
