import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MemeGenerator from "./components/MemeGenerator";
import AddMemeForm from "./components/AddMemeForm";
import MyMemes from "./components/MyMemes";
import axios from "axios";
// import MemeItem from "./components/MemeItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
      myMemes: [],
      allMemeImgs: [],
      error: "",
      topText: "",
      bottomText: "",
      name: "",
      url: ""
    };
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {
    axios.get("/api/memes").then(response => {
      // console.log(memes[0]);
      this.setState({ allMemeImgs: response.data });
    });
  }

  //MemeGen submit btn
  addmyMeme = newMeme => {
    // e.preventDefault();

    axios.post("/api/myMemes", newMeme).then(response => {
      console.log(response.data);
      this.setState({
        myMemes: response.data
      });
    });
  };

  //AddMemeForm submit btn
  addToMyMemes = (e, newMeme) => {
    e.preventDefault();
    console.log(newMeme);

    axios.post("/api/myMemes", newMeme).then(response => {
      console.log(response.data);
      this.setState({
        myMemes: response.data
      });
    });
  };

  //change url
  changeUrl = newUrl => {
    this.setState({ url: newUrl });
  };

  changeTopText = newTopText => {
    console.log(newTopText);
    this.setState({ topText: newTopText });
  };
  changeBottomText = newBottomText => {
    console.log(newBottomText);
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
            // addToMyMemes={this.addToMyMemes}
            addmyMeme={this.addmyMeme}
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
        {this.state.view === "new" ? (
          <AddMemeForm
            myMemes={this.state.myMemes}
            name={this.state.name}
            topText={this.state.topText}
            bottomText={this.state.bottomText}
            url={this.state.url}
            changeTopText={this.changeTopText}
            changeBottomText={this.changeBottomText}
            changeUrl={this.changeUrl}
            addMemeHandleChange={this.addMemeHandleChange}
            addToMyMemes={this.addToMyMemes}
          />
        ) : null}
        {/* <MemeItem
          myMemes={this.state.myMemes}
          name={this.state.name}
          url={this.state.url}
          topText={this.state.topText}
          bottomText={this.state.bottomText}
          changeTopText={this.changeTopText}
          changeBottomText={this.changeBottomText}
          updateMyMemes={this.updateMyMemes}
          myMemes={this.state.myMemes}
          deleteMyMeme={this.deleteMyMeme}
        /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
