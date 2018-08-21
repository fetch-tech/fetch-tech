import { Col, Row } from "antd";
import axios from "axios";
import React, { Component } from "react";
//import Stories from "../Stories/Stories";
import "./Gif.css";

export default class Gif extends Component {
  state = {
    gifs: [],
    gifs2: [],
    gifs3: [],
    gifs4: []
  };

  componentDidMount() {
    axios.get("http://localhost:3001/api/gifs/tech").then(response => {
      this.setState({ gifs: response.data.gifs.data });

      axios.get("http://localhost:3001/api/gifs/tech2").then(response => {
        this.setState({ gifs2: response.data.gifs2.data });
      });
    });
    axios.get("http://localhost:3001/api/gifs/tech3").then(response => {
      this.setState({ gifs3: response.data.gifs3.data });
    });
    axios.get("http://localhost:3001/api/gifs/tech4").then(response => {
      this.setState({ gifs4: response.data.gifs4.data });
    });
  }

  render() {
    const { gifs } = this.state;
    // const { gifs2 } = this.state;
    // const { gifs3 } = this.state;
    // const { gifs4 } = this.state;

    // const DemoBox = props => (
    //   <p className={`height-${props.value}`}>{props.children}</p>
    // );

    const gifDisplay = gifs.map(gif => {
      //const gifDisplay2 = gifs2.map(gif2 => {
      return (
        <div className="gifColm1">
          <Row gutter={16}>
            <Col span={4}>
              <img
                style={{ width: 425 }}
                src={gif.images.original.url}
                alt="gif1"
              />
            </Col>
            <Col span={4} />
          </Row>
        </div>
      );
    });

    const gifDisplay2 = this.state.gifs2.map(gif2Item => {
      return (
        <div className="gifColm2">
          <Row gutter={16}>
            <Col span={4}>
              <img
                style={{ width: 425 }}
                src={gif2Item.images.original.url}
                alt="gif2"
              />
            </Col>
          </Row>
        </div>
      );
    });
    const gifDisplay3 = this.state.gifs3.map(gif3 => {
      return (
        <div className="gifColm1">
          <Row gutter={16}>
            <Col span={4}>
              <img
                style={{ width: 425 }}
                src={gif3.images.original.url}
                alt="gif3"
              />
            </Col>
          </Row>
        </div>
      );
    });
    const gifDisplay4 = this.state.gifs4.map(gif4 => {
      return (
        <div className="gifColm2">
          <Row gutter={16}>
            <Col span={4}>
              <img
                style={{ width: 425 }}
                src={gif4.images.original.url}
                alt="gif4"
              />
            </Col>
          </Row>
        </div>
      );
    });
    return (
      <div className="giphies">
        <div className="giphy">{gifDisplay}</div>
        <div className="giphy"> {gifDisplay2}</div>
        <div className="giphy">{gifDisplay3}</div>
        <div className="giphy">{gifDisplay4}</div>
      </div>
    );
  }
}
