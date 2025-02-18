import { useEffect, useState } from "react";

export default function Slider({ newsData = [] }) { 
  const [data, setData] = useState(0);

  const Prev = () => {
    setData((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const Next = () => {
    setData((next) => (next < newsData.length - 1 ? next + 1 : next));
  };

  useEffect(() => {
    if (newsData && newsData.length > 0) {
      console.log(newsData[0].title);
    }
  }, [newsData]);

  return (
    <>
      {newsData && newsData.length > 0 ? (
        <div
          style={{
            position: "relative",
            width: "40%",
            height: "40vh",
            margin:"30px",
            marginLeft:"15%",
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${newsData[data]?.urlToImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
            display: "flex",
            alignItems: "flex-end",
            padding: "20px",
          }}
          
        >
          <button onClick={Prev} style={{
              width:"5%",
             color: "white", 
             position:"absolute",
             top:"50%",
             left:"5%",
             fontSize:"200%",
             backgroundColor:"rgba(0, 0, 0, 0.4)",
             borderRadius:"50%",
             transform: "scale(1)", 
              transition: "transform 0.3s ease",
             }}
             onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")} 
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} 
             >🢘</button>
          <button onClick={Next} style={{
              width:"5%",
             color: "white", 
             position:"absolute",
             top:"50%",
             right:"5%",
             fontSize:"200%",
             backgroundColor:"rgba(0, 0, 0, 0.4)",
             borderRadius:"50%",
             transform: "scale(1)", 
              transition: "transform 0.3s ease",
             }}
             onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")} 
             onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} 
             >🢚</button>
          <h1 className="text-white">{newsData[data]?.title}</h1>
        </div>
      ) : (
        null
      )}

      
    </>
  );
}
