import axios from "axios";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import Category from "../CategoryBar";
import Slider from "../NewsSlider/Slider";
import OtherNews from "../OtherNews/OtherNews";
import SideNews from "../SideNews";

Modal.setAppElement("#root");

export default function API() {
  const [dataList, setdataList] = useState([]);
  const [AllData, setAllData] = useState([]);
  const [EgyptData, setEgyptData] = useState([]);
  const [SelectedCategory, setSelectedCategory] = useState("all");
  const [VisibleCount, setVisibleCount] = useState(6);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  async function APIData(category, setData) {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${category}&language=ar&apikey=285a84cdd9fa4d2983a87737fadb1886`
    );
    setData(response.data.articles);
  }

  useEffect(() => {
    APIData("all", setAllData);
    APIData("egypt", setEgyptData);
  }, []);

  useEffect(() => {
    APIData(SelectedCategory, setdataList);
  }, [SelectedCategory]);

  const handleVisibleCount = () => {
    setVisibleCount(VisibleCount === dataList.length ? 6 : dataList.length);
  };

  const openModal = (news) => {
    setSelectedNews(news);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedNews(null);
  };

  return (
    <>
      {/* ✅ Header */}
      <div className="bg-black text-white flex justify-center p-5">
        <h1 className="text-4xl sm:text-5xl font-bold">News Website</h1>
      </div>

      {/* ✅ Category and Sliders */}
      <div className="bg-black">
        <Category
          SelectedCategory={SelectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="flex lg:flex-row">
          <Slider newsData={AllData} />
          <OtherNews />
        </div>
      </div>

      {/* ✅ News Grid Section */}
      <div className="flex flex-wrap md:flex-nowrap bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 w-full md:w-3/4">
          {dataList.length > 0 ? (
            dataList.slice(0, VisibleCount).map((data) => (
              <div
                className="shadow-xl rounded-2xl overflow-hidden"
                key={data.url}
              >
                {/* ✅ Image Background */}
                <div
                  className="relative h-48 sm:h-56 md:h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${data.urlToImage})`,
                  }}
                >
                  <h2 className="text-green-400 absolute bottom-3 left-3 text-lg sm:text-xl font-semibold">
                    {data.title}
                  </h2>
                </div>

                {/* ✅ Content Section */}
                <div className="bg-white p-4">
                  <p className="text-gray-700 mb-4">
                    {data.description?.slice(0, 100)}...
                  </p>
                  <button
                    onClick={() => openModal(data)}
                    className="w-full bg-green-700 hover:bg-green-600 text-white font-semibold py-2 rounded-lg shadow-md transition duration-300"
                  >
                    عرض التفاصيل
                  </button>
                </div>
              </div>
            ))
          ) : (
            <span className="loader"></span>
          )}

          {/* ✅ Show More Button */}
          {dataList.length > 6 && (
            <div className="w-full flex justify-center">
              <button
                onClick={handleVisibleCount}
                className="bg-green-700 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300 mt-4"
              >
                {VisibleCount >= dataList.length ? "عرض أقل" : "عرض المزيد"}
              </button>
            </div>
          )}
        </div>

        {/* ✅ Side News (hidden on small screens) */}
        <div className="hidden md:block">
          <SideNews newsData={EgyptData} />
        </div>
      </div>

      {/* ✅ Modal for Detailed News */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal bg-gray-800 text-green-500 p-5 m-20 rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 mx-auto text-right max-h-[80vh] overflow-y-auto border-1"
      >
        {selectedNews && (
          <div>
            <h2 className="text-2xl font-bold mb-4">{selectedNews.title}</h2>

            {selectedNews.urlToImage && (
              <img
                src={selectedNews.urlToImage}
                alt={selectedNews.title}
                className="w-full h-64 object-cover rounded-md shadow-md mb-4"
              />
            )}

            <p className="mb-4 leading-loose">{selectedNews.description}</p>

            <div className="text-sm mb-4 space-y-2">
              <p>
                <span className="font-semibold">✍️ الكاتب:</span>{" "}
                {selectedNews.author || "غير معروف"}
              </p>
              <p>
                <span className="font-semibold">📅 تاريخ النشر:</span>{" "}
                {new Date(selectedNews.publishedAt).toLocaleDateString("ar-EG")}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <a
                href={selectedNews.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 font-semibold transition duration-300"
              >
                📖 اقرأ المزيد
              </a>

              <button
                onClick={closeModal}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md shadow-md transition duration-300"
              >
                إغلاق
              </button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
