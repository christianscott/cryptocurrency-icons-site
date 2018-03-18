import React from "react";
import "./Flipper.css";

export default class Flipper extends React.Component {
  static defaultDims = { height: "100%", width: "100%" };

  state = { flipped: false };

  handleClick = () => this.setState({ flipped: !this.state.flipped });

  render() {
    let containerClassName = "Flipper__container";
    if (this.state.flipped) {
      containerClassName += " Flipper__container--hover";
    }

    const dims = {
      ...Flipper.defaultDims,
      ...this.props.dims
    };

    return (
      <div
        className={containerClassName}
        onTouchStart={this.handleClick}
        onClick={this.handleClick}
        style={dims}
      >
        <div className="Flipper">
          <div className="Flipper__front" style={dims}>
            {this.props.renderFront(this.state.flipped)}
          </div>
          <div className="Flipper__back" style={dims}>
            {this.props.renderBack(this.state.flipped)}
          </div>
        </div>
      </div>
    );
  }
}
