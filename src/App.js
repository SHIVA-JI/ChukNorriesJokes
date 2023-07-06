import { useEffect, useState } from 'react';
import './App.css';
import Categories from './category/Categories';

function App() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)



   useEffect(() => {
     let fetchCategories = async () => {
       setLoading(true)
       const fetchApiData = await fetch("https://api.chucknorris.io/jokes/categories")
       const changeToJson = await fetchApiData.json()
       setLoading(false)
       setCategories(changeToJson);
       }   
       fetchCategories()
   }, [])
   
  
  return (<>
    {loading ? <div className="flex flex-col items-center justify-center  mt-10"> <div className="lds-facebook w-full  "><div></div><div></div><div></div></div></div>
      : <div className="  h-fit flex flex-col items-center justify-center">
           <h1 className="m-3 text-4xl text-yellow-500 animate-bounce font-bold ">Chuck Norries</h1>
      <Categories categories={categories}/>
    </div>}
    </>
  );
}

export default App;
