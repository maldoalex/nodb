import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import MemeGenerator from "./components/MemeGenerator";
import AddMemeForm from "./components/AddMemeForm";
import MyMemes from "./components/MyMemes";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
      myMemes: [],
      allMemeImgs: [],
      error: "",
      topText: "",
      bottomText: ""
    };
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {
    axios.get("/api/memes").then(response => {
      // console.log(memes[0]);
      this.setState({ allMemeImgs: response.data });
    });
  }

  addToMyMemes = newMeme => {
    axios.post("/api/myMemes", newMeme).then(response => {
      this.setState({
        myMemes: response.data
      });
    });
  };

  changeTopText = newTopText => {
    this.setState({ topText: newTopText });
  };
  changeBottomText = newBottomText => {
    this.setState({ bottomText: newBottomText });
  };

  updateMyMemes = (topText, bottomText, ID) => {
    axios
      //params = ${ID}
      .put(`/api/myMemes/${ID}`, { topText, bottomText })
      .then(response =>
        this.setState({ myMemes: response.data, topText: "", bottomText: "" })
      );
  };

  deleteMyMeme = ID => {
    axios.delete(`/api/myMemes/${ID}`).then(response => {
      this.setState({ myMemes: response.data });
    });
  };

  changeView(newView) {
    this.setState({ view: newView });
  }

  render() {
    return (
      <div>
        <Header />

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
              this.setState({ view: "new" });
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              this.setState({ view: "myMemes" });
            }}
          >
            My Memes
          </button>
        </nav>
        {this.state.view === "home" ? (
          <MemeGenerator
            addToMyMemes={this.addToMyMemes}
            allMemeImgs={this.state.allMemeImgs}
          />
        ) : null}
        {this.state.view === "myMemes" ? (
          <MyMemes
            topText={this.state.topText}
            bottomText={this.state.bottomText}
            changeTopText={this.changeTopText}
            changeBottomText={this.changeBottomText}
            updateMyMemes={this.updateMyMemes}
            myMemes={this.state.myMemes}
            deleteMyMeme={this.deleteMyMeme}
          />
        ) : null}
        {this.state.view === "new" ? <AddMemeForm /> : null}
      </div>
    );
  }
}

export default App;

// {
//   this.state.view === "new" && (
//     <AddMemeForm changeView={this.changeView} />
//   )
// }
// {
//   this.state.view === "myMemes" && (
//     <MyMemes changeView={this.changeView} />
//   )
// }
