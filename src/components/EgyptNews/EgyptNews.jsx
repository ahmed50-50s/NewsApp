export default function EgyptNews(props) {
  console.log(props);
  return (
    <>
      <div
        className="flex flex-wrap bg-blue-900 m-5 mr-12 w-2/5 h-auto "
        style={{ borderRadius: "20px", backgroundColor: "#303030" }}
      >
        <div>
            
        </div>
        <div className="flex m-3 items-center">
          <img
            src="https://www.tech-wd.com/wd/wp-content/uploads/2025/02/Egypt-Ventures-giza-systems.jpg"
            width={"50%"}
            style={{ height: "60%", borderRadius: "20px" }}
            className="mr-4"
          />
          <div>
            <p className="text-white">
            شراكة استراتيجية بين Giza Systems و Egypt Ventures لدعم الشركات
            الناشئة
          </p>
          <button className="bg-green-900 hover:bg-blue-700 text-white font-semibold py-1 px-2 m-3 rounded-lg shadow-md transition duration-300">
          Show Details
          </button>
          </div>
          

          
        </div>
        <div className="flex m-3 items-center">
          <img
            src="https://www.aljazeera.net/wp-content/uploads/2022/01/RTX7GR8D.jpg?resize=1920%2C1440"
            width={"50%"}
            style={{ height: "60%", borderRadius: "20px" }}
            className="mr-4"
          />
          <div>
          <p className="text-white">
            شراكة استراتيجية بين Giza Systems و Egypt Ventures لدعم الشركات
            الناشئة
          </p>
          <button className="bg-green-900 hover:bg-blue-700 text-white font-semibold py-1 px-2 m-3 rounded-lg shadow-md transition duration-300">
          Show Details
          </button>
          </div>
          
        </div>
      </div>
    </>
  );
}
