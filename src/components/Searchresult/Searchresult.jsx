import React from "react";
import styled from "styled-components";
import { BASE_URL, Button } from "../../App.jsx";

const Searchresult = ({ data,searchitem }) => {
  var URL;
  data ? (URL = `${BASE_URL}+${data.image}`) : " ";



  return (
    <Foodcontainer>
      <Foodcards>
        {
       data?.filter((item)=>{
           return searchitem.toLowerCase()===""?item:item.name.toLowerCase().includes(searchitem)
        }).map((item) => (
          <Foodcard>
            <div className="fimg">
              <img src={BASE_URL + item.image} alt="img" />
            </div>
            <div className="finfo">
              <div>
                <h3>{item.name}</h3>
              </div>
              <div>
                <p>{item.text}</p>
              </div>
              <div className="fbutton">
                <Button>{item.price.toFixed(2)}</Button>
              </div>
            </div>
          </Foodcard>
        ))
        }
      </Foodcards>
    </Foodcontainer>
  );
};

export default Searchresult;
const Foodcontainer = styled.section``;

const Foodcards = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 15px;
  row-gap: 30px;
  padding-top: 80px;
`;
const Foodcard = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;

 border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

     background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(24.1842px);

  border-radius: 20px;

  .fimg{
    margin-top: 7px;
  }
  .finfo{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  p {
    max-width: 200px;
    min-height: 59px;
  }
  h {
    font-weight: 600;
    font-size: 16px;
    line-height: normal;
  }
  .fbutton{
    margin-left: 127px;
  }
`;


