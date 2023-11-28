import { useParams } from "react-router-dom";

const PremiumNewsDetails = () => {
    const { id } = useParams()
    console.log(id);

    const premiumArticles = [
        {
            id: 1,
            title: 'The Future of Artificial Intelligence',
            image: 'https://i.postimg.cc/TPpTJj28/download-2.jpg',
            publisher: 'Tech Insights',
            description: 'Discover the latest trends and breakthroughs in the field of artificial intelligence.Delve into the intricate world of artificial intelligence as we unravel the latest trends and breakthroughs shaping the future. From machine learning to neural networks, explore the cutting-edge technologies driving advancements in this rapidly evolving field.  Embark on a visionary journey into the future of artificial intelligence, exploring the dynamic landscape where machines and algorithms redefine possibilities. This in-depth exploration navigates through the realms of machine learning, natural language processing, and robotics, unveiling the transformative potential that AI holds across industries and societies.',
            isPremium: true,
        },
        {
            id: 2,
            title: 'Exclusive Travel Destinations for 2023',
            image: 'https://i.postimg.cc/TPpTJj28/download-2.jpg',
            publisher: 'Wanderlust Magazine',
            description: 'Explore hidden gems and exclusive travel destinations for your next adventure.Embark on a journey of discovery with our exclusive travel destinations guide for 2023. Uncover the allure of hidden gems and bespoke experiences that await the modern explorer, as curated by Wanderlust Magazine. Wanderlust Magazine presents an exclusive guide to the most coveted travel destinations for the upcoming year. Immerse yourself in a world of bespoke experiences and hidden treasures as we curate a collection of destinations that promise unparalleled adventure, cultural richness, and awe-inspiring landscapes.',
            isPremium: true,
        },
        {
            id: 3,
            title: 'Mastering the Art of Photography',
            image: 'https://i.postimg.cc/TPpTJj28/download-2.jpg',
            publisher: 'Photo Enthusiast',
            description: 'Learn advanced techniques and tips to enhance your photography skills.Immerse yourself in the captivating realm of photography mastery. This comprehensive guide from Photo Enthusiast offers insights into advanced techniques and tips to elevate your photography skills, whether you are a seasoned photographer or just starting.',
            isPremium: true,
        },
        {
            id: 4,
            title: 'Health and Wellness: A Holistic Approach',
            image: 'https://i.postimg.cc/TPpTJj28/download-2.jpg',
            publisher: 'Healthy Living',
            description: 'Discover a holistic approach to health and wellness for a balanced lifestyle. Take a holistic approach to your well-being with Healthy Living is exploration of health and wellness. Discover a balanced lifestyle through expert insights, covering nutrition, fitness, mindfulness, and strategies for nurturing a healthier mind and body Unlock the secrets to photographic excellence with Photo Enthusiast is comprehensive guide to mastering the art of photography. From advanced shooting techniques to post-processing wizardry, this article is a treasure trove of knowledge for photographers seeking to elevate their craft and capture moments that transcend the ordinary.',
            isPremium: true,
        },
        {
            id: 5,
            title: 'The Rise of Sustainable Fashion',
            image: 'https://i.postimg.cc/TPpTJj28/download-2.jpg',
            publisher: 'Fashion Forward',
            description: 'Explore the growing trend of sustainable and eco-friendly fashion in the industry. Fashion Forward invites you to explore the profound shift towards sustainable and eco-friendly fashion in the industry. Uncover the stories behind ethical practices, eco-conscious materials, and the growing movement towards responsible fashion choices. Fashion Forward takes you behind the seams of the fashion industry is transformative journey towards sustainability. From the runway to the eco-conscious consumer, explore the profound shift towards ethical practices, eco-friendly materials, and the emerging ethos that is reshaping the future of fashion.',
            isPremium: true,
        },
        {
            id: 6,
            title: 'Culinary Delights: A Journey Through Global Cuisine',
            image: 'https://i.postimg.cc/hPBPR7sx/images-2.jpg',
            publisher: 'Food Explorer',
            description: 'Embark on a gastronomic journey through diverse global cuisines and culinary delights.  Join Food Explorer on a gastronomic journey that transcends borders. Indulge your senses with diverse global cuisines and culinary delights, from street food to haute cuisine, as we showcase the rich tapestry of flavors from around the world.Immerse yourself in the transformative journey of mindful living with Mindfulness Today is guide. Navigate the art of being present, cultivating inner peace, and fostering a deeper connection with the world. From meditation practices to practical tips, this article is a roadmap to integrating mindfulness into your daily life. ',
            isPremium: true,
        },
        {
            id: 7,
            title: 'The Art of Mindful Living',
            image: 'https://i.postimg.cc/hPBPR7sx/images-2.jpg',
            publisher: 'Mindfulness Today',
            description: 'Learn practical tips and techniques for incorporating mindfulness into your daily life. Mindfulness Today presents "The Art of Mindful Living," a guide to incorporating mindfulness into your daily life. Learn practical tips and transformative techniques that foster a deeper connection with the present moment, promoting overall well-being.',
            isPremium: true,
        },
        {
            id: 8,
            title: 'Innovation in Renewable Energy',
            image: 'https://i.postimg.cc/hPBPR7sx/images-2.jpg',
            publisher: 'GreenTech Review',
            description: 'Stay updated on the latest innovations and developments in the field of renewable energy.GreenTech Review provides an in-depth exploration of innovation in renewable energy. Stay informed about the latest developments, breakthrough technologies, and sustainable practices that are shaping the future of clean and green energy solutions.',
            isPremium: true,
        },
        {
            id: 9,
            title: 'Exploring the Wonders of Space',
            image: 'https://i.postimg.cc/hPBPR7sx/images-2.jpg',
            publisher: 'Astro World',
            description: 'Embark on a cosmic journey as we explore the wonders of space and the universe. Embark on a cosmic journey with Astro World as we explore the wonders of space and the universe. From celestial phenomena to the latest space missions, this article invites you to contemplate the vastness and mysteries beyond our planet.',
            isPremium: true,
        },
        {
            id: 10,
            title: 'Unveiling Ancient Mysteries: Archaeological Discoveries',
            image: 'https://i.postimg.cc/hPBPR7sx/images-2.jpg',
            publisher: 'History Unearthed',
            description: 'Delve into the mysteries of ancient civilizations through recent archaeological discoveries. History Unearthed invites you to delve into the mysteries of ancient civilizations through recent archaeological discoveries. Uncover the secrets of lost cities, decipher ancient artifacts, and gain a deeper understanding of the rich tapestry of human history History Unearthed invites you to delve into the mysteries of ancient civilizations through recent archaeological discoveries. Uncover the secrets of lost cities, decipher ancient artifacts, and gain a deeper understanding of the rich tapestry of human history',
            isPremium: true,
        },
        // Add more premium articles as needed
    ];

    console.log(premiumArticles);
    const PremiumNewsArticle = premiumArticles?.find(item => item.id == id)
    console.log(PremiumNewsArticle);

    return (
        <div className="pt-20">

            <div>
                <h2 className="text-center font-bold text-2xl md:text-3xl">Read this Article of news</h2>
            </div>

            <div className="p-5 rounded-xl border">
                <img className="rounded-xl w-full" src={PremiumNewsArticle?.image} alt="" />
                <div className="flex justify-between mt-5">
                    <h2 className="text-xl font-bold"> News name: {PremiumNewsArticle?.title}</h2>
                    <p className="font-bold ">{PremiumNewsArticle?.publisher_name}</p>

                </div>
                <p className="my-5 text-2xl md:text-3xl ">{PremiumNewsArticle?.description
                }</p>


            </div>



        </div>
    );
};

export default PremiumNewsDetails;