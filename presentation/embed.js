import React from "react";

export default class Embed extends React.Component {
  componentDidMount() {
    // document.querySelector("#myVideo").requestFullscreen();
  }

  componentWillUnmount() {
    // document.documentElement.requestFullscreen();
  }
  render() {
    return (
      <iframe
        style={{ position: "fixed", left: 0, right: 0, top:20 }}
        width="1920px"
        height="890px"
        src={this.props.src}
        frameBorder="0"
        allowFullScreen
      />
    );
  }
}
