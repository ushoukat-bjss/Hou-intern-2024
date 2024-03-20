import 'primeflex/primeflex.css';
import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';

const chartData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'Sales',
      data: [540, 325, 702, 620],
      backgroundColor: [
        'rgba(255, 159, 64, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgb(255, 159, 64)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
      ],
      borderWidth: 1,
    },
  ],
};
const chartOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const marginStyle = {
  margin: '0px 75px',
};

const Home = () => {
  return (
    <div class='grid' style={marginStyle}>
      <div class='col-6'>
        <div class='text-center p-3 border-round-sm bg-primary font-bold'>
          <Card title='Bar Graph'>
            <Chart type='bar' data={chartData} options={chartOptions}></Chart>
          </Card>
        </div>
      </div>
      <div class='col-6'>
        <div class='text-center p-3 border-round-sm bg-primary font-bold '>
          <Card title='Pie Chart'>
            <Chart type='pie' data={chartData} options={chartOptions}></Chart>
          </Card>
        </div>
      </div>
      <div class='col-6'>
        <div class='text-center p-3 border-round-sm bg-primary font-bold '>
          <Card title='Line Graph'>
            <Chart type='line' data={chartData} options={chartOptions}></Chart>
          </Card>
        </div>
      </div>
      <div class='col-6'>
        <div class='text-center p-3 border-round-sm bg-primary font-bold '>
          <Card title='Donut Chart'>
            <Chart
              type='doughnut'
              data={chartData}
              options={chartOptions}
            ></Chart>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
