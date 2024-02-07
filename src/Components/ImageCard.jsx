import React from "react";

let breedName = "chihuahua";
let imgAlt = "a " + breedName;
let queryUrlImg = "https://dog.ceo/api/breed/" + breedName + "/images/random/50";
let cardImg = "src/assets/example.jpg";

// fetch(queryUrlImg)
// .then(function (response) {
//     return response.json();
// }).then(function(data) {
//     let cardImg = data.message[0];
//     console.log(cardImg);
// });

function ImageCard(response) {
    
    return <>
    
    <div className="card" style={{ width: '18rem' }}>
    <img
        src={cardImg}
        className="card-img-top"
        alt={imgAlt}
        style={{ objectFit: "cover", height: "200px" }}
      />
    <div className="card-body text-center">
    <h6 className="card-title">Could this be your new {breedName}?</h6>
    <a href="#" className="btn btn-primary">Get a new photo</a>
  </div>
</div>
    
    </>;


}

export default ImageCard;