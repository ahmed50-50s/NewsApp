import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


export default function API() {

  const[dataList,setdataList] = useState([])

  async function APIData(){
    const response = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_676674bc0db67884c8f002d63c21e98f2e327&country=eg&language=ar`)
    console.log(response.data.results)
    setdataList(response.data.results)
  }
  useEffect(()=>{
    APIData()
  },[])

  return (
    <div className="flex flex-wrap gap-4 justify-center p-2 ">
      {
        dataList.length > 0 ? dataList.map((data)=>(
          <div className="w-1/3 shadow-sm border-1">
            <img src={data.image_url}/>,
            <p>{data.description}</p>
          </div>


        ))
        : <span className="loader"></span>

      }
    </div>

  );
}
