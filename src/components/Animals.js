import React, { Component } from "react";
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

let images = [
  {
    image: "/images/canines/candog.jpeg",
    type: "canine",
    name: "Copper",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel enim vel orci consectetur pretium. Nunc convallis ut ante eu porta. Sed porta odio tincidunt, maximus lacus sit amet, tristique.",
    animalId: "1",
  },
  {
    image: "/images/canines/canfox.jpeg",
    type: "canine",
    name: "Todd",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel enim vel orci consectetur pretium. Nunc convallis ut ante eu porta. Sed porta odio tincidunt, maximus lacus sit amet, tristique.",
    animalId: "2",
  },
  {
    image: "/images/canines/canwolf.jpeg",
    type: "canine",
    name: "Balto",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel enim vel orci consectetur pretium. Nunc convallis ut ante eu porta. Sed porta odio tincidunt, maximus lacus sit amet, tristique.",
    animalId: "3",
  },
  {
    image: "/images/felines/felcat.jpeg",
    type: "feline",
    name: "Mishu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel enim vel orci consectetur pretium. Nunc convallis ut ante eu porta. Sed porta odio tincidunt, maximus lacus sit amet, tristique.",
    animalId: "4",
  },
  {
    image: "/images/felines/feljag.jpeg",
    type: "feline",
    name: "Speedy gonzalez",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel enim vel orci consectetur pretium. Nunc convallis ut ante eu porta. Sed porta odio tincidunt, maximus lacus sit amet, tristique.",
    animalId: "5",
  },
  {
    image: "/images/felines/feltiger.jpeg",
    type: "feline",
    name: "Sagat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel enim vel orci consectetur pretium. Nunc convallis ut ante eu porta. Sed porta odio tincidunt, maximus lacus sit amet, tristique.",
    animalId: "6",
  },
  {
    image: "/images/primates/primape.jpeg",
    type: "primate",
    name: "Ceasar",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel enim vel orci consectetur pretium. Nunc convallis ut ante eu porta. Sed porta odio tincidunt, maximus lacus sit amet, tristique.",
    animalId: "7",
  },
  {
    image: "/images/primates/primonk.jpeg",
    type: "primate",
    name: "Kangaroo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel enim vel orci consectetur pretium. Nunc convallis ut ante eu porta. Sed porta odio tincidunt, maximus lacus sit amet, tristique.",
    animalId: "8",
  },
  {
    image: "/images/primates/primrilla.jpeg",
    type: "primate",
    name: "legs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel enim vel orci consectetur pretium. Nunc convallis ut ante eu porta. Sed porta odio tincidunt, maximus lacus sit amet, tristique.",
    animalId: "9",
  },
];

// function searchIt(term) {
//   return function (item) {
//     return item.subject.toLowerCase().includes(term.toLowerCase());
//   };
// }
class Animals extends Component {
  constructor() {
    super();
    this.state = { images };
  }

  onDelete(id) {
    const deletingPicture = this.state.images.filter(
      (item) => item.animalId !== id
    );
    this.setState({ images: deletingPicture });
  }

  onLike(id) {
    const deletingPicture = this.state.images.filter(
      (item) => item.animalId !== id
    );
    this.setState({ images: deletingPicture });
  }

  render() {
    return (
      <div style={gridDiv}>
        <div style={secondGrid}>Hello</div>
        {this.state.images.map((item) => {
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
                <button
                  onclick={() => {
                    const newarray = [];
                    return newarray.push(this.onlike(item));
                  }}
                >
                  {" "}
                  Like{" "}
                </button>
                <button> Dislike </button>
                <button
                  onClick={() => {
                    return this.onDelete(item.animalId);
                  }}
                >
                  Delete{" "}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Animals;
