
import styled from "styled-components";
import './App.css'
import { useEffect, useState } from "react";
import Searchresult from "./components/Searchresult/Searchresult";

export const BASE_URL="http://localhost:9000";
function App() {
  const [data ,setdata]=useState(null);
  const [loading,setloading]=useState(0);
  const [err,seterr]=useState('');
  const [searchitem,setsearchitem]=useState('');
  const btns=['ALL','BREAKFAST','LUNCH','DINNER'];
  const [issel,setissel]=useState('');
  const [fildata,setfildata]=useState(null);
  
 useEffect(()=>{
  const fetchfooddata= async()=>{
   setloading(1);
    try{
      const response=await fetch(BASE_URL);
    const json=await response.json();
    setdata(json);
    setfildata(json);
    console.log(fildata);
    setloading(0);
    }catch(err){
      seterr('some error occured');

    }
    
 }
 fetchfooddata();
},[])
if(err){
 return <div>{err}</div>
}
if(loading){
 return <div>Loading...</div>;
}


var btnfil=(butt)=>{
  if(butt==='ALL'){
    setfildata(data);
  }
  else{
    const fil2=data?.filter((item)=>{
      return item.type.toLowerCase().includes(butt.toLowerCase());
    })
    
    setfildata(fil2);
  }
  setissel(butt);
}




  return (
    <>
    <Container>
      <Top>
       <div className="logo">
         <img src="../public/logo.svg" alt="" />
       </div>
       <div className="search">
               <input type="text" name="" id="" placeholder="search food..." onChange={(e)=>{setsearchitem(e.target.value)}} />

       </div>
   
      </Top>
      <Filter>
   
     {
       btns.map((butt)=>(
        <Btns is={issel===butt} key ={butt} onClick={()=>{btnfil(butt)}}  >
            
          {butt}
        
        </Btns>
      ))
     }
    
      </Filter>
    </Container>
              <Searchresult  data={fildata} searchitem={searchitem}/>

      
     
    </>
  )
}

export default App
const Container=styled.div`
  background-color: #323334;
  max-width: 100vw;
  margin: 0 auto;

`
const Top=styled.div`
  display: flex;
  min-height: 140px;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  padding-bottom: 0px;
  
  input{
    padding: 11px 157px 10px 15px;
    background-color: #080808;
    width: 285;
    height: 40px;
    font-size: 16px;
    border-radius: 5px;
    font-weight: 400;
    border: none;
    color: white;
    &::placeholder{
      color: white;      
    }


  }
`
const Filter=styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;
    padding-bottom:11px;
    

  
`
export const Button=styled.button`
  border-radius: 5px;
background: #FF4343;
padding :9px 15px;
border: none;
border-radius: 5px;
  color: white;
  cursor: pointer;
  
`
const Btns=styled.button`
  display: flex;
  gap: 12px;
  border: none;
  
    /* background: #FF4343; */
    border: none;
    padding: 7px 11px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${({is})=>(is?"black":"red")};
    color: ${({is})=>(is)?"white":"white"};
    
  

`
const FoodCardContainer=styled.section``
const FoodCard=styled.div``