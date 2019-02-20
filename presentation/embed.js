import React from "react";

export default class Embed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    const { width, height } = this.state;
    return (
      <iframe
        style={{ position: "fixed", left: 0, right: 0, top: 20 }}
        width={width}
        height={height}
        src={this.props.src}
        frameBorder="0"
        allowFullScreen
      />
    );
  }
}
