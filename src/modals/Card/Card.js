import React from "react";
import "./card.css";
import { Card, CardImg, CardBody, CardTitle, CardLink } from "reactstrap";

class CardExample extends React.Component {
    render() {
      return (
        <Card className = "mr-3 mt-5 ml-3 card">
            <CardImg  className = "cardImage" src = {this.props.detail.src} alt = {this.props.detail.alt}/>
            <CardBody>
                <CardLink href = "./coronataka" />
                <CardTitle href = "./" className = "cardTitle">{this.props.detail.title}</CardTitle>
            </CardBody>
        </Card>
        )
    }
}

export default CardExample;