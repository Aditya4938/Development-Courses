import { useState } from "react";
import MyCard from "./MyCard";
import Spinner from "./Spinner";

function Cards({courses,filter}){
    const [like,setLike]=useState([]);
    if(!courses){
        console.log("Spinner");
        <Spinner/>
    }
    else{
        let courseArr=[];
        function getCourses(){
            if(filter==='All'){
                Object.values(courses).forEach((courses)=>{
                    courses.forEach((course)=>{
                        courseArr.push(course);
                    })
                })
                return courseArr;
            }
            else{
                return courses[filter];
            }
        }
        return (
            <div className="flex max-w-[80%] flex-wrap justify-center gap-[1rem]">
                {getCourses().map((course)=>(
                    <MyCard image={course.image.url} title={course.title} description={course.description} like={like} setLike={setLike} id={course.id}/>
                ))}
            </div>
        )
    }
    
}
export default Cards