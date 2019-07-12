// import React, { Component } from "react";
// import axios from "axios";

// class MemeItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       newName: ""
//     };
//   }

//   handleChange = e => {
//     this.setState({ newName: e.target.value });
//   };

//   handleClick = () => {
//     axios
//       .put("/api/memes/" + this.props.name, { name: this.state.newName })
//       .then(response => {
//         this.props.updateMemes(response.data);
//       });
//   };

//   render() {
//     return (
//       <li className="meme-item">
//         <img
//           className="meme-image"
//           src={this.props.imgurl}
//           alt={this.props.name}
//         />
//         <h2>{this.props.name}</h2>
//         <div>
//           <input
//             placeholder="hello"
//             value={this.state.newName}
//             onChange={this.handelChange}
//           />
//           <button onClick={this.handleClick}>Edit</button>
//         </div>
//       </li>
//     );
//   }
// }

// export default MemeItem;
