/*baseURL = fetch("https://api.spacexdata.com/v4/launches/latest")

function apendImage(){
    fetch("https://api.spacexdata.com/v4/launches/latest")
    .then((response) => response.json())
    .then((data) => {
        let imgOne = document.getElementById("imageOne");
        imgOne.src = data.fairings;
    });
    }
    apendImage();
    */

    const baseURL = "https://api.spacexdata.com/v4/launches/latest"

   let dataContainer = document.querySelector('.dataContainer');
   let file = document.getElementById('topsecretfile');
   let info = document.getElementById('topsecretfile');
   let phrase = document.getElementById('instructions');

    file.addEventListener('click', fetchData);

    
    
    async function fetchData (){
        const response = await fetch(baseURL);
        const json = await response.json();
        displayData (json);
    }

    let displayData = data => {
        console.log(data);
    

    let fileContainer = document.getElementById('showData')
    
    fileContainer.firstElementChild != null?
    fileContainer.removeChild(file) :
    null;

    fileContainer.firstElementChild != null?
    fileContainer.removeChild(phrase) :
    null;


    let data1 = document.createElement ('h1');
    data1.className = ('details')
    data1.innerText = `${data.name}`;
    data1.style = "color: white;"

    let data2 = document.createElement ('p');
    data2.className = ('details')
    data2.style = "color:  violet;"
    data2.innerText = `${data.details}`;
    
    let img = document.createElement('img');
    img.className = ('image1')
    img.src = "https://live.staticflickr.com/65535/49927519643_b43c6d4c44_o.jpg"
    img.style = "height: 300px; width: 500px;"



    dataContainer.appendChild(data1);
    dataContainer.appendChild(data2);
    dataContainer.appendChild(img);
    }
