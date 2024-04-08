import React, {useState,useEffect} from "react";

function App(){
  const url="https://jsonplaceholder.typicode.com/users";
  const [data,setData]=useState([]);
  


const fetchInfo=()=>{
  return fetch(url)
    .then((response)=>response.json())
    .then((data)=>setData(data))

  
}
useEffect(()=>{
  fetchInfo();
},[]);

return(

  <div>
    <h1>This is show data Fromate</h1>
    <div>
      {data.map((dataObj,index)=>{
            return(
            
            <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
          );
      })}
  
      
    </div>
  </div>

);



}
export default App;  
