let key ='qLNuzuvA6itw5SwHSrwbWzRx5Q0XVbyj';

// GET WEATHER INFORAMTION //
let getWeather = async(id)=>{
    let base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    let query = `${id}?apikey=${key}`;

    let response = await fetch(base + query);

    let data = await response.json();
    return data[0];
};

// GET CITY INFORMATION //

let getCity=async(city)=>{
    let base ='https://dataservice.accuweather.com/locations/v1/cities/search';

    let query = `?apikey=${key}&q=${city}`;

    let response = await fetch(base + query);
    let data = await response.json();

    return data[0];
}
// getCity('vancouver').then(data=>{
//     return getWeather(data.Key);
// })
// .then(data=>{
//     console.log(data)
// })
// .catch(err=>console.log(err));
