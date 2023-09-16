import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { apiUrl, filterData } from "./data";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";

function App() {
  // let result;
  const [loading,setLoading]=useState(true);
  const [courses, setCourses] = useState(null);
  const [filter, setFilter] = useState(filterData[0].title);
  useEffect(() => {
    setLoading(true);
    async function getData() {
      let response = await fetch(apiUrl);
      let result = await response.json();
      setCourses(result.data);
    }
    getData();
    setLoading(false);
  }, []);

  return (
    <div
      className="App bg-[#4a4e69] flex flex-col items-center h-[100vh] w-[100wh]"
    >
      <Navbar />
      <div className="flex justify-center gap-[1rem] my-[1rem]">
        {filterData.map((index) => (
          <Filter
            key={index.id}
            filterName={index.title}
            setFilter={setFilter}
            filter={filter}
          />
        ))}
      </div>
      {
        loading?<Spinner/>:<Cards courses={courses} filter={filter}/>
      }
    </div>
  );
}

export default App;
