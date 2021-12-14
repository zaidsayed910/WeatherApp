const cityName= document.getElementById('cityName');
const sbmitbtn = document.getElementById('sbmitbtn');
const city_name = document.getElementById('city_name');

const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();
    
    let cityval = cityName.value;
    if(cityval === ""){
        city_name.innerText = `please write your City Name`;
        datahide.classList.add('data_hide');
    }else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=a3afff87895e64c50eba811d364aa39c`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];

        city_name.innerText = `${arrData[0].name},${arrData[0].sys.country} `;
        temp_real_val.innerText = arrData[0].main.temp;
        // temp_status.innerText = arrData[0].weather[0].main;
        console.log(data);

        const tempMood =  arrData[0].weather[0].main;

            //condition to check Sunny or cloudy 
            if(tempMood == 'Clear'){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>"
            }else if(tempMood == 'Clouds'){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
            }else if(tempMood == 'Rainy'){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>"
            }else {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
            }
            
            datahide.classList.remove('data_hide');
        
    }catch{
        city_name.innerText = `please Enter your City Name Properly`;
        datahide.classList.add('data_hide');
    }
    }

}

sbmitbtn.addEventListener('click',getInfo);