import React, { Component } from 'react';

import axios from 'axios';

export const ROOT_URL = 'http://localhost:9090/api';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: '',
      result: '',
      hotdogScore: '',
      legsScore: '',
    };
    this.onImageURLChange = this.onImageURLChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.printResults = this.printResults.bind(this);
  }
  onImageURLChange(event) {
    this.setState({ imageURL: event.target.value });
  }
  onSubmit(event) {
    const body = {
      imageURL: this.state.imageURL,
    };
    axios.post(`${ROOT_URL}/classify`, body).then((response) => {
      this.printResults(response);
    }).catch((error) => {
      console.log('Error with axios call in createPost()');
      this.setState({
        result: 'invalid URL',
        hotdogScore: '',
        legsScore: '',
      });
    });
  }
  printResults(response) {
    const hotdogScore = response.data.images[0].classifiers[0].classes[0].score;
    const legsScore = response.data.images[0].classifiers[0].classes[1].score;
    let result = '';
    if (hotdogScore < 0.5 && legsScore < 0.5) {
      result = 'Neither hotdogs nor legs';
    } else if (hotdogScore >= legsScore) {
      result = 'Hotdog';
    } else {
      result = 'Legs';
    }
    this.setState({
      result,
      hotdogScore,
      legsScore,
    });
  }
  renderImage() {
    if (this.state.imageURL === '') {
      return (
        <img src="https://s.yimg.com/uu/api/res/1.2/CTUS8Gib1MAt.vALd2FkUw--~B/aD00MTU7dz01NjA7c209MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en-US/video/video.pd2upload.com/video.trendingnow.com@95ce90f3-8856-3162-ab07-92919acfc992_FULL.jpg" alt="Please paste a URL" />
      );
    } else {
      return (
        <img src={this.state.imageURL} alt="Please paste a URL" />
      );
    }
  }
  render() {
    return (
      <div id="wrapper">
        <h1>Hotdogs or Legs?</h1>
        <div>
          <input className="input" placeholder="Paste Image URL Here" onChange={this.onImageURLChange} value={this.state.imageURL} />
          <button className="button" type="button" name="button" onClick={this.onSubmit}>Classify</button>
        </div>
        {this.renderImage()}
        <p>Result: {this.state.result}</p>
        <p>Hotdog Score: {this.state.hotdogScore}</p>
        <p>Legs Score: {this.state.legsScore}</p>
      </div>
    );
  }
}

export default Main;
