import React from "react";

export default class Jisuanjiqi extends React.Component {
  componentDidMount() {
    // document.querySelector("#myVideo").requestFullscreen();
  }

  componentWillUnmount() {
    // document.documentElement.requestFullscreen();
  }
  render() {
    return (
      <div>
        <video
          width="100%"
          height="100%"
          controls
          autoplay="autoplay"
          loop
          poster="none"
          id="myVideo"
        >
          <source src="/assets/jisuanjiqi.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    );
  }
}
