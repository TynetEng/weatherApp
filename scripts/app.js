let cityForm = document.querySelector('form');
let card = document.querySelector('.card');
let locationDetails = document.querySelector('.details');
let dayTimeImage = document.querySelector('img.time');
let iconImage = document.querySelector('.icon img');


let updateUI=(data)=>{
    const {cityDetails, weatherDetails} = data;
    
    //update UI template

    locationDetails.innerHTML=`
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weatherDetails.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weatherDetails.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>`
    ;

    // update the night/day &icon images
    let iconSrc= `image/icons/${weatherDetails.WeatherIcon}.svg`;
    iconImage.setAttribute('src', iconSrc);

    let timeSrc = weatherDetails.IsDayTime ? 'image/day.svg' : 'image/night.svg';
    
    dayTimeImage.setAttribute('src', timeSrc)

    // remove the dispaly none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }
}

let updateCity = async(city)=>{
    let cityDetails = await getCity(city)
    let weatherDetails = await getWeather(cityDetails.Key)

    return { cityDetails, weatherDetails};
}

cityForm.addEventListener('submit', e=>{

    // prevent detault action //
    e.preventDefault();

    //get city value //
    let inputtedCity = cityForm.city.value.trim();
    cityForm.reset();

    //update the new city ui

    updateCity(inputtedCity)
    .then(data=>updateUI(data))
    .catch(err=>console.log(err));
})