import React, { Component } from 'react';

class App extends Component {

  state = {
    isActive: false
  }

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive })
  }


  render() {
    return (
      <div className="App">
        <h4>Sample</h4>
        <button onClick={this.handleClick}>
          {this.state.isActive ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

export default App;
