import { Link } from "react-router-dom";


const PremiumArticlesPage = () => {
  // Sample data for premium articles
  const premiumArticles = [
    {
      id: 1,
      title: 'The Future of Artificial Intelligence',
      image: 'https://i.postimg.cc/TPpTJj28/download-2.jpg',
      publisher: 'Tech Insights',
      description: 'Discover the latest trends and breakthroughs in the field of artificial intelligence.',
      isPremium: true,
    },
    {
      id: 2,
      title: 'Exclusive Travel Destinations for 2023',
      image: 'https://i.postimg.cc/TPpTJj28/download-2.jpg',
      publisher: 'Wanderlust Magazine',
      description: 'Explore hidden gems and exclusive travel destinations for your next adventure.',
      isPremium: true,
    },
    {
      id: 3,
      title: 'Mastering the Art of Photography',
      image: 'https://i.postimg.cc/TPpTJj28/download-2.jpg',
      publisher: 'Photo Enthusiast',
      description: 'Learn advanced techniques and tips to enhance your photography skills.',
      isPremium: true,
    },
    {
      id: 4,
      title: 'Health and Wellness: A Holistic Approach',
      image: 'https://i.postimg.cc/TPpTJj28/download-2.jpg',
      publisher: 'Healthy Living',
      description: 'Discover a holistic approach to health and wellness for a balanced lifestyle.',
      isPremium: true,
    },
    {
      id: 5,
      title: 'The Rise of Sustainable Fashion',
      image: 'https://i.postimg.cc/TPpTJj28/download-2.jpg',
      publisher: 'Fashion Forward',
      description: 'Explore the growing trend of sustainable and eco-friendly fashion in the industry.',
      isPremium: true,
    },
    {
      id: 6,
      title: 'Culinary Delights: A Journey Through Global Cuisine',
      image: 'https://i.postimg.cc/hPBPR7sx/images-2.jpg',
      publisher: 'Food Explorer',
      description: 'Embark on a gastronomic journey through diverse global cuisines and culinary delights.',
      isPremium: true,
    },
    {
      id: 7,
      title: 'The Art of Mindful Living',
      image: 'https://i.postimg.cc/hPBPR7sx/images-2.jpg',
      publisher: 'Mindfulness Today',
      description: 'Learn practical tips and techniques for incorporating mindfulness into your daily life.',
      isPremium: true,
    },
    {
      id: 8,
      title: 'Innovation in Renewable Energy',
      image: 'https://i.postimg.cc/hPBPR7sx/images-2.jpg',
      publisher: 'GreenTech Review',
      description: 'Stay updated on the latest innovations and developments in the field of renewable energy.',
      isPremium: true,
    },
    {
      id: 9,
      title: 'Exploring the Wonders of Space',
      image: 'https://i.postimg.cc/hPBPR7sx/images-2.jpg',
      publisher: 'Astro World',
      description: 'Embark on a cosmic journey as we explore the wonders of space and the universe.',
      isPremium: true,
    },
    {
      id: 10,
      title: 'Unveiling Ancient Mysteries: Archaeological Discoveries',
      image: 'https://i.postimg.cc/hPBPR7sx/images-2.jpg',
      publisher: 'History Unearthed',
      description: 'Delve into the mysteries of ancient civilizations through recent archaeological discoveries.',
      isPremium: true,
    },
    // Add more premium articles as needed
  ];

  return (
    <section className="bg-gray-100 py-16 ">
      <div className=" mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Premium Articles</h2>

        <div className="grid grid-cols-1 p-2 md:grid-cols-2  lg:grid-cols-3 gap-10">
          {premiumArticles.map((article) => (
            <div key={article.id} data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className="card bg-base-100 h-[600px] shadow-xl">
              <div className="border h-[300px]">
                <figure><img className="h-[300px] w-full" src={article.image} alt="news" /></figure>
              </div>
              {/* <p className="bg-slate-900 text-white absolute right-0 p-4 mr-4 mt-4">{price}</p> */}
              <div className="card-body  flex flex-col ">
                <h2 className="card-title  ">{article.title}</h2>
                <p> <span className="text-xl font-bold">Publisher</span> :{article.publisher}</p>
                <p>{article?.description?.slice(0, 70)}...</p>
                <div className="card-actions justify-center">
                  <Link to={`/premiumNews/${article?.id}`}><button className="btn text-center bg-slate-100 btn-outline text-black border-0 border-blue-400 border-b-4">Details</button></Link>

                </div>
              </div>
            </div>


          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumArticlesPage;
