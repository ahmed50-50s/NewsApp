import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Category from "../CategoryBar";
import Slider from "../NewsSlider/Slider";
import OtherNews from "../OtherNews/OtherNews";
import SideNews from "../SideNews";

export default function API() {
  const [dataList, setdataList] = useState([]);
  const [AllData, setAllData] = useState([]);
  const [EgyptData , setEgyptData] = useState([])
  const [SelectedCategory, setSelectedCategory] = useState("all");

  async function APIData(category, setData) {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${category}&language=ar&apikey=285a84cdd9fa4d2983a87737fadb1886`
    );
    console.log(response.data.articles);
    setData(response.data.articles);
  }

  useEffect(() => {
    APIData("all", setAllData);
  }, []);

  useEffect(()=>{
    APIData("egypt" ,setEgyptData )
    console.log(`EgyptData = ${EgyptData}`)
  },[])

  useEffect(() => {
    APIData(SelectedCategory, setdataList);
  }, [SelectedCategory]);

  return (
    <>
      <div className="bg-black text-white flex">
        <h1 className="text-5xl p-5">News WebSite</h1>
        <div className="m-8  absolute right-0">
          <input
            type="text"
            className="bg-green-900 border border-1 rounded-md px-12 shadow-sm shadow-white"
            name="search"
            placeholder="Search"
          />
          <button className="bg-red-900 hover:bg-sky-700 p-1 rounded-md">
            Search
          </button>
        </div>
      </div>
      <div className="bg-black">
        <Category
          SelectedCategory={SelectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="flex">
          <Slider newsData={AllData} />
          <OtherNews />
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap" style={{ backgroundColor: "#f3f2ea" }}>
  
  <div className="flex flex-wrap gap-4 justify-center p-2 w-full md:w-3/4">
    {dataList.length > 0 ? (
      dataList.map((data) => (
        <div
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 mb-12"
          key={data.url}
        >
          <div
            className="shadow-xl rounded-2xl relative"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${data.urlToImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "30vh",
              marginBottom: "20px",
            }}
          >
            <h2 className="text-green-400 m-2 absolute bottom-0 w-90">
              {data.title}
            </h2>
          </div>
          <div
            className="bg-white shadow-xl rounded-2xl relative p-4"
          >
            <p className="mb-4">
              {data.description?.split("").slice(0, 120).join("")}...
            </p>
            <button className="w-full bg-green-900 hover:bg-green-700 text-white font-semibold py-2 rounded-lg shadow-md transition duration-300">
              Show Details
            </button>
          </div>
        </div>
      ))
    ) : (
      <span className="loader"></span>
    )}
  </div>

  <div className="hidden md:block">
    <SideNews newsData={EgyptData} />
  </div>
  
</div>


      
    </>
  );
}
