import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FetchData = () => {
  const [data,setData]=useState("")
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=0928ae4ad07243098d26b27f2663ea58"
      );
      setData(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className="container my-4 ">
      <h3>TOP HEADLINES</h3>
      <div className=" container d-flex justify-content-center align-items-center flex-column my-3  ">
        {data
          ? data.map((items, index) => (
              <div>
                <div
                  className="container my-3 p-3 "
                  style={{ width: "600px", boxShadow: "2px 2px 10px silver" ,borderRadius:"10px"}}
                >
                  <h5 className="my-2">{items.title}</h5>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={items.urlToImage}
                      alt="img not found"
                      className="img-fluid my-1"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <p className="my-2">{items.content}</p>
                  <Link className=" mb-3" to={items.url}>
                    View More
                  </Link>
                </div>
              </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default FetchData;
