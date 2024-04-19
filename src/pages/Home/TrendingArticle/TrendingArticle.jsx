
const TrendingArticle = () => {

    const data = [
        {
            "id": 1,
            "title": "US labour market loosens as job gains slow, unemployment rate hits 3.9…",
            "image": "https://i.ibb.co/8zfcCmG/images-4.jpg",
            "category": "jobs",
            "content": "The US labor market is experiencing loosening trends as job gains slow down, leading to a 3.9% unemployment rate."
        },
        {
            "id": 2,
            "title": "BRAC SDP: Over 4,500 get jobs after two-month training",
            "image": "https://i.ibb.co/s6QTqsh/download-14.jpg",
            "category": "jobs",
            "content": "BRAC SDP reports that over 4,500 individuals secured jobs after completing a two-month training program."
        },
        {
            "id": 3,
            "title": "New technology paves way for new type of quantum communication",
            "image": "https://i.ibb.co/NKvVWrt/prothomalo-english-2022-07-c7f3b6cc-bd46-4c86-b120-4bdcf63d4505-DKXQVSFNOVICHEO2-QCMLEZF5-G4.webp",
            "category": "technology",
            "content": "The latest technology is opening doors for a new era of quantum communication, bringing innovative possibilities."
        },
        {
            "id": 4,
            "title": "Maxwell magic trumps Gaikwad ton as Australia keep T20 series alive",
            "image": "https://i.ibb.co/vq4Zz9V/download.jpg",
            "category": "sports",
            "content": "Maxwell's exceptional performance surpasses Gaikwad's century as Australia secures victory, keeping the T20 series alive."
        }
    ]

    return (
        <div className="my-5">
            <h2 className="text-3xl text-center font-bold my-5"> Trending Articles</h2>

            <div className="grid md:grid-cols-2 gap-3 p-5">
                {data.map(item => <div key={item.id} className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img className="w-full h-full object-bottom" src={item?.image} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{item?.title}</h2>
                        <p>{item.content}</p>
                        <div className="card-actions ">
                            <button className="btn border-b-2  text-white   bg-slate-500 ">Details</button>
                        </div>
                    </div>
                </div> )}
               
            </div>

        </div>
    );
};

export default TrendingArticle;