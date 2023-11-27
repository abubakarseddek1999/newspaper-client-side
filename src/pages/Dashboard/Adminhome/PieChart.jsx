
import { Chart } from 'react-google-charts';

const PieChart = ({ data }) => {
  // Assuming data is an array of objects with 'publication' and 'percentage' properties
  // Example: [{ publication: 'A', percentage: 20 }, { publication: 'B', percentage: 30 }, ...]

  const chartData = [['Publication', 'Percentage'], ...data.map(item => [item.publication, item.percentage])];

  return (
    <Chart
      width={'100%'}
      height={'400px'}
      chartType="PieChart"
      loader={<div className='text-xl'>Loading Chart...</div>}
      data={chartData}
      options={{
        title: 'Publication Article Distribution',
      }}
    />
  );
};

export default PieChart;
