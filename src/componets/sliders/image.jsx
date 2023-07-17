import React, { useState } from "react";

import "./image.css";
function Image(props) {
  const imageList = [
    "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
    "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
    "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
    "https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g",
    "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4",
    "https://fastly.picsum.photos/id/5/5000/3334.jpg?hmac=R_jZuyT1jbcfBlpKFxAb0Q3lof9oJ0kREaxsYV3MgCc",
    "https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I",
    "https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o",
    "https://fastly.picsum.photos/id/8/5000/3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA",
    "https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc",
  ];
  const [index, setIndex] = useState(0);
  const onClickNext = () => {
    if (index + 1 < imageList.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const onClickBlack = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(imageList.length - 1);
    }
  };
  return (
    <>
      <div className="image">
        <img src={imageList[index]} alt="anhnen" />
        <h4>
          {index + 1}/{imageList.length}
        </h4>
        <div className="d-flex ">
          <button
            className="btn btn-primary"
            // onClick={() => setIndex(index - 1)}
            onClick={onClickBlack}
          >
            <i className="fa-solid fa-chevron-left mx-2"></i>
            Black
          </button>
          <button
            className="btn btn-success"
            // onClick={() => setIndex(index + 1)}
            onClick={onClickNext}
          >
            Next
            <i className="fa-solid fa-chevron-right mx-2"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Image;