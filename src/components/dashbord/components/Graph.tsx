import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { graphDataInterface } from '../Dashbord';
import styled from 'styled-components';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options =  {
  responsive: true,
  maintainAspectRatio : false,
  plugins: {
    title: {
      display: true,
      text: 'World Wide Covid Info'
    },

  },
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true
      }
    },
    y: {
      display: true,
      title: {
        display: true,
        text: 'Value'
      },
      suggestedMin: 0,
      suggestedMax: 200,
    }
  }
}





const Graph = ({data,date,lable,color}: graphDataInterface) => {
  const labels = date;
  const fullData = {
    labels,
    datasets: [
      {
        label: lable,
        data:  data,
        borderColor: color.color1,
        backgroundColor: color.color2,
        tension: 0.5,
        pointStyle:'none',
        pointRadius: 0,
        borderWidth:1
      },
    ],
  };
  return (
    <GraphWrapper>
      <Line options={options} data={fullData} />
    </GraphWrapper>
  )
}

export default React.memo(Graph);

const GraphWrapper = styled.div`
 height: 60vh;
 position: relative;
`