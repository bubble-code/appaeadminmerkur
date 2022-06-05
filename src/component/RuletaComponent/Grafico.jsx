import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2';
import { Col, Divider } from 'antd';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


export function Grafico({ arrayData, tituloGrafico, label1, label2, index1, index2 }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: tituloGrafico,
      },
    },
  };
  arrayData = arrayData.slice(1, arrayData.length - 1);
  const labels = [...arrayData.map(item => item[0].value)];
  const data = {
    labels,
    datasets: [
      {
        label: label1,
        data: arrayData.map((item) => item[index1].value),
        backgroundColor: 'rgba(1, 185, 7, 0.5)',
      },
      {
        label: label2,
        data: arrayData.map((item) => item[index2].value),
        backgroundColor: 'rgba(186, 0, 0, 0.5)',
      },
    ],
  };

  return (
    <Col span={6} className="gutter-row" offset={4} >
      <Divider orientation="left" style={{ border: 'black' }}>Grafico </Divider>
      <div className="sheet-container">
        <Bar data={data} options={options} />
      </div>
    </Col>
  );
}