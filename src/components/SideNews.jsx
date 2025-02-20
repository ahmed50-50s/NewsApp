export default function SideNews({newsData = []}){
    console.log(newsData)
    return(
        <>
        {
        newsData.map((news)=>{
            return(
            <div>
             <img src={news.urlToImage} width={"10%"}
            style={{ height: "10%", borderRadius: "20px" }} />
            </div>
            )
        })
            
        }
            
        </>
    )
}