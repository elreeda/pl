import { Article } from "../types/order";

interface ArticlesProps {
  articles: Article[];
}

const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <div key={article.articleNo} className="flex gap-x-4">
          <div className="h-28 w-28 rounded-md overflow-hidden">
            {article.articleImageUrl ? (
              <img
                className="h-full w-full object-cover object-center"
                src={article.articleImageUrl}
                alt={article.articleName}
              />
            ) : (
              <div className="h-full w-full bg-gray-800/10 px-4 flex items-center justify-center">
                <svg
                  className="text-gray-600 h-8 w-8"
                  aria-label="no image"
                  role="img"
                >
                  <symbol id="broken-image" viewBox="0 0 17 19">
                    <title>broken-image</title>
                    <g fill="none" stroke="currentColor" strokeMiterlimit="10">
                      <circle cx="12.5" cy="8.5" r="2"></circle>
                      <path d="m.5 14.5 4-7 3.75 7"></path>
                      <path
                        strokeLinecap="square"
                        d="M.5 4.5h16v10H.5zm15-2-14 14"
                      ></path>
                      <path d="m7.5 14.4 2-2.9 2 3"></path>
                    </g>
                  </symbol>
                  <use xlinkHref="#broken-image"></use>
                  <title>Broken image</title>
                </svg>
              </div>
            )}
          </div>
          <div>
            <h3>{article.articleName}</h3>
            <div className="flex flex-col text-gray-400 text-sm">
              <span>€ {article.price}</span>
              <span>Quantity: {article.quantity}</span>
              <span>Article No: {article.articleNo}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Articles;
