import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";

const useFetch = (url) => {
  const [series, updateData] = useState(undefined);

  useEffect(() => {
    fetch(url).then(res => {
      return res.json();
    }).then(json => {
      let fxSeries = [];
      let data = [];
      json.forEach(element => {
        data.push({
          x: new Date(element.date),
          y: [element.open, element.high, element.low, element.close]
        })
      });
      fxSeries.push({ data })
      updateData(fxSeries);
    });
  }, []);

  return series;
};

const FxChart = (props) => {
  const URL = `https://www.fxempire.com/api/v1/en/markets/eur-usd/chart?time=${props.type}_${props.time}`;
  const series = useFetch(URL);
  const max = props.type=="WEEK" ? 1.3:1.13;
  const options = {
    title: {
      text: 'EUR - USD',
      align: 'left'
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      max:max,
      tooltip: {
        enabled: true
      }
    }
  }


  return (
    <div className="row">
      <div className="mixed-chart">
        {
          series && <Chart
            options={options}
            series={series}
            type="candlestick"
            width="500"
            height="auto"
          />
        }
        {
          !series && <div>Loading...</div>
        }
      </div>
    </div>
  )
}

export default FxChart;