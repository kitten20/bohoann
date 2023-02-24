import module from "./style.module.scss";

import video from "./assets/video.svg";

function VideoComponent() {
  return (
    <div className={module.container}>
      <img src={video} alt="" />
    </div>
  );
}

export default VideoComponent;
