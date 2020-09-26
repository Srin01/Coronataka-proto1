import React from 'react';
import './App.css';
import Example from '../Carousel/Carousel';
import NavBarExample from "../NavBar/NavBar";
import CardsList from "../Cards/Cards";
import Component from "../iframe/iframe";
import Maps from '../Maps/Maps';

class App extends React.Component{
  constructor(props){
    super(props);



    this.state = {
      cardDetails : [{src: "/maps.png", alt : "1", title : "Maps"}, {src : "/graphs.jpg", alt : "2", title : "Graphs"},  {src : "/beds.jpg", alt : "3", title : "Beds"}],
      iframe : {src: "https://www.atlistmaps.com/map/198971f6-b520-435d-bdaf-bf83fb739538?share=true", allow :"geolocation" , frameborder:"0", scrolling:"no", width : "100%", height : "400px" }
    }
  }

  render()
  {
    return(
      <div className = "App">
        <NavBarExample />
        <Example />
        <CardsList cardDetails = {this.state.cardDetails} />
        <Component iframe = {this.state.iframe}/>
        <Maps />
      </div>
    )
  }
}

export default App;
