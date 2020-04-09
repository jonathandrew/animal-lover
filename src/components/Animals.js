import React, { Component } from "react";
let images = [
  {
    image: "/images/canines/candog.jpeg",
    type: "",
    name: "",
    description: "dog",
    animalId: "",
  },
  {
    image: "/images/canines/canfox.jpeg",
    type: "",
    name: "",
    description: "fox",
    animalId: "",
  },
  {
    image: "/images/canines/canwolf.jpeg",
    type: "",
    name: "",
    description: "wolf",
    animalId: "",
  },
  {
    image: "/images/feline/felcat.jpeg",
    type: "",
    name: "",
    description: "cat",
    animalId: "",
  },
  {
    image: "/images/feline/feljag.jpeg",
    type: "",
    name: "",
    description: "jaguar",
    animalId: "",
  },
  {
    image: "/images/feltiger.jpeg",
    type: "",
    name: "",
    description: "tiger",
    animalId: "",
  },
  {
    image: "/images.primates/primape",
    type: "",
    name: "",
    description: "ape",
    animalId: "",
  },
  {
    image: "/images/primates/primonk",
    type: "",
    name: "",
    description: "monkey",
    animalId: "",
  },
  {
    image: "/images/primates/primrilla",
    type: "",
    name: "",
    description: "gorilla",
    animalId: "",
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
  render() {
    return (
      <div>
        {this.state.images.map((item) => {
          <div>
            {" "}
            {item.description}
            {/* <p>{item.description}</p> */}
            {/* <img src={item.image}></img> */}
          </div>;
        })}
      </div>
    );
  }
}
export default Animals;
