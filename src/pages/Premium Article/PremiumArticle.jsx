
import { Helmet } from 'react-helmet';
import PremiumArticlesPage from './PremiumArticlePage';

const PremiumArticle = () => {
    return (
        <div className=''>
             <Helmet>
                <title>NewsBD | premium Articles</title>
            </Helmet>
            {/* Other components or sections */}
            <PremiumArticlesPage />
        </div>
    );
};

export default PremiumArticle;