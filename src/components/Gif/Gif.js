import React, { Component } from "react";
import axios from "axios";
import { Row, Col } from "antd";
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
      // console.log(response);
      this.setState({ gifs: response.data.gifs.data });

      axios.get("http://localhost:3001/api/gifs/tech2").then(response => {
        // console.log(response);
        this.setState({ gifs2: response.data.gifs2.data });
      });
    });
    axios.get("http://localhost:3001/api/gifs/tech3").then(response => {
      console.log(response);
    this.setState({ gifs3: response.data.gifs3.data });
   
    });
    axios.get("http://localhost:3001/api/gifs/tech4").then(response => {
      console.log(response);
   this.setState({ gifs4: response.data.gifs4.data });
    });
  }

  render() {
    const { gifs } = this.state;
    const { gifs2 } = this.state;
    const { gifs3} = this.state;
    const { gifs4} = this.state;

    // console.log(gifs);
    // console.log(gifs2);
    // console.log(gifs3);
    // console.log(gifs4);

    // const DemoBox = props => (
    //   <p className={`height-${props.value}`}>{props.children}</p>
    // );

    const gifDisplay = gifs.map(gif => {
      // console.log(gif);
      //const gifDisplay2 = gifs2.map(gif2 => {
      return (
        <div>
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
      console.log("gif2Item", gif2Item.images.original.url);
      return (
        <Row gutter={16}>
      
          <Col span={4}>
            <img
              style={{ width: 425 }}
              src={gif2Item.images.original.url}
              alt="gif2"
            />
          </Col>
        </Row>
      );
    });
    const gifDisplay3 = this.state.gifs3.map(gif3 => {
      console.log("gif3", gif3.images.original.url);
      return (
        <Row gutter={16}>
          
          <Col span={4}>
            <img
              style={{ width: 425 }}
              src={gif3.images.original.url}
              alt="gif3"
            />
          </Col>
        </Row>
      );
    });
    const gifDisplay4 = this.state.gifs4.map(gif4 => {
      console.log("gif3", gif4.images.original.url);
      return (
        <Row gutter={16}>
          
          <Col span={4}>
            <img
              style={{ width: 425 }}
              src={gif4.images.original.url}
              alt="gif4"
            />
          </Col>
        </Row>
  );
});
    return (
      <div className = 'giphies'>
        <div className="giphy">{gifDisplay}</div>
        <div className="giphy"> {gifDisplay2}</div>
        <div className="giphy">{gifDisplay3}</div>
        <div className="giphy">{gifDisplay4}</div>
      </div>
    );
  }
}