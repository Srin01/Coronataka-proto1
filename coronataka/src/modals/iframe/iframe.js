import React from 'react';
import "./iframe.css"

class Component extends React.Component
{ 
     render() {
      return (
        <div className = "maps">
          <iframe src={this.props.iframe.src} height={this.props.iframe.height} width={this.props.iframe.width} allow ={this.props.iframe.allow}/>    
        </div>
      );
    }
  };
  



  export default Component;