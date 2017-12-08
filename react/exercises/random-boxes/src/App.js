import React, { Component } from 'react';
import './App.css';
import Box from './Box';

const NUM_OF_BOXES = 32;

class App extends Component {
  constructor(props) {
    super(props);
    this.initialBoxes = Array(NUM_OF_BOXES).fill().map(this.getRandomColor, this);
    this.state = {
      randBox: this.returnRandomNumber(),
    };

    setInterval(() => this.randomize(), 300);
  }

  randomize() {
    this.setState({randBox: this.returnRandomNumber(NUM_OF_BOXES)})
  }

  returnRandomNumber(num=this.props.allColors.length) {
    return Math.floor(Math.random() * num);
  }

  getRandomColor() {
    return this.props.allColors[this.returnRandomNumber()]
  }

  render() {
    const boxElement = this.initialBoxes.map((boxColor, i) => {
      if (i === this.state.randBox) {
        let randColor = this.initialBoxes[this.returnRandomNumber(NUM_OF_BOXES)]
        return <Box key={i} color={randColor} />
      } else {
        return <Box key={i} color={boxColor} />
      }
    });
  
    return (
      <div className="App">
        {boxElement}
      </div>
    );
  }
}

App.defaultProps = {
  allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
              "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
              "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
              "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
              "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
              "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
              "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
              "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
              "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
              "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
              "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
              "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
              "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
              "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
              "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
              "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
              "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
              "Yellow","YellowGreen"]
};

export default App;


// need box component, each box component will have a color property
  // make the box a stateless functional component?? (the box itself won't have any state, the App controls the state)
// needs state for all 32 boxes
// set interval that will randomly choose a box and change it every 300 miliseconds

