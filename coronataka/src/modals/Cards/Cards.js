import React from "react";
import CardExample from "../Card/Card"
import { CardGroup } from "reactstrap";
import "./cards.css";

class CardsList extends React.Component {
    render() {
      return (
        <div>
        <CardGroup className = "cards">
          {
            this.props.cardDetails.map(detail => {
              return <CardExample className= "cards" detail={detail} />
            })
          }
        </CardGroup>
      
        </div>
      );
    }
  }
  

export default CardsList