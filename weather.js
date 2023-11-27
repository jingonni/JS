function onSuccess(position){
    //const latitude = position.coords.latitude;
    //const longitude = position.coords.longitude;
    const latitude = "37.544147";
    const longitude = "126.8357822";
    const api = `2f835c2f785319cfc89907229ccc4f24`;
    const url = 'https://https://api.openweathermap.org/data/2.5/weather?lat=37.544147&lon=126.8357822&appid=2f835c2f785319cfc89907229ccc4f24'

    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        console.log(data.name);
        console.log(data.weather[0].description);
        console.log(data.main.temp);
    });
}
function onFail(){
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=37.544147&lon=126.8357822&appid=2f835c2f785319cfc89907229ccc4f24'
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText =data.weather[0].description;
        city.innerText = data.name;
    });
}

navigator.geolocation.getCurrentPosition(onSuccess,onFail);