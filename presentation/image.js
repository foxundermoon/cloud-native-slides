import React from "react";

export default class Image extends React.Component {
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
    const { title } = this.props;
    // position: "fixed",
    return (
      <div style={{ position: "fixed", left: 0, top: "10%" }}>
        <h1 style={{ color: "Aquamarine" }}>{title}</h1>

        <img width={width} src={this.props.src} />
      </div>
    );
  }
}
