`use strict`;

let count = 5;
const nasaAPIURL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=${count}`;




// consuming the API 

const spaceFunction = async function(){
    const data = await fetch(nasaAPIURL);
    const response = await data.json();
    console.log(response);
}

spaceFunction();