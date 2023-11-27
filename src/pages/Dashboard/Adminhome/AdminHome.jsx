
import Chart from "react-google-charts";
import useAuth from "../../../Hooks/useAuth";
import PieChart from "./PieChart";



const AdminHome = () => {
    const { user } = useAuth();
    // Example data
    const publicationData = [
        { publication: 'A', percentage: 20 },
        { publication: 'B', percentage: 30 },
        { publication: 'C', percentage: 50 },
    ];
    const barChartData = [
        ['Publication', 'Articles'],
        ['Publication A', 15],
        ['Publication B', 25],
        ['Publication C', 10],
    ];
    const lineChartData = [
        ['Month', 'Publication A', 'Publication B', 'Publication C'],
        ['Jan', 10, 20, 15],
        ['Feb', 15, 25, 18],
        ['Mar', 20, 30, 25],
        ['Apr', 25, 35, 30],
    ];

    return (
        <div className="">
            <h2 className="text-3xl text-center font-bold">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            <div>
                {/* Your other content */}
                <PieChart data={publicationData} />
            </div>
            <div>
                <h2 className="text-xl font-bold text-center">Bar Chart:</h2>
                <Chart
                    width={'100%'}
                    height={'300px'}
                    chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                    data={barChartData}
                    options={{
                        title: 'Articles per Publication',
                        chartArea: { width: '50%' },
                        hAxis: { title: 'Articles', minValue: 0 },
                        vAxis: { title: 'Publication' },
                    }}
                />
            </div>
            <div className="mt-10">
                <h2 className="text-xl font-bold text-center mt-5">Line Chart:</h2>
                <Chart
                    width={'100%'}
                    height={'300px'}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={lineChartData}
                    options={{
                        title: 'Monthly Article Trend',
                        chartArea: { width: '60%' },
                        hAxis: { title: 'Month' },
                        vAxis: { title: 'Articles' },
                    }}
                />
            </div>

        </div>
    );
};

export default AdminHome;