import React from 'react';

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove = e => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  render() {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          overflow: 'auto',
          background: 'peachpuff'
        }}
        onMouseMove={this.handleMouseMove}
      >
        <h2>
          Mouse coordinates are x : {this.state.x}, y : {this.state.y}
        </h2>
        {/* <Cat mouse={this.state} /> */}
        {this.props.render1(this.state)}


      </div>
    );
  }
}

export default Mouse;
