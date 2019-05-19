import './App.css';
import Tabs from './components/Tabs';
import Tab from './components/Tab';
import Title from './components/Title';
import React, { Component, useState, useEffect } from "react";
import FxChart from './components/FxChart';

class App extends React.Component {

  constructor(props) {
    super(props);

    //   this.state = {
    //     options: {
    //       title: {
    //         text: 'CandleStick Chart',
    //         align: 'left'
    //       },
    //       xaxis: {
    //         type: 'datetime'
    //       },
    //       yaxis: {
    //         tooltip: {
    //           enabled: true
    //         }
    //       }
    //     }
    //   }
    // }
    // useFetch = (url) => {
    //   fetch(url).then(res => {
    //     return res.json();
    //   }).then(json => {
    //     let series = [];

    //     let data = [];

    //     json.forEach(element => {
    //       data.push({
    //         x: new Date(element.date),
    //         y: [element.open, element.high, element.low, element.close]
    //       })
    //     });
    //     series.push({ data })
    //     this.setState({ series })
    //   });
  }
  // componentDidMount = () => {
  //   const URL = `http://localhost:5000/chartByMinutes?minutes=${1}`;
  //   this.useFetch(URL);
  // }
  render() {
    return (


      <div className="app">
        <Title />
        <Tabs>

          <div label="1 Minutes">
            <FxChart type={"MIN"} time={1} />
          </div>

          <div label="5 Minutes">
            <FxChart type={"MIN"} time={5} />
          </div>

          <div label="1 Hour">
            <FxChart type={"HOUR"} time={1} />
          </div>

          <div label="1 Week">
            <FxChart type={"WEEK"} time={1} />
          </div>
        </Tabs>

      </div>


    );
  }
}

export default App;
