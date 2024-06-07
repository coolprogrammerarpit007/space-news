

`use strict`;

// Getting Acess to the container
const container = document.querySelector(`.container`);
const loader = document.querySelector(`.loader`);
const header = document.querySelector(`.header`);
let count = 5;
const nasaAPIURL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=${count}`;




// Fetching the API 

const spaceFunction = async function(){
    const data = await fetch(nasaAPIURL);
    const response = await data.json();
    console.log(response);
    return response
}

// Consuming the API
spaceFunction().then((data)=>{
    console.log(data);
    let html = ``;
    // Itterating over data```
    data.forEach((element,index) => {
        // destructuring the data
        const {date,explanation,hdurl,title} = element;
        
        // Now Updating the DOM 

       html +=  `
        <div class="img-container w-[50%] my-4">
            <img src="${hdurl}" alt="planet photo" class="w-full h-auto">
        </div>

        <div class="news-container bg-white p-4 flex flex-col gap-5 w-[50%]">
            <div class="title font-bold capitalize">
                <p>${title}</p>
            </div>
            <div class="description w-[100%]">
                <p class="break-all leading-5">${explanation}</p>
            </div>
            <p class="written"><span class="date">${date}</span> Juan Carlos Casado</p>
        </div>
        `      
    });

    // Now updating it to dom

    container.innerHTML = html;
    setTimeout(()=>{
        if(html){
            loader.classList.add(`hidden`);
            container.classList.remove(`hidden`);
            header.classList.remove(`hidden`);
        }
    },"6000")

    
})
