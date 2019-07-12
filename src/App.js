import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import AddMeme from "./components/AddMeme";
import MemeLibrary from "./components/MemeLibrary";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
      random: ""
    };
    this.changeView = this.changeView.bind(this);
  }

  randomize(memes) {
    return memes[Math.floor(Math.random() * memes.length)];
  }

  componentDidMount() {
    axios.get("/api/memes").then(response => {
      let random = [Math.floor(Math.random() * response.data.length)];
      let randomImg = response.data[random].imgurl;
      console.log(randomImg);
      this.setState({ random: randomImg });
    });
  }

  changeView(newView) {
    this.setState({ view: newView });
  }

  render() {
    return (
      <div className="App">
        <Header className="App-header" />
        <nav>
          <button
            onClick={() => {
              this.setState({ view: "home" });
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              this.setState({ view: "addMeme" });
            }}
          >
            ADD MEME
          </button>
          <button
            onClick={() => {
              this.setState({ view: "library" });
            }}
          >
            VIEW LIBRARY
          </button>
        </nav>
        {this.state.view === "home" ? (
          <section>
            <img src={this.state.random} />
          </section>
        ) : null}
        {this.state.view === "library" ? <MemeLibrary /> : null}
        {this.state.view === "addMeme" && (
          <AddMeme changeView={this.changeView} />
        )}
      </div>
    );
  }
}

export default App;
