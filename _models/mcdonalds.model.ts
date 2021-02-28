export interface Product {
    title: string;
    subtitle: string;
    color1: string;
    color2: string;
    picture: number;
  }
  
  export const products = [
    {
      title: "Hamburgers",
      description: "Two 100% beef patties, a slice of cheese, lettuce, onion and pickles. And the sauce. That unbeatable, tasty Big Mac® sauce. You know you want to.",
      color1: "#FFC72C",
      color2: "#ffbd05",
      picture: require("../assets/mcdonalds/bigMac.png"),
      aspectRatio: 1,
      Id: 0,
      textColor: '#432406'
    },

    {
      title: "Fries",
      description: "Fluffy on the inside and crispy on the outside, our fries are cut from whole potatoes. That's why they're so delicious.",
      color1: "#b72218",
      color2: "#DA291C",
      picture: require("../assets/mcdonalds/fries.png"),
      aspectRatio: 1,
      Id: 1,
      textColor: '#432406'
    },
    {
      title: "Coffee",
      description: "Fluffy on the inside and crispy on the outside, our fries are cut from whole potatoes. That's why they're so delicious.",
      color1: "#FFC72C",
      color2: "#DA291C",
      picture: require("../assets/mcdonalds/coldbrew.png"),
      aspectRatio: 1,
      Id: 2,
      textColor: '#432406'
    },
    {
      title: "Chicken",
      description: "Fluffy on the inside and crispy on the outside, our fries are cut from whole potatoes. That's why they're so delicious.",
      color1: "#4DD2A5",
      color2: "#63D8B0",
      picture: require("../assets/mcdonalds/chicken.png"),
      aspectRatio: 1,
      Id: 3,
      textColor: '#432406'
    },
    {
      title: "Nuggets",
      description: "Fluffy on the inside and crispy on the outside, our fries are cut from whole potatoes. That's why they're so delicious.",
      color1: "#E2DDD1",
      color2: "#F3F1ED",
      picture: require("../assets/mcdonalds/nuggets.png"),
      aspectRatio: 757 / 735,
      Id: 4,
      textColor: '#432406'
    },
  ];
  /*
  
    {
      title: "More Cold Brew to Love",
      subtitle: "32oz bottle now available",
      color1: "#FEAC00",
      color2: "#FDC946",
      picture: require("./assets/coldbrew2.png"),
      aspectRatio: 719 / 277,
    },*/
  