import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import MemeGenerator from "./components/MemeGenerator";
import AddMemeForm from "./components/AddMemeForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home"
    };
    this.changeView = this.changeView.bind(this);
  }

  // onChange = updatedValue => {
  //   this.setState({ fields: { ...this.state.fields, ...updatedValue } });
  // };
  changeView(newView) {
    this.setState({ view: newView });
  }

  render() {
    return (
      <div>
        <Header />
        <MemeGenerator />
        <AddMemeForm />
        {/* <nav>
          <button
            onClick={() => {
              this.setState({ view: "mymemes" });
            }}
          >
            My Memes
          </button>
          <button
            onClick={() => {
              this.setState({ view: "new" });
            }}
          >
            +
          </button>
          <button>memories</button>
        </nav>
        {this.state.view === "mymemes" ? <MyMemes /> : null}
        {this.state.view === "new" && (
          <AddMemeForm changeView={this.changeView} />
        )} */}
      </div>
    );
  }
}

export default App;
