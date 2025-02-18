import { useEffect, useState } from "react"


export default function Category({SelectedCategory , setSelectedCategory}){
    
   const [Category, setCategory] = useState(["Politics" , "World" , "Science" , "tech" , "Business" , "Travel" , "Climate" , "Life cycle" , "Food" , "Sports" ])
   const handleClick=(categ)=>{
    setSelectedCategory(categ)
} 
    useEffect(()=>{
    console.log(SelectedCategory)
    },[SelectedCategory])
   return(
    <>
        <div className="flex justify-center">
        <div style={{width:'80%', background:"#303030"}} className="text-white flex justify-center rounded-lg">
            <ul className="flex justify-around">
                {
                    Category.map((cat, index)=>{
                       return <li  className={`cursor-pointer rounded-lg hover:bg-green-900 transition-all p-3 mx-2
                        ${SelectedCategory === cat ? "bg-green-600 text-white" : ""}`} onClick={() => handleClick(cat)} key={index}>
                            {cat}
                        </li>
                    })
                }
            </ul>
        </div>
        </div>
        
    </>
    )
}