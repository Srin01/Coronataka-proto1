import React from 'react';

class Component extends React.Component
{ 
     render() {
      return (
        <div>
          <iframe src={this.props.iframe.src} height={this.props.iframe.height} width={this.props.iframe.width} allow ={this.props.iframe.allow}/>    
        </div>
      );
    }
  };
  



  export default Component;