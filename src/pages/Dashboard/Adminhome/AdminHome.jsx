
import Chart from "react-google-charts";
import useAuth from "../../../Hooks/useAuth";
import PieChart from "./PieChart";
import useMenu from "../../../Hooks/useMenu";



const AdminHome = () => {
    const { user } = useAuth();
    // Example data

    const [menu] = useMenu();
    console.log(menu);

    const ProthomAloPublisher = menu.filter(item => item.publisher_name === 'Prothom Alo').length;

    console.log(ProthomAloPublisher);
    const NewsBDPublisher = menu.filter(item => item.publisher_name === 'NewsBD').length;
    console.log(NewsBDPublisher);

    const DailyStarPublisher = menu.filter(item => item.publisher_name === 'Daily star').length;
    console.log(DailyStarPublisher);


    const totalItems = ProthomAloPublisher + DailyStarPublisher + NewsBDPublisher;

    const ProthomAloPercentage = (ProthomAloPublisher / totalItems) * 100;
    const NewsBDPercentage = (NewsBDPublisher / totalItems) * 100;
    const DailyStarPercentage = (DailyStarPublisher / totalItems) * 100;

    console.log('Prothom Alo Percentage:', ProthomAloPercentage);
    console.log('News BD Percentage:', NewsBDPercentage);
    console.log('Daily Star Percentage:', DailyStarPercentage);

    const publicationData = [
        { publication: 'Prothom Alo', percentage: ProthomAloPercentage },
        { publication: 'newsBD', percentage: NewsBDPercentage },
        { publication: 'Daily star', percentage: DailyStarPercentage },
    ];

    const barChartData = [
        ['Publication', 'Articles'],
        ['Publication Prothom Alo', ProthomAloPercentage],
        ['Publication newsBD', NewsBDPercentage],
        ['Publication Daily star', DailyStarPercentage],
    ];
    const lineChartData = [
        ['Month', ' Prothom Alo', ' newsBD', ' Daily star'],
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