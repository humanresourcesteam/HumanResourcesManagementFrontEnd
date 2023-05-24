import "./bestlist.scss";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import BestEmployee from "../bestEmployee/BestEmployee";
import ProjectList from "../project-list/ProjectList";
const Best = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../list.json"),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice", // Animasyonun boyutlandırılmasıyla ilgili ayarlar
      },
    });
  }, []);
  return (
    <div className="project-time besttt">
      <div className="project-side">
        <div className="project-time-second-areas" ref={container}></div>
      </div>
      <div className="project-side-table">
        <ProjectList />
      </div>
    </div>
  );
};

export default Best;
