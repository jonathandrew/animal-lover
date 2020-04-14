import React, { Component } from "react";
import Button from "./Button";
import Images from "./Images";
const imageStyling = {
  width: "20%",
  height: "125px",
};

const gridDiv = {
  width: "70%",
  height: "125px",
  display: "grid",
};
const secondGrid = {
  paddingLeft: "100%",
};

// function searchIt(term) {
//   return function (item) {
//     return item.subject.toLowerCase().includes(term.toLowerCase());
//   };
// }
class App extends Component {
  constructor() {
    super();
    this.state = { Images };
  }

  onDelete(id) {
    const deletingPicture = this.state.Images.filter(
      (item) => item.animalId !== id
    );
    this.setState({ images: deletingPicture });
  }

  onLike(id) {
    const deletingPicture = this.state.Images.filter(
      (item) => item.animalId !== id
    );
    this.setState({ Images: deletingPicture });
  }

  render() {
    return (
      <div style={gridDiv}>
        <div style={secondGrid}>Hello</div>
        {this.state.Images.map((item) => {
          return (
            <div>
              <img
                src={item.image}
                alt="..."
                className="test"
                style={imageStyling}
              ></img>
              <div>
                <p> {item.name}</p>
                <p>{item.type}</p>
                <p>{item.description}</p>
                <Button
                  onclick={() => {
                    const newarray = [];
                    return newarray.push(this.onlike(item));
                  }}
                >
                  {" "}
                  Like{" "}
                </Button>
                <Button> Dislike </Button>
                <Button
                  onClick={() => {
                    return this.onDelete(item.animalId);
                  }}
                >
                  Delete{" "}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
