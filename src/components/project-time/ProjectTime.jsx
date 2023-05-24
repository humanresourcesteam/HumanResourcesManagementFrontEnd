import "./time.scss";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import BestEmployee from "../bestEmployee/BestEmployee";

const ProjectTime = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../launch.json"),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice", // Animasyonun boyutlandırılmasıyla ilgili ayarlar
      },
    });
  }, []);
  return (
    <div className="project-time">
      <div className="project-side">
        <div className="project-time-second-area" ref={container}></div>
      </div>
      <div className="project-side-table">
        <BestEmployee />
      </div>
    </div>
  );
};

export default ProjectTime;
