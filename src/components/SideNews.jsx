export default function SideNews({ newsData = [] }) {
    console.log(newsData);
    return (
      <div
        className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-xl mt-10 overflow-y-auto"
        style={{ height: "95vh", width: "350px", position: "sticky", top: "60px" }}
      >
        {newsData.map((news) => (
          <div
            key={news.url}
            className="flex items-start gap-2 bg-gray-100 p-2 rounded-lg shadow-sm"
          >
            <img
              src={news.urlToImage}
              alt="News"
              className="w-30 h-20 object-cover rounded-lg"
            />
            
            <div>
                <h3 className="text-sm font-semibold line-clamp-3">
              {news.title?.slice(0, 50)}...
            </h3>
            <button className="bg-green-900 hover:bg-green-700 text-white font-semibold py-1 px-2 m-3 rounded-lg shadow-md transition duration-300">
           Details
          </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  