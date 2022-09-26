import React, { useState } from "react";
import ReactModal from "react-modal";

export const CardNews = ({ item }) => {
  const getdata = (data) => {
    console.log(data.title);
  };

  return (
    <div class="card ml-5 col col-4" style={{ width: "15rem" }}>
      <img
        class="card-img-top img"
        src={item.urlToImage}
        alt="Card image cap"
      />
      <div class="card-body">
        <p class="card-text">{item.title}</p>
        <button class="btn read_more btn-primary" onClick={() => getdata(item)}>
          Read More
        </button>
      </div>
    </div>
  );
};
