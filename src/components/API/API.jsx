import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import style from "./API.module.css"
import Category from "../CategoryBar";
import Slider from "../NewsSlider/Slider";

export default function API() {

  const[dataList,setdataList] = useState([])
  const [SelectedCategory , setSelectedCategory] = useState('all')
  


  async function APIData(category){
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${category}&language=ar&apikey=285a84cdd9fa4d2983a87737fadb1886`)
    console.log(response.data.articles)
    setdataList(response.data.articles)
    
  }
  useEffect(()=>{
    APIData(SelectedCategory)
    console.log(dataList)
  },[SelectedCategory])
  

  return (
    <>
    <div className="bg-black text-white flex">
      <h1 className="text-5xl p-5">News WebSite</h1>
      <div className="m-8  absolute right-0">
        <input type="text" className="bg-green-900 border border-1 rounded-md px-12 shadow-sm shadow-white" name="search" placeholder="Search"/>
        <button className="bg-red-900 hover:bg-sky-700 p-1 rounded-md">Search</button>
      </div>
    </div>
    <div className="bg-black">
      <Category SelectedCategory={SelectedCategory} setSelectedCategory={setSelectedCategory}/>
      <Slider newsData={dataList} />
    </div>
    <div className="flex flex-wrap gap-4 justify-center p-2 ">
      {
        dataList.length > 0 ? dataList.map((data)=>(
          <div key={data.url} className="w-full md:w-1/3 lg:w-1/4 shadow-lg border-1 rounded-2xl">
            <h2 className={style.text}>{data.title}</h2>
            <img src={data.urlToImage}/>,
            <p className="p-2">{data.description}</p>
          </div>
        ))
        : <span className="loader"></span>

      }
    </div>

    </>
    
  );
}
