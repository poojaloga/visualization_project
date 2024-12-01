import React, { Component } from "react";
import "./App.css";
import FileUpload from "./FileUpload";
import Visual3 from "./Visual3";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
  }

  set_data = (csv_data) => {
    this.setState({ data: csv_data });
  }

  render() {
    return (
      <div>
        <FileUpload set_data={this.set_data}></FileUpload>
        <div className="parent">
          <Visual3 csv_data={this.state.data}></Visual3>
        </div>
      </div>
    );
  }
}

export default App;