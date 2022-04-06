import React, { useContext, Component } from "react";
import starContext from "./starContext";

export default function AddStars() {
  let { setStars, stars } = useContext(starContext);
  function add() {
    setStars((pre) => {
      pre.push({ "#2": 4 });
      return pre;
    });
    console.log(stars);
  }
  return <button onClick={add}>Add</button>;
}

// export default class AddStars extends Component {
//   static contextType = starContext;
//   constructor(props) {
//     super(props);
//     this.props = {
//       name: "Joy",
//     };
//   }
//   addStar() {
//     console.log(this.context);
//   }
//   render() {
//     return <button onClick={this.addStar}>Add Stars</button>;
//   }
// }
