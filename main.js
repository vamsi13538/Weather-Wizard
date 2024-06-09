// Initializing Variables
// const searchInputIcon = document.querySelector('#searchInputIcon');

// Default city name
let cityName = 'Ghansoli';

document.addEventListener('DOMContentLoaded', function () {
    function fetchWeatherData(city) {

        const CurrentTime = document.querySelector('#CurrentTime');

        // Function for current timestamp
        function getCurrentTime() {
            const now = new Date(); 0
            let hours = now.getHours();
            const minutes = now.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';

            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            const minutesStr = minutes < 10 ? '0' + minutes : minutes;

            const timeString = hours + ':' + minutesStr + ' ' + ampm;
            return timeString;
        }

        // Function to update time after every second
        function updateTime() {
            if (CurrentTime) {
                CurrentTime.textContent = `${getCurrentTime()}`;
            }
        }

        updateTime();

        // const cityName = document.getElementById('searchBarInput').value;
        const currentCityName = document.querySelector('#currentCityName');
        const regionName = document.querySelector('#regionName');
        const weatherConditonText = document.querySelector('#weatherConditonText');
        const currentTemp = document.querySelector('#currentTemp');
        const tempFeelsLike = document.querySelector('#tempFeelsLike');
        const windSpeed = document.querySelector('#windSpeed');
        const Humidity = document.querySelector('#humidity');
        const pressure = document.querySelector('#pressure');
        const CloudCover = document.querySelector('#cloudCover');
        const visibility = document.querySelector('#visibility');
        const WindDirection = document.querySelector('#windDirection');
        const sunRise = document.querySelector('#sunRise');
        const sunSet = document.querySelector('#sunSet');

        // For First Day
        const FirstDayMaxTemp = document.querySelector('#firstDayMaxTemp');
        const FirstDayMinTemp = document.querySelector('#firstDayMinTemp');
        // For Second Day
        const SecondDayMaxTemp = document.querySelector('#secondDayMaxTemp');
        const SecondDayMinTemp = document.querySelector('#secondDayMinTemp');

        // For Third Day
        const ThirdDayMaxTemp = document.querySelector('#thirdDayMaxTemp');
        const ThirdDayMinTemp = document.querySelector('#thirdDayMinTemp');

        // For Fourth Day
        const FourthDayMaxTemp = document.querySelector('#fourthDayMaxTemp');
        const FourthDayMinTemp = document.querySelector('#fourthDayMinTemp');

        // For Fifth Day
        const FifthDayMaxTemp = document.querySelector('#fifthDayMaxTemp');
        const FifthDayMinTemp = document.querySelector('#fifthDayMinTemp');

        // For Sixth Day
        const SixthDayMaxTemp = document.querySelector('#sixthDayMaxTemp');
        const SixthDayMinTemp = document.querySelector('#sixthDayMinTemp');

        // For Seventh Day
        const SeventhDayMaxTemp = document.querySelector('#seventhDayMaxTemp');
        const SeventhDayMinTemp = document.querySelector('#seventhDayMinTemp');

        // For Eighth Day
        const EighthDayMaxTemp = document.querySelector('#eightDayMaxTemp');
        const EighthDayMinTemp = document.querySelector('#eightDayMinTemp');

        const SecondDay = document.querySelector('#secondDay');
        const ThirdDay = document.querySelector('#thirdDay');
        const FourthDay = document.querySelector('#fourthDay');
        const FifthDay = document.querySelector('#fifthDay');
        const SixthDay = document.querySelector('#sixthDay');
        const SeventhDay = document.querySelector('#seventhDay');
        const EightDay = document.querySelector('#eightDay');


        if (cityName === '') {
            alert("Please enter a valid city name!")
        } else {
            cityName = city;
            const apiKey = 'ee90fbbb7b1340ccbd313101240706';
            const apiLink = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=14&aqi=no&alerts=no`

            fetch(apiLink)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);

                    const CurrentTime = document.querySelector('#CurrentTime');
                    let intervalId; // Variable to store the interval ID

                    // Function to get current time in a specific timezone
                    function getCurrentTimeInTimezone(timezone) {
                        const currentTime = luxon.DateTime.now().setZone(timezone);
                        return currentTime.toLocaleString(luxon.DateTime.TIME_SIMPLE);
                    }

                    // Function to update time
                    function updateTime(timeZoneId) {
                        if (CurrentTime) {
                            CurrentTime.textContent = getCurrentTimeInTimezone(timeZoneId);
                        }
                    }

                    // Function to start updating time
                    function startUpdatingTime(timeZoneId) {
                        // Clear previous interval if it exists
                        clearInterval(intervalId);

                        // Start updating time every second
                        intervalId = setInterval(() => {
                            updateTime(timeZoneId);
                        }, 1000);
                    }

                    // Function to fetch weather data and update time
                    function fetchWeatherAndUpdateTime(cityName) {
                        const apiKey = 'ee90fbbb7b1340ccbd313101240706';
                        const apiLink = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=14&aqi=no&alerts=no`;

                        fetch(apiLink)
                            .then((res) => res.json())
                            .then((data) => {
                                const timeZoneId = data.location.tz_id;
                                startUpdatingTime(timeZoneId);
                                // Start updating time with received timezone ID
                                // Update other elements with weather data
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    }

                    const searchInputIcon = document.querySelector('#searchInputIcon');
                    searchInputIcon.addEventListener('click', function () {
                        const cityName = document.getElementById('searchBarInput').value;
                        fetchWeatherAndUpdateTime(cityName);
                    });
                    // Weather condition Icons
                    const FirstDayTempIcon = data.forecast.forecastday[1].day.condition.icon;
                    const SecondDayTempIcon = data.forecast.forecastday[2].day.condition.icon;
                    const ThirdDayTempIcon = data.forecast.forecastday[3].day.condition.icon;
                    const FourthDayTempIcon = data.forecast.forecastday[4].day.condition.icon;
                    const FifthDayTempIcon = data.forecast.forecastday[5].day.condition.icon;
                    const SixthDayTempIcon = data.forecast.forecastday[6].day.condition.icon;
                    const SeventhDayTempIcon = data.forecast.forecastday[7].day.condition.icon;
                    const EightDayTempIcon = data.forecast.forecastday[8].day.condition.icon;

                    const tempInDeg = data.current.temp_c;
                    const tempInFar = data.current.temp_f;
                    const feelsLikeDeg = data.current.feelslike_c;
                    const feelsLikeFar = data.current.feelslike_f;
                    const humidity = data.current.humidity;
                    // const dewPointDeg = data.current.dewpoint_c;
                    const pressurePascal = data.current.pressure_mb;
                    const visibilityKm = data.current.vis_km;
                    const windKph = data.current.wind_kph;
                    // const precipitationInMM = data.current.precip_mm;
                    const cloudCover = data.current.cloud;
                    const windDirection = data.current.wind_dir;
                    const weatherCondition = data.current.condition.text;
                    const weatherConditionIcon = data.current.condition.icon;
                    const locationRegion = data.location.region;
                    const locationCountry = data.location.country;
                    const sunRiseatLocation = data.forecast.forecastday[0].astro.sunrise;
                    const sunSetatLocation = data.forecast.forecastday[0].astro.sunset;

                    // For First Day
                    const firstDayMaxTemp = data.forecast.forecastday[1].day.maxtemp_c;
                    const firstDayMinTemp = data.forecast.forecastday[1].day.mintemp_c;

                    // For Second Day
                    const secondDayMaxTemp = data.forecast.forecastday[2].day.maxtemp_c;
                    const secondDayMinTemp = data.forecast.forecastday[2].day.mintemp_c;

                    // For Third Day
                    const thirdDayMaxTemp = data.forecast.forecastday[3].day.maxtemp_c;
                    const thirdDayMinTemp = data.forecast.forecastday[3].day.mintemp_c;

                    // For Fourth Day
                    const fourthDayMaxTemp = data.forecast.forecastday[4].day.maxtemp_c;
                    const fourthDayMinTemp = data.forecast.forecastday[4].day.mintemp_c;

                    // For Fifth Day
                    const fifthDayMaxTemp = data.forecast.forecastday[5].day.maxtemp_c;
                    const fifthDayMinTemp = data.forecast.forecastday[5].day.mintemp_c;

                    // For Sixth Day
                    const sixthDayMaxTemp = data.forecast.forecastday[6].day.maxtemp_c;
                    const sixthDayMinTemp = data.forecast.forecastday[6].day.mintemp_c;

                    // For Seventh Day
                    const seventhDayMaxTemp = data.forecast.forecastday[7].day.maxtemp_c;
                    const seventhDayMinTemp = data.forecast.forecastday[7].day.mintemp_c;

                    // For Eighth Day
                    const eighthDayMaxTemp = data.forecast.forecastday[8].day.maxtemp_c;
                    const eighthDayMinTemp = data.forecast.forecastday[8].day.mintemp_c;

                    const secondDayDateEpoch = data.forecast.forecastday[2].date_epoch;
                    const thirdDayDateEpoch = data.forecast.forecastday[3].date_epoch;
                    const fourthDayDateEpoch = data.forecast.forecastday[4].date_epoch;
                    const fifthDayDateEpoch = data.forecast.forecastday[5].date_epoch;
                    const sixthDayDateEpoch = data.forecast.forecastday[6].date_epoch;
                    const seventhDayDateEpoch = data.forecast.forecastday[7].date_epoch;
                    const eighthDayDateEpoch = data.forecast.forecastday[8].date_epoch;

                    // Function to get day by epochtime of day
                    function getDayNameFromEpoch(epochTime) {
                        const date = new Date(epochTime * 1000);
                        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                        return daysOfWeek[date.getDay()];
                    }

                    // Get the day name for each day
                    const secondDay = getDayNameFromEpoch(secondDayDateEpoch);
                    const thirdDay = getDayNameFromEpoch(thirdDayDateEpoch);
                    const fourthDay = getDayNameFromEpoch(fourthDayDateEpoch);
                    const fifthDay = getDayNameFromEpoch(fifthDayDateEpoch);
                    const sixthDay = getDayNameFromEpoch(sixthDayDateEpoch);
                    const seventhDay = getDayNameFromEpoch(seventhDayDateEpoch);
                    const eighthDay = getDayNameFromEpoch(eighthDayDateEpoch);


                    // Adding City name in document
                    currentCityName.textContent = `${city}'s Today`;
                    currentCityName.style.textTransform = 'capitalize';

                    // Adding region & country name
                    regionName.textContent = `${locationRegion} | ${locationCountry}`;

                    // Adding weather condition text
                    weatherConditonText.textContent = `${weatherCondition}`;

                    // Adding body background depends on weather condition
                    const backgroundVideo = document.querySelector('#backgroundVideo');
                    const videoSource = document.querySelector('#videoSource');

                    function changeBackground(condition) {
                        if (condition.toLowerCase().includes("rain")) {
                            videoSource.src = 'https://cdn.pixabay.com/video/2023/06/26/168838-839912892_large.mp4';
                            backgroundVideo.load(); // Load the new video source
                        }
                        else if (condition.toLowerCase().includes("drizzle")) {
                            videoSource.src = 'https://cdn.pixabay.com/video/2024/02/20/201242-914943518_large.mp4';
                            backgroundVideo.load(); // Load the new video source
                        }
                        else if (condition.toLowerCase().includes("patchy rain nearby")) {
                            videoSource.src = 'https://cdn.pixabay.com/video/2017/07/20/10745-226632884_large.mp4';
                            backgroundVideo.load(); // Load the new video source
                        }
                        else if (condition.toLowerCase().includes("clear")) {
                            videoSource.src = 'https://cdn.pixabay.com/video/2022/10/06/133822-758327950_large.mp4';
                            backgroundVideo.load(); // Load the new video source
                        }
                        else if (condition.toLowerCase().includes("cloud")) {
                            videoSource.src = 'https://cdn.pixabay.com/video/2023/04/11/158384-816637349_large.mp4';
                            backgroundVideo.load(); // Load the new video source
                        }
                        else if (condition.toLowerCase().includes("sun")) {
                            videoSource.src = 'https://cdn.pixabay.com/video/2016/12/30/6952-197541960_large.mp4';
                            backgroundVideo.load(); // Load the new video source
                        }
                        else {
                            videoSource.src = 'https://cdn.pixabay.com/video/2021/10/05/90877-629483574_large.mp4';
                            backgroundVideo.load(); // Load the default video source
                        }
                    }

                    changeBackground(weatherCondition);

                    // Adding current temperature
                    currentTemp.textContent = `${tempInDeg}`;
                    tempFeelsLike.textContent = `${feelsLikeDeg}`;

                    // Adding windspeed
                    windSpeed.textContent = `${windKph} Km/h`;

                    // Adding humidity
                    Humidity.textContent = `${humidity}%`;

                    // Adding Pressure
                    pressure.textContent = `${pressurePascal} hPa`;

                    // Adding CloudCover
                    CloudCover.textContent = `${cloudCover}%`;

                    // Adding visibility
                    visibility.textContent = `${visibilityKm} Km`;

                    // Adding WindDirection
                    WindDirection.textContent = `${windDirection}`;

                    // Adding Sunrise
                    sunRise.textContent = `${sunRiseatLocation}`;

                    // Adding Sunrise
                    sunSet.textContent = `${sunSetatLocation}`;

                    // Adding second day name
                    SecondDay.textContent = `${secondDay}`;

                    // Adding third day name
                    ThirdDay.textContent = `${thirdDay}`;

                    // Adding fourth day name
                    FourthDay.textContent = `${fourthDay}`;

                    // Adding fifth day name
                    FifthDay.textContent = `${fifthDay}`;

                    // Adding six day name
                    SixthDay.textContent = `${sixthDay}`;

                    // Adding seventh day name
                    SeventhDay.textContent = `${seventhDay}`;

                    // Adding eight day name
                    EightDay.textContent = `${eighthDay}`;

                    // Adding first day max temp
                    FirstDayMaxTemp.textContent = `${firstDayMaxTemp}`;

                    // Adding first day min temp
                    FirstDayMinTemp.textContent = `${firstDayMinTemp}`;

                    // Adding second day max temp
                    SecondDayMaxTemp.textContent = `${secondDayMaxTemp}`;

                    // Adding second day min temp
                    SecondDayMinTemp.textContent = `${secondDayMinTemp}`;

                    // Adding third day max temp
                    ThirdDayMaxTemp.textContent = `${thirdDayMaxTemp}`;

                    // Adding third day min temp
                    ThirdDayMinTemp.textContent = `${thirdDayMinTemp}`;

                    // Adding fourth day max temp
                    FourthDayMaxTemp.textContent = `${fourthDayMaxTemp}`;

                    // Adding fourth day min temp
                    FourthDayMinTemp.textContent = `${fourthDayMinTemp}`;

                    // Adding fifth day max temp
                    FifthDayMaxTemp.textContent = `${fifthDayMaxTemp}`;

                    // Adding fifth day min temp
                    FifthDayMinTemp.textContent = `${fifthDayMinTemp}`;

                    // Adding sixth day max temp
                    SixthDayMaxTemp.textContent = `${sixthDayMaxTemp}`;

                    // Adding sixth day min temp
                    SixthDayMinTemp.textContent = `${sixthDayMinTemp}`;

                    // Adding seventh day max temp
                    SeventhDayMaxTemp.textContent = `${seventhDayMaxTemp}`;

                    // Adding seventh day min temp
                    SeventhDayMinTemp.textContent = `${seventhDayMinTemp}`;

                    // Adding eighth day max temp
                    EighthDayMaxTemp.textContent = `${eighthDayMaxTemp}`;

                    // Adding eighth day min temp
                    EighthDayMinTemp.textContent = `${eighthDayMinTemp}`;

                    const currentTempIcon = document.querySelector('#currentTempIcon');
                    currentTempIcon.src = `https:${weatherConditionIcon}`;

                    // Adding firstday weather icon
                    const firstDayTempIcon = document.querySelector('#firstDayTempIcon');
                    const secondDayTempIcon = document.querySelector('#secondDayTempIcon');
                    const thirdDayTempIcon = document.querySelector('#thirdDayTempIcon');
                    const fourthDayTempIcon = document.querySelector('#fourthDayTempIcon');
                    const fifthDayTempIcon = document.querySelector('#fifthDayTempIcon');
                    const sixthDayTempIcon = document.querySelector('#sixthDayTempIcon');
                    const seventhDayTempIcon = document.querySelector('#seventhDayTempIcon');
                    const eightDayTempIcon = document.querySelector('#eightDayTempIcon');


                    firstDayTempIcon.src = `https:${FirstDayTempIcon}`;
                    secondDayTempIcon.src = `https:${SecondDayTempIcon}`;
                    thirdDayTempIcon.src = `https:${ThirdDayTempIcon}`;
                    fourthDayTempIcon.src = `https:${FourthDayTempIcon}`;
                    fifthDayTempIcon.src = `https:${FifthDayTempIcon}`;
                    sixthDayTempIcon.src = `https:${SixthDayTempIcon}`;
                    seventhDayTempIcon.src = `https:${SeventhDayTempIcon}`;
                    eightDayTempIcon.src = `https:${EightDayTempIcon}`;

                })
                .catch((error) => {
                    alert('Incorrect city name, please try again!')
                    console.log(error);
                });
        }

    };

    fetchWeatherData(cityName);

    const searchInputIcon = document.querySelector('#searchInputIcon');
    searchInputIcon.addEventListener('click', function () {
        const searchInput = document.querySelector('#searchBarInput').value;
        fetchWeatherData(searchInput);
    });


    const weatherDailyWiseCardAll = document.querySelectorAll('.weatherDailyWiseCard');
    const tabelForecastHourlyWeatherData = document.querySelector('.tabelForecastHourlyWeatherData');
    const row2 = document.querySelector('.row2');
    const row3s = document.querySelectorAll('.row3');

    weatherDailyWiseCardAll.forEach((eachCard) => {
        eachCard.addEventListener('click', function () {
            if (tabelForecastHourlyWeatherData.style.display === 'block') {
                tabelForecastHourlyWeatherData.style.display = 'none';
                row2.style.display = 'flex';
                row3s.forEach(row3 => row3.style.display = 'flex');
                currentCityName.textContent = `${cityName}'s Today`;
            } else {
                tabelForecastHourlyWeatherData.style.display = 'block';
                row2.style.display = 'none';
                row3s.forEach(row3 => row3.style.display = 'none');
            }
        });
    });

    // Initializing variables for forecast weather data


    const tempat3am = document.querySelector('.tempat3am');
    const tempat6am = document.querySelector('.tempat6am');
    const tempat9am = document.querySelector('.tempat9am');
    const tempat12pm = document.querySelector('.tempat12pm');
    const tempat15pm = document.querySelector('.tempat15pm');
    const tempat18pm = document.querySelector('.tempat18pm');
    const tempat21pm = document.querySelector('.tempat21pm');

    const feelsat3am = document.querySelector('.feelsat3am');
    const feelsat6am = document.querySelector('.feelsat6am');
    const feelsat9am = document.querySelector('.feelsat9am');
    const feelsat12pm = document.querySelector('.feelsat12pm');
    const feelsat15pm = document.querySelector('.feelsat15pm');
    const feelsat18pm = document.querySelector('.feelsat18pm');
    const feelsat21pm = document.querySelector('.feelsat21pm');

    const windat3am = document.querySelector('.windat3am');
    const windat6am = document.querySelector('.windat6am');
    const windat9am = document.querySelector('.windat9am');
    const windat12pm = document.querySelector('.windat12pm');
    const windat15pm = document.querySelector('.windat15pm');
    const windat18pm = document.querySelector('.windat18pm');
    const windat21pm = document.querySelector('.windat21pm');

    const dirat3am = document.querySelector('.dirat3am');
    const dirat6am = document.querySelector('.dirat6am');
    const dirat9am = document.querySelector('.dirat9am');
    const dirat12pm = document.querySelector('.dirat12pm');
    const dirat15pm = document.querySelector('.dirat15pm');
    const dirat18pm = document.querySelector('.dirat18pm');
    const dirat21pm = document.querySelector('.dirat21pm');

    const cloudat3am = document.querySelector('.cloudat3am');
    const cloudat6am = document.querySelector('.cloudat6am');
    const cloudat9am = document.querySelector('.cloudat9am');
    const cloudat12pm = document.querySelector('.cloudat12pm');
    const cloudat15pm = document.querySelector('.cloudat15pm');
    const cloudat18pm = document.querySelector('.cloudat18pm');
    const cloudat21pm = document.querySelector('.cloudat21pm');

    const humidityat3am = document.querySelector('.humidityat3am');
    const humidityat6am = document.querySelector('.humidityat6am');
    const humidityat9am = document.querySelector('.humidityat9am');
    const humidityat12pm = document.querySelector('.humidityat12pm');
    const humidityat15pm = document.querySelector('.humidityat15pm');
    const humidityat18pm = document.querySelector('.humidityat18pm');
    const humidityat21pm = document.querySelector('.humidityat21pm');

    const pressureat3am = document.querySelector('.pressureat3am');
    const pressureat6am = document.querySelector('.pressureat6am');
    const pressureat9am = document.querySelector('.pressureat9am');
    const pressureat12pm = document.querySelector('.pressureat12pm');
    const pressureat15pm = document.querySelector('.pressureat15pm');
    const pressureat18pm = document.querySelector('.pressureat18pm');
    const pressureat21pm = document.querySelector('.pressureat21pm');
    const WeatherrConditonText = document.querySelector('#weatherConditonText');


    // Forecast weather details for first day
    const firstDay = document.querySelector('#firstDay');
    firstDay.addEventListener('click', function () {

        currentCityName.textContent = `${cityName}'s Tomorrow`;

        const apiKey = 'ee90fbbb7b1340ccbd313101240706';
        const apiLink = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=14&aqi=no&alerts=no`;

        fetch(apiLink)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                // First day weather condition text and icon
                const firstDayWeatherConditionText = data.forecast.forecastday[1].day.condition.text;

                const firstDayWeatherConditionIcon = data.forecast.forecastday[1].day.condition.icon;

                WeatherrConditonText.textContent = `${firstDayWeatherConditionText}`;

                // Adding body background depends on weather condition
                const backgroundVideo = document.querySelector('#backgroundVideo');
                const videoSource = document.querySelector('#videoSource');


                function changeBackground(condition) {
                    if (condition.toLowerCase().includes("patchy")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2017/07/20/10745-226632884_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("drizzle")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2024/02/20/201242-914943518_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("rain")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2023/06/26/168838-839912892_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("clear")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2022/10/06/133822-758327950_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("cloud")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2023/04/11/158384-816637349_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("sun")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2016/12/30/6952-197541960_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else {
                        videoSource.src = 'https://cdn.pixabay.com/video/2021/10/05/90877-629483574_large.mp4';
                        backgroundVideo.load(); // Load the default video source
                    }
                }

                changeBackground(firstDayWeatherConditionText);


                const firstDay3amTemp = data.forecast.forecastday[1].hour[3].temp_c;
                const firstDay6amTemp = data.forecast.forecastday[1].hour[6].temp_c;
                const firstDay9amTemp = data.forecast.forecastday[1].hour[9].temp_c;
                const firstDay12pmTemp = data.forecast.forecastday[1].hour[12].temp_c;
                const firstDay15pmTemp = data.forecast.forecastday[1].hour[15].temp_c;
                const firstDay18pmTemp = data.forecast.forecastday[1].hour[18].temp_c;
                const firstDay21pmTemp = data.forecast.forecastday[1].hour[21].temp_c;

                const firstDay3amFeels = data.forecast.forecastday[1].hour[3].feelslike_c;
                const firstDay6amFeels = data.forecast.forecastday[1].hour[6].feelslike_c;
                const firstDay9amFeels = data.forecast.forecastday[1].hour[9].feelslike_c;
                const firstDay12pmFeels = data.forecast.forecastday[1].hour[12].feelslike_c;
                const firstDay15pmFeels = data.forecast.forecastday[1].hour[15].feelslike_c;
                const firstDay18pmFeels = data.forecast.forecastday[1].hour[18].feelslike_c;
                const firstDay21pmFeels = data.forecast.forecastday[1].hour[21].feelslike_c;

                const firstDay3amDir = data.forecast.forecastday[1].hour[3].wind_dir;
                const firstDay6amDir = data.forecast.forecastday[1].hour[6].wind_dir;
                const firstDay9amDir = data.forecast.forecastday[1].hour[9].wind_dir;
                const firstDay12pmDir = data.forecast.forecastday[1].hour[12].wind_dir;
                const firstDay15pmDir = data.forecast.forecastday[1].hour[15].wind_dir;
                const firstDay18pmDir = data.forecast.forecastday[1].hour[18].wind_dir;
                const firstDay21pmDir = data.forecast.forecastday[1].hour[21].wind_dir;

                const firstDay3amWind = data.forecast.forecastday[1].hour[3].wind_kph;
                const firstDay6amWind = data.forecast.forecastday[1].hour[6].wind_kph;
                const firstDay9amWind = data.forecast.forecastday[1].hour[9].wind_kph;
                const firstDay12pmWind = data.forecast.forecastday[1].hour[12].wind_kph;
                const firstDay15pmWind = data.forecast.forecastday[1].hour[15].wind_kph;
                const firstDay18pmWind = data.forecast.forecastday[1].hour[18].wind_kph;
                const firstDay21pmWind = data.forecast.forecastday[1].hour[21].wind_kph;

                const firstDay3amCloud = data.forecast.forecastday[1].hour[3].cloud;
                const firstDay6amCloud = data.forecast.forecastday[1].hour[6].cloud;
                const firstDay9amCloud = data.forecast.forecastday[1].hour[9].cloud;
                const firstDay12pmCloud = data.forecast.forecastday[1].hour[12].cloud;
                const firstDay15pmCloud = data.forecast.forecastday[1].hour[15].cloud;
                const firstDay18pmCloud = data.forecast.forecastday[1].hour[18].cloud;
                const firstDay21pmCloud = data.forecast.forecastday[1].hour[21].cloud;

                const firstDay3amHumidity = data.forecast.forecastday[1].hour[3].humidity;
                const firstDay6amHumidity = data.forecast.forecastday[1].hour[6].humidity;
                const firstDay9amHumidity = data.forecast.forecastday[1].hour[9].humidity;
                const firstDay12pmHumidity = data.forecast.forecastday[1].hour[12].humidity;
                const firstDay15pmHumidity = data.forecast.forecastday[1].hour[15].humidity;
                const firstDay18pmHumidity = data.forecast.forecastday[1].hour[18].humidity;
                const firstDay21pmHumidity = data.forecast.forecastday[1].hour[21].humidity;

                const firstDay3amPressure = data.forecast.forecastday[1].hour[3].pressure_mb;
                const firstDay6amPressure = data.forecast.forecastday[1].hour[6].pressure_mb;
                const firstDay9amPressure = data.forecast.forecastday[1].hour[9].pressure_mb;
                const firstDay12pmPressure = data.forecast.forecastday[1].hour[12].pressure_mb;
                const firstDay15pmPressure = data.forecast.forecastday[1].hour[15].pressure_mb;
                const firstDay18pmPressure = data.forecast.forecastday[1].hour[18].pressure_mb;
                const firstDay21pmPressure = data.forecast.forecastday[1].hour[21].pressure_mb;

                // Adding first day weather forecast
                const forecastDate = document.querySelector('.forecastDate');
                const forecastDateFirstDay = `'${data.forecast.forecastday[1].date}'`;

                // Convert the date string to a Date object
                const dateObject = new Date(forecastDateFirstDay);

                // Extract day, month, and year from the Date object
                const day = dateObject.getDate();
                const monthIndex = dateObject.getMonth();
                const year = dateObject.getFullYear();

                // Define an array of month names
                const monthNames = [
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                ];

                // Format the date
                const formattedDate = `${day}${getOrdinalSuffix(day)} ${monthNames[monthIndex]} ${year}`;

                // Function to get ordinal suffix for the day
                function getOrdinalSuffix(day) {
                    if (day > 3 && day < 21) return 'th';
                    switch (day % 10) {
                        case 1: return 'st';
                        case 2: return 'nd';
                        case 3: return 'rd';
                        default: return 'th';
                    }
                }

                // Set the formatted date as text content
                forecastDate.textContent = formattedDate;


                tempat3am.innerHTML = `${firstDay3amTemp} <sup>&deg;<small>C</small>`;
                tempat6am.innerHTML = `${firstDay6amTemp} <sup>&deg;<small>C</small>`;
                tempat9am.innerHTML = `${firstDay9amTemp} <sup>&deg;<small>C</small>`;
                tempat12pm.innerHTML = `${firstDay12pmTemp} <sup>&deg;<small>C</small>`;
                tempat15pm.innerHTML = `${firstDay15pmTemp} <sup>&deg;<small>C</small>`;
                tempat18pm.innerHTML = `${firstDay18pmTemp} <sup>&deg;<small>C</small>`;
                tempat21pm.innerHTML = `${firstDay21pmTemp} <sup>&deg;<small>C</small>`;

                feelsat3am.innerHTML = `${firstDay3amFeels} <sup>&deg;<small>C</small>`;
                feelsat6am.innerHTML = `${firstDay6amFeels} <sup>&deg;<small>C</small>`;
                feelsat9am.innerHTML = `${firstDay9amFeels} <sup>&deg;<small>C</small>`;
                feelsat12pm.innerHTML = `${firstDay12pmFeels} <sup>&deg;<small>C</small>`;
                feelsat15pm.innerHTML = `${firstDay15pmFeels} <sup>&deg;<small>C</small>`;
                feelsat18pm.innerHTML = `${firstDay18pmFeels} <sup>&deg;<small>C</small>`;
                feelsat21pm.innerHTML = `${firstDay21pmFeels} <sup>&deg;<small>C</small>`;

                windat3am.innerHTML = `${firstDay3amWind} Km/h`;
                windat6am.innerHTML = `${firstDay6amWind} Km/h`;
                windat9am.innerHTML = `${firstDay9amWind} Km/h`;
                windat12pm.innerHTML = `${firstDay12pmWind} Km/h`;
                windat15pm.innerHTML = `${firstDay15pmWind} Km/h`;
                windat18pm.innerHTML = `${firstDay18pmWind} Km/h`;
                windat21pm.innerHTML = `${firstDay21pmWind} Km/h`;

                dirat3am.innerHTML = `${firstDay3amDir}`;
                dirat6am.innerHTML = `${firstDay6amDir}`;
                dirat9am.innerHTML = `${firstDay9amDir}`;
                dirat12pm.innerHTML = `${firstDay12pmDir}`;
                dirat15pm.innerHTML = `${firstDay15pmDir}`;
                dirat18pm.innerHTML = `${firstDay18pmDir}`;
                dirat21pm.innerHTML = `${firstDay21pmDir}`;

                cloudat3am.innerHTML = `${firstDay3amCloud}%`;
                cloudat6am.innerHTML = `${firstDay6amCloud}%`;
                cloudat9am.innerHTML = `${firstDay9amCloud}%`;
                cloudat12pm.innerHTML = `${firstDay12pmCloud}%`;
                cloudat15pm.innerHTML = `${firstDay15pmCloud}%`;
                cloudat18pm.innerHTML = `${firstDay18pmCloud}%`;
                cloudat21pm.innerHTML = `${firstDay21pmCloud}%`;


                humidityat3am.innerHTML = `${firstDay3amHumidity}%`;
                humidityat6am.innerHTML = `${firstDay6amHumidity}%`;
                humidityat9am.innerHTML = `${firstDay9amHumidity}%`;
                humidityat12pm.innerHTML = `${firstDay12pmHumidity}%`;
                humidityat15pm.innerHTML = `${firstDay15pmHumidity}%`;
                humidityat18pm.innerHTML = `${firstDay18pmHumidity}%`;
                humidityat21pm.innerHTML = `${firstDay21pmHumidity}%`;

                pressureat3am.innerHTML = `${firstDay3amPressure} hPa`;
                pressureat6am.innerHTML = `${firstDay6amPressure} hPa`;
                pressureat9am.innerHTML = `${firstDay9amPressure} hPa`;
                pressureat12pm.innerHTML = `${firstDay12pmPressure} hPa`;
                pressureat15pm.innerHTML = `${firstDay15pmPressure} hPa`;
                pressureat18pm.innerHTML = `${firstDay18pmPressure} hPa`;
                pressureat21pm.innerHTML = `${firstDay21pmPressure} hPa`;

            }).catch((error) => {
                console.log(error);
            });
    });

    // Forecast weather details for second day
    const secondDay = document.querySelector('#secondDay');
    secondDay.addEventListener('click', function () {

        const apiKey = 'ee90fbbb7b1340ccbd313101240706';
        const apiLink = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=14&aqi=no&alerts=no`;

        fetch(apiLink)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                // Second day weather condition text and icon
                const secondDayWeatherConditionText = data.forecast.forecastday[2].day.condition.text;

                const secondDayWeatherConditionIcon = data.forecast.forecastday[2].day.condition.icon;

                WeatherrConditonText.textContent = `${secondDayWeatherConditionText}`;

                // Adding body background depends on weather condition
                const backgroundVideo = document.querySelector('#backgroundVideo');
                const videoSource = document.querySelector('#videoSource');


                function changeBackground(condition) {
                    if (condition.toLowerCase().includes("patchy")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2017/07/20/10745-226632884_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("drizzle")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2024/02/20/201242-914943518_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("rain")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2023/06/26/168838-839912892_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("clear")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2022/10/06/133822-758327950_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("cloud")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2023/04/11/158384-816637349_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("sun")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2016/12/30/6952-197541960_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else {
                        videoSource.src = 'https://cdn.pixabay.com/video/2021/10/05/90877-629483574_large.mp4';
                        backgroundVideo.load(); // Load the default video source
                    }
                }

                changeBackground(secondDayWeatherConditionText);


                // Function to get day by epochtime of day
                function getDayNameFromEpoch(epochTime) {
                    const date = new Date(epochTime * 1000);
                    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    return daysOfWeek[date.getDay()];
                }

                // Get the day name for each day
                const secondDayDateEpoch = data.forecast.forecastday[2].date_epoch;
                const secondDay = getDayNameFromEpoch(secondDayDateEpoch);

                currentCityName.textContent = `${cityName}'s ${secondDay}`;


                // Adding date to second day
                const forecastDate = document.querySelector('.forecastDate');
                const forecastDateSecondtDay = `'${data.forecast.forecastday[2].date}'`;

                // Convert the date string to a Date object
                const dateObject = new Date(forecastDateSecondtDay);

                // Extract day, month, and year from the Date object
                const day = dateObject.getDate();
                const monthIndex = dateObject.getMonth();
                const year = dateObject.getFullYear();

                // Define an array of month names
                const monthNames = [
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                ];

                // Format the date
                const formattedDate = `${day}${getOrdinalSuffix(day)} ${monthNames[monthIndex]} ${year}`;

                // Function to get ordinal suffix for the day
                function getOrdinalSuffix(day) {
                    if (day > 3 && day < 21) return 'th';
                    switch (day % 10) {
                        case 1: return 'st';
                        case 2: return 'nd';
                        case 3: return 'rd';
                        default: return 'th';
                    }
                }

                // Set the formatted date as text content
                forecastDate.textContent = formattedDate;

                const secondDay3amTemp = data.forecast.forecastday[2].hour[3].temp_c;
                const secondDay6amTemp = data.forecast.forecastday[2].hour[6].temp_c;
                const secondDay9amTemp = data.forecast.forecastday[2].hour[9].temp_c;
                const secondDay12pmTemp = data.forecast.forecastday[2].hour[12].temp_c;
                const secondDay15pmTemp = data.forecast.forecastday[2].hour[15].temp_c;
                const secondDay18pmTemp = data.forecast.forecastday[2].hour[18].temp_c;
                const secondDay21pmTemp = data.forecast.forecastday[2].hour[21].temp_c;

                const secondDay3amFeels = data.forecast.forecastday[2].hour[3].feelslike_c;
                const secondDay6amFeels = data.forecast.forecastday[2].hour[6].feelslike_c;
                const secondDay9amFeels = data.forecast.forecastday[2].hour[9].feelslike_c;
                const secondDay12pmFeels = data.forecast.forecastday[2].hour[12].feelslike_c;
                const secondDay15pmFeels = data.forecast.forecastday[2].hour[15].feelslike_c;
                const secondDay18pmFeels = data.forecast.forecastday[2].hour[18].feelslike_c;
                const secondDay21pmFeels = data.forecast.forecastday[2].hour[21].feelslike_c;

                const secondDay3amDir = data.forecast.forecastday[2].hour[3].wind_dir;
                const secondDay6amDir = data.forecast.forecastday[2].hour[6].wind_dir;
                const secondDay9amDir = data.forecast.forecastday[2].hour[9].wind_dir;
                const secondDay12pmDir = data.forecast.forecastday[2].hour[12].wind_dir;
                const secondDay15pmDir = data.forecast.forecastday[2].hour[15].wind_dir;
                const secondDay18pmDir = data.forecast.forecastday[2].hour[18].wind_dir;
                const secondDay21pmDir = data.forecast.forecastday[2].hour[21].wind_dir;

                const secondDay3amWind = data.forecast.forecastday[2].hour[3].wind_kph;
                const secondDay6amWind = data.forecast.forecastday[2].hour[6].wind_kph;
                const secondDay9amWind = data.forecast.forecastday[2].hour[9].wind_kph;
                const secondDay12pmWind = data.forecast.forecastday[2].hour[12].wind_kph;
                const secondDay15pmWind = data.forecast.forecastday[2].hour[15].wind_kph;
                const secondDay18pmWind = data.forecast.forecastday[2].hour[18].wind_kph;
                const secondDay21pmWind = data.forecast.forecastday[2].hour[21].wind_kph;

                const secondDay3amCloud = data.forecast.forecastday[2].hour[3].cloud;
                const secondDay6amCloud = data.forecast.forecastday[2].hour[6].cloud;
                const secondDay9amCloud = data.forecast.forecastday[2].hour[9].cloud;
                const secondDay12pmCloud = data.forecast.forecastday[2].hour[12].cloud;
                const secondDay15pmCloud = data.forecast.forecastday[2].hour[15].cloud;
                const secondDay18pmCloud = data.forecast.forecastday[2].hour[18].cloud;
                const secondDay21pmCloud = data.forecast.forecastday[2].hour[21].cloud;

                const secondDay3amHumidity = data.forecast.forecastday[2].hour[3].humidity;
                const secondDay6amHumidity = data.forecast.forecastday[2].hour[6].humidity;
                const secondDay9amHumidity = data.forecast.forecastday[2].hour[9].humidity;
                const secondDay12pmHumidity = data.forecast.forecastday[2].hour[12].humidity;
                const secondDay15pmHumidity = data.forecast.forecastday[2].hour[15].humidity;
                const secondDay18pmHumidity = data.forecast.forecastday[2].hour[18].humidity;
                const secondDay21pmHumidity = data.forecast.forecastday[2].hour[21].humidity;

                const secondDay3amPressure = data.forecast.forecastday[2].hour[3].pressure_mb;
                const secondDay6amPressure = data.forecast.forecastday[2].hour[6].pressure_mb;
                const secondDay9amPressure = data.forecast.forecastday[2].hour[9].pressure_mb;
                const secondDay12pmPressure = data.forecast.forecastday[2].hour[12].pressure_mb;
                const secondDay15pmPressure = data.forecast.forecastday[2].hour[15].pressure_mb;
                const secondDay18pmPressure = data.forecast.forecastday[2].hour[18].pressure_mb;
                const secondDay21pmPressure = data.forecast.forecastday[2].hour[21].pressure_mb;

                // Adding second day content
                tempat3am.innerHTML = `${secondDay3amTemp} <sup>&deg;<small>C</small>`;
                tempat6am.innerHTML = `${secondDay6amTemp} <sup>&deg;<small>C</small>`;
                tempat9am.innerHTML = `${secondDay9amTemp} <sup>&deg;<small>C</small>`;
                tempat12pm.innerHTML = `${secondDay12pmTemp} <sup>&deg;<small>C</small>`;
                tempat15pm.innerHTML = `${secondDay15pmTemp} <sup>&deg;<small>C</small>`;
                tempat18pm.innerHTML = `${secondDay18pmTemp} <sup>&deg;<small>C</small>`;
                tempat21pm.innerHTML = `${secondDay21pmTemp} <sup>&deg;<small>C</small>`;

                feelsat3am.innerHTML = `${secondDay3amFeels} <sup>&deg;<small>C</small>`;
                feelsat6am.innerHTML = `${secondDay6amFeels} <sup>&deg;<small>C</small>`;
                feelsat9am.innerHTML = `${secondDay9amFeels} <sup>&deg;<small>C</small>`;
                feelsat12pm.innerHTML = `${secondDay12pmFeels} <sup>&deg;<small>C</small>`;
                feelsat15pm.innerHTML = `${secondDay15pmFeels} <sup>&deg;<small>C</small>`;
                feelsat18pm.innerHTML = `${secondDay18pmFeels} <sup>&deg;<small>C</small>`;
                feelsat21pm.innerHTML = `${secondDay21pmFeels} <sup>&deg;<small>C</small>`;

                windat3am.innerHTML = `${secondDay3amWind} Km/h`;
                windat6am.innerHTML = `${secondDay6amWind} Km/h`;
                windat9am.innerHTML = `${secondDay9amWind} Km/h`;
                windat12pm.innerHTML = `${secondDay12pmWind} Km/h`;
                windat15pm.innerHTML = `${secondDay15pmWind} Km/h`;
                windat18pm.innerHTML = `${secondDay18pmWind} Km/h`;
                windat21pm.innerHTML = `${secondDay21pmWind} Km/h`;

                dirat3am.innerHTML = `${secondDay3amDir}`;
                dirat6am.innerHTML = `${secondDay6amDir}`;
                dirat9am.innerHTML = `${secondDay9amDir}`;
                dirat12pm.innerHTML = `${secondDay12pmDir}`;
                dirat15pm.innerHTML = `${secondDay15pmDir}`;
                dirat18pm.innerHTML = `${secondDay18pmDir}`;
                dirat21pm.innerHTML = `${secondDay21pmDir}`;

                cloudat3am.innerHTML = `${secondDay3amCloud}%`;
                cloudat6am.innerHTML = `${secondDay6amCloud}%`;
                cloudat9am.innerHTML = `${secondDay9amCloud}%`;
                cloudat12pm.innerHTML = `${secondDay12pmCloud}%`;
                cloudat15pm.innerHTML = `${secondDay15pmCloud}%`;
                cloudat18pm.innerHTML = `${secondDay18pmCloud}%`;
                cloudat21pm.innerHTML = `${secondDay21pmCloud}%`;


                humidityat3am.innerHTML = `${secondDay3amHumidity}%`;
                humidityat6am.innerHTML = `${secondDay6amHumidity}%`;
                humidityat9am.innerHTML = `${secondDay9amHumidity}%`;
                humidityat12pm.innerHTML = `${secondDay12pmHumidity}%`;
                humidityat15pm.innerHTML = `${secondDay15pmHumidity}%`;
                humidityat18pm.innerHTML = `${secondDay18pmHumidity}%`;
                humidityat21pm.innerHTML = `${secondDay21pmHumidity}%`;

                pressureat3am.innerHTML = `${secondDay3amPressure} hPa`;
                pressureat6am.innerHTML = `${secondDay6amPressure} hPa`;
                pressureat9am.innerHTML = `${secondDay9amPressure} hPa`;
                pressureat12pm.innerHTML = `${secondDay12pmPressure} hPa`;
                pressureat15pm.innerHTML = `${secondDay15pmPressure} hPa`;
                pressureat18pm.innerHTML = `${secondDay18pmPressure} hPa`;
                pressureat21pm.innerHTML = `${secondDay21pmPressure} hPa`;

            }).catch((error) => {
                console.log(error);
            });

    });

    // Forecast weather details for third day
    const thirdDay = document.querySelector('#thirdDay');
    thirdDay.addEventListener('click', function () {
        const apiKey = 'ee90fbbb7b1340ccbd313101240706';
        const apiLink = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=14&aqi=no&alerts=no`;

        fetch(apiLink)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                // Third day weather condition text and icon
                const thirdDayWeatherConditionText = data.forecast.forecastday[3].day.condition.text;

                const thirdDayWeatherConditionIcon = data.forecast.forecastday[3].day.condition.icon;

                WeatherrConditonText.textContent = `${thirdDayWeatherConditionText}`;

                // Adding body background depends on weather condition
                const backgroundVideo = document.querySelector('#backgroundVideo');
                const videoSource = document.querySelector('#videoSource');

                function changeBackground(condition) {
                    if (condition.toLowerCase().includes("patchy")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2017/07/20/10745-226632884_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("drizzle")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2024/02/20/201242-914943518_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("rain")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2023/06/26/168838-839912892_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("clear")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2022/10/06/133822-758327950_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("cloud")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2023/04/11/158384-816637349_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("sun")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2016/12/30/6952-197541960_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else {
                        videoSource.src = 'https://cdn.pixabay.com/video/2021/10/05/90877-629483574_large.mp4';
                        backgroundVideo.load(); // Load the default video source
                    }
                }

                changeBackground(thirdDayWeatherConditionText);

                // Function to get day by epochtime of day
                function getDayNameFromEpoch(epochTime) {
                    const date = new Date(epochTime * 1000);
                    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    return daysOfWeek[date.getDay()];
                }

                // Get the day name for each day
                const thirdDayDateEpoch = data.forecast.forecastday[3].date_epoch;
                const ThirdDay = getDayNameFromEpoch(thirdDayDateEpoch);

                currentCityName.textContent = `${cityName}'s ${ThirdDay}`;


                // Adding date to third day
                const forecastDate = document.querySelector('.forecastDate');
                const forecastDateThirdDay = `'${data.forecast.forecastday[3].date}'`;

                // Convert the date string to a Date object
                const dateObject = new Date(forecastDateThirdDay);

                // Extract day, month, and year from the Date object
                const day = dateObject.getDate();
                const monthIndex = dateObject.getMonth();
                const year = dateObject.getFullYear();

                // Define an array of month names
                const monthNames = [
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                ];

                // Format the date
                const formattedDate = `${day}${getOrdinalSuffix(day)} ${monthNames[monthIndex]} ${year}`;

                // Function to get ordinal suffix for the day
                function getOrdinalSuffix(day) {
                    if (day > 3 && day < 21) return 'th';
                    switch (day % 10) {
                        case 1: return 'st';
                        case 2: return 'nd';
                        case 3: return 'rd';
                        default: return 'th';
                    }
                }

                // Set the formatted date as text content
                forecastDate.textContent = formattedDate;

                const thirdDay3amTemp = data.forecast.forecastday[3].hour[3].temp_c;
                const thirdDay6amTemp = data.forecast.forecastday[3].hour[6].temp_c;
                const thirdDay9amTemp = data.forecast.forecastday[3].hour[9].temp_c;
                const thirdDay12pmTemp = data.forecast.forecastday[3].hour[12].temp_c;
                const thirdDay15pmTemp = data.forecast.forecastday[3].hour[15].temp_c;
                const thirdDay18pmTemp = data.forecast.forecastday[3].hour[18].temp_c;
                const thirdDay21pmTemp = data.forecast.forecastday[3].hour[21].temp_c;

                const thirdDay3amFeels = data.forecast.forecastday[3].hour[3].feelslike_c;
                const thirdDay6amFeels = data.forecast.forecastday[3].hour[6].feelslike_c;
                const thirdDay9amFeels = data.forecast.forecastday[3].hour[9].feelslike_c;
                const thirdDay12pmFeels = data.forecast.forecastday[3].hour[12].feelslike_c;
                const thirdDay15pmFeels = data.forecast.forecastday[3].hour[15].feelslike_c;
                const thirdDay18pmFeels = data.forecast.forecastday[3].hour[18].feelslike_c;
                const thirdDay21pmFeels = data.forecast.forecastday[3].hour[21].feelslike_c;

                const thirdDay3amDir = data.forecast.forecastday[3].hour[3].wind_dir;
                const thirdDay6amDir = data.forecast.forecastday[3].hour[6].wind_dir;
                const thirdDay9amDir = data.forecast.forecastday[3].hour[9].wind_dir;
                const thirdDay12pmDir = data.forecast.forecastday[3].hour[12].wind_dir;
                const thirdDay15pmDir = data.forecast.forecastday[3].hour[15].wind_dir;
                const thirdDay18pmDir = data.forecast.forecastday[3].hour[18].wind_dir;
                const thirdDay21pmDir = data.forecast.forecastday[3].hour[21].wind_dir;

                const thirdDay3amWind = data.forecast.forecastday[3].hour[3].wind_kph;
                const thirdDay6amWind = data.forecast.forecastday[3].hour[6].wind_kph;
                const thirdDay9amWind = data.forecast.forecastday[3].hour[9].wind_kph;
                const thirdDay12pmWind = data.forecast.forecastday[3].hour[12].wind_kph;
                const thirdDay15pmWind = data.forecast.forecastday[3].hour[15].wind_kph;
                const thirdDay18pmWind = data.forecast.forecastday[3].hour[18].wind_kph;
                const thirdDay21pmWind = data.forecast.forecastday[3].hour[21].wind_kph;

                const thirdDay3amCloud = data.forecast.forecastday[3].hour[3].cloud;
                const thirdDay6amCloud = data.forecast.forecastday[3].hour[6].cloud;
                const thirdDay9amCloud = data.forecast.forecastday[3].hour[9].cloud;
                const thirdDay12pmCloud = data.forecast.forecastday[3].hour[12].cloud;
                const thirdDay15pmCloud = data.forecast.forecastday[3].hour[15].cloud;
                const thirdDay18pmCloud = data.forecast.forecastday[3].hour[18].cloud;
                const thirdDay21pmCloud = data.forecast.forecastday[3].hour[21].cloud;

                const thirdDay3amHumidity = data.forecast.forecastday[3].hour[3].humidity;
                const thirdDay6amHumidity = data.forecast.forecastday[3].hour[6].humidity;
                const thirdDay9amHumidity = data.forecast.forecastday[3].hour[9].humidity;
                const thirdDay12pmHumidity = data.forecast.forecastday[3].hour[12].humidity;
                const thirdDay15pmHumidity = data.forecast.forecastday[3].hour[15].humidity;
                const thirdDay18pmHumidity = data.forecast.forecastday[3].hour[18].humidity;
                const thirdDay21pmHumidity = data.forecast.forecastday[3].hour[21].humidity;

                const thirdDay3amPressure = data.forecast.forecastday[3].hour[3].pressure_mb;
                const thirdDay6amPressure = data.forecast.forecastday[3].hour[6].pressure_mb;
                const thirdDay9amPressure = data.forecast.forecastday[3].hour[9].pressure_mb;
                const thirdDay12pmPressure = data.forecast.forecastday[3].hour[12].pressure_mb;
                const thirdDay15pmPressure = data.forecast.forecastday[3].hour[15].pressure_mb;
                const thirdDay18pmPressure = data.forecast.forecastday[3].hour[18].pressure_mb;
                const thirdDay21pmPressure = data.forecast.forecastday[3].hour[21].pressure_mb;


                // Adding third day content
                tempat3am.innerHTML = `${thirdDay3amTemp} <sup>&deg;<small>C</small>`;
                tempat6am.innerHTML = `${thirdDay6amTemp} <sup>&deg;<small>C</small>`;
                tempat9am.innerHTML = `${thirdDay9amTemp} <sup>&deg;<small>C</small>`;
                tempat12pm.innerHTML = `${thirdDay12pmTemp} <sup>&deg;<small>C</small>`;
                tempat15pm.innerHTML = `${thirdDay15pmTemp} <sup>&deg;<small>C</small>`;
                tempat18pm.innerHTML = `${thirdDay18pmTemp} <sup>&deg;<small>C</small>`;
                tempat21pm.innerHTML = `${thirdDay21pmTemp} <sup>&deg;<small>C</small>`;

                feelsat3am.innerHTML = `${thirdDay3amFeels} <sup>&deg;<small>C</small>`;
                feelsat6am.innerHTML = `${thirdDay6amFeels} <sup>&deg;<small>C</small>`;
                feelsat9am.innerHTML = `${thirdDay9amFeels} <sup>&deg;<small>C</small>`;
                feelsat12pm.innerHTML = `${thirdDay12pmFeels} <sup>&deg;<small>C</small>`;
                feelsat15pm.innerHTML = `${thirdDay15pmFeels} <sup>&deg;<small>C</small>`;
                feelsat18pm.innerHTML = `${thirdDay18pmFeels} <sup>&deg;<small>C</small>`;
                feelsat21pm.innerHTML = `${thirdDay21pmFeels} <sup>&deg;<small>C</small>`;

                windat3am.innerHTML = `${thirdDay3amWind} Km/h`;
                windat6am.innerHTML = `${thirdDay6amWind} Km/h`;
                windat9am.innerHTML = `${thirdDay9amWind} Km/h`;
                windat12pm.innerHTML = `${thirdDay12pmWind} Km/h`;
                windat15pm.innerHTML = `${thirdDay15pmWind} Km/h`;
                windat18pm.innerHTML = `${thirdDay18pmWind} Km/h`;
                windat21pm.innerHTML = `${thirdDay21pmWind} Km/h`;

                dirat3am.innerHTML = `${thirdDay3amDir}`;
                dirat6am.innerHTML = `${thirdDay6amDir}`;
                dirat9am.innerHTML = `${thirdDay9amDir}`;
                dirat12pm.innerHTML = `${thirdDay12pmDir}`;
                dirat15pm.innerHTML = `${thirdDay15pmDir}`;
                dirat18pm.innerHTML = `${thirdDay18pmDir}`;
                dirat21pm.innerHTML = `${thirdDay21pmDir}`;

                cloudat3am.innerHTML = `${thirdDay3amCloud}%`;
                cloudat6am.innerHTML = `${thirdDay6amCloud}%`;
                cloudat9am.innerHTML = `${thirdDay9amCloud}%`;
                cloudat12pm.innerHTML = `${thirdDay12pmCloud}%`;
                cloudat15pm.innerHTML = `${thirdDay15pmCloud}%`;
                cloudat18pm.innerHTML = `${thirdDay18pmCloud}%`;
                cloudat21pm.innerHTML = `${thirdDay21pmCloud}%`;

                humidityat3am.innerHTML = `${thirdDay3amHumidity}%`;
                humidityat6am.innerHTML = `${thirdDay6amHumidity}%`;
                humidityat9am.innerHTML = `${thirdDay9amHumidity}%`;
                humidityat12pm.innerHTML = `${thirdDay12pmHumidity}%`;
                humidityat15pm.innerHTML = `${thirdDay15pmHumidity}%`;
                humidityat18pm.innerHTML = `${thirdDay18pmHumidity}%`;
                humidityat21pm.innerHTML = `${thirdDay21pmHumidity}%`;

                pressureat3am.innerHTML = `${thirdDay3amPressure} hPa`;
                pressureat6am.innerHTML = `${thirdDay6amPressure} hPa`;
                pressureat9am.innerHTML = `${thirdDay9amPressure} hPa`;
                pressureat12pm.innerHTML = `${thirdDay12pmPressure} hPa`;
                pressureat15pm.innerHTML = `${thirdDay15pmPressure} hPa`;
                pressureat18pm.innerHTML = `${thirdDay18pmPressure} hPa`;
                pressureat21pm.innerHTML = `${thirdDay21pmPressure} hPa`;


            }).catch((error) => {
                console.log(error);
            });
    })

    // Forecast weather details for fourth day
    const fourthDay = document.querySelector('#fourthDay');
    fourthDay.addEventListener('click', function () {
        const apiKey = 'ee90fbbb7b1340ccbd313101240706';
        const apiLink = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=14&aqi=no&alerts=no`;

        fetch(apiLink)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                // Fourth day weather condition text and icon
                const fourthDayWeatherConditionText = data.forecast.forecastday[4].day.condition.text;

                const fourthDayWeatherConditionIcon = data.forecast.forecastday[4].day.condition.icon;

                WeatherrConditonText.textContent = `${fourthDayWeatherConditionText}`;

                // Adding body background depends on weather condition
                const backgroundVideo = document.querySelector('#backgroundVideo');
                const videoSource = document.querySelector('#videoSource');

                function changeBackground(condition) {
                    if (condition.toLowerCase().includes("patchy")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2017/07/20/10745-226632884_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("drizzle")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2024/02/20/201242-914943518_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("rain")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2023/06/26/168838-839912892_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("clear")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2022/10/06/133822-758327950_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("cloud")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2023/04/11/158384-816637349_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("sun")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2016/12/30/6952-197541960_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else {
                        videoSource.src = 'https://cdn.pixabay.com/video/2021/10/05/90877-629483574_large.mp4';
                        backgroundVideo.load(); // Load the default video source
                    }
                }

                changeBackground(fourthDayWeatherConditionText);

                // Function to get day by epochtime of day
                function getDayNameFromEpoch(epochTime) {
                    const date = new Date(epochTime * 1000);
                    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    return daysOfWeek[date.getDay()];
                }

                // Get the day name for each day
                const fourthDayDateEpoch = data.forecast.forecastday[4].date_epoch;
                const FourthDay = getDayNameFromEpoch(fourthDayDateEpoch);

                currentCityName.textContent = `${cityName}'s ${FourthDay}`;


                // Adding date to fourth day
                const forecastDate = document.querySelector('.forecastDate');
                const forecastDateFourthDay = `'${data.forecast.forecastday[4].date}'`;

                // Convert the date string to a Date object
                const dateObject = new Date(forecastDateFourthDay);

                // Extract day, month, and year from the Date object
                const day = dateObject.getDate();
                const monthIndex = dateObject.getMonth();
                const year = dateObject.getFullYear();

                // Define an array of month names
                const monthNames = [
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                ];

                // Format the date
                const formattedDate = `${day}${getOrdinalSuffix(day)} ${monthNames[monthIndex]} ${year}`;

                // Function to get ordinal suffix for the day
                function getOrdinalSuffix(day) {
                    if (day > 3 && day < 21) return 'th';
                    switch (day % 10) {
                        case 1: return 'st';
                        case 2: return 'nd';
                        case 3: return 'rd';
                        default: return 'th';
                    }
                }

                // Set the formatted date as text content
                forecastDate.textContent = formattedDate;

                // Updating  fourthDay
                const fourthDay3amTemp = data.forecast.forecastday[4].hour[3].temp_c;
                const fourthDay6amTemp = data.forecast.forecastday[4].hour[6].temp_c;
                const fourthDay9amTemp = data.forecast.forecastday[4].hour[9].temp_c;
                const fourthDay12pmTemp = data.forecast.forecastday[4].hour[12].temp_c;
                const fourthDay15pmTemp = data.forecast.forecastday[4].hour[15].temp_c;
                const fourthDay18pmTemp = data.forecast.forecastday[4].hour[18].temp_c;
                const fourthDay21pmTemp = data.forecast.forecastday[4].hour[21].temp_c;

                const fourthDay3amFeels = data.forecast.forecastday[4].hour[3].feelslike_c;
                const fourthDay6amFeels = data.forecast.forecastday[4].hour[6].feelslike_c;
                const fourthDay9amFeels = data.forecast.forecastday[4].hour[9].feelslike_c;
                const fourthDay12pmFeels = data.forecast.forecastday[4].hour[12].feelslike_c;
                const fourthDay15pmFeels = data.forecast.forecastday[4].hour[15].feelslike_c;
                const fourthDay18pmFeels = data.forecast.forecastday[4].hour[18].feelslike_c;
                const fourthDay21pmFeels = data.forecast.forecastday[4].hour[21].feelslike_c;

                const fourthDay3amDir = data.forecast.forecastday[4].hour[3].wind_dir;
                const fourthDay6amDir = data.forecast.forecastday[4].hour[6].wind_dir;
                const fourthDay9amDir = data.forecast.forecastday[4].hour[9].wind_dir;
                const fourthDay12pmDir = data.forecast.forecastday[4].hour[12].wind_dir;
                const fourthDay15pmDir = data.forecast.forecastday[4].hour[15].wind_dir;
                const fourthDay18pmDir = data.forecast.forecastday[4].hour[18].wind_dir;
                const fourthDay21pmDir = data.forecast.forecastday[4].hour[21].wind_dir;

                const fourthDay3amWind = data.forecast.forecastday[4].hour[3].wind_kph;
                const fourthDay6amWind = data.forecast.forecastday[4].hour[6].wind_kph;
                const fourthDay9amWind = data.forecast.forecastday[4].hour[9].wind_kph;
                const fourthDay12pmWind = data.forecast.forecastday[4].hour[12].wind_kph;
                const fourthDay15pmWind = data.forecast.forecastday[4].hour[15].wind_kph;
                const fourthDay18pmWind = data.forecast.forecastday[4].hour[18].wind_kph;
                const fourthDay21pmWind = data.forecast.forecastday[4].hour[21].wind_kph;

                const fourthDay3amCloud = data.forecast.forecastday[4].hour[3].cloud;
                const fourthDay6amCloud = data.forecast.forecastday[4].hour[6].cloud;
                const fourthDay9amCloud = data.forecast.forecastday[4].hour[9].cloud;
                const fourthDay12pmCloud = data.forecast.forecastday[4].hour[12].cloud;
                const fourthDay15pmCloud = data.forecast.forecastday[4].hour[15].cloud;
                const fourthDay18pmCloud = data.forecast.forecastday[4].hour[18].cloud;
                const fourthDay21pmCloud = data.forecast.forecastday[4].hour[21].cloud;

                const fourthDay3amHumidity = data.forecast.forecastday[4].hour[3].humidity;
                const fourthDay6amHumidity = data.forecast.forecastday[4].hour[6].humidity;
                const fourthDay9amHumidity = data.forecast.forecastday[4].hour[9].humidity;
                const fourthDay12pmHumidity = data.forecast.forecastday[4].hour[12].humidity;
                const fourthDay15pmHumidity = data.forecast.forecastday[4].hour[15].humidity;
                const fourthDay18pmHumidity = data.forecast.forecastday[4].hour[18].humidity;
                const fourthDay21pmHumidity = data.forecast.forecastday[4].hour[21].humidity;

                const fourthDay3amPressure = data.forecast.forecastday[4].hour[3].pressure_mb;
                const fourthDay6amPressure = data.forecast.forecastday[4].hour[6].pressure_mb;
                const fourthDay9amPressure = data.forecast.forecastday[4].hour[9].pressure_mb;
                const fourthDay12pmPressure = data.forecast.forecastday[4].hour[12].pressure_mb;
                const fourthDay15pmPressure = data.forecast.forecastday[4].hour[15].pressure_mb;
                const fourthDay18pmPressure = data.forecast.forecastday[4].hour[18].pressure_mb;
                const fourthDay21pmPressure = data.forecast.forecastday[4].hour[21].pressure_mb;

                // Adding fourth day content
                tempat3am.innerHTML = `${fourthDay3amTemp} <sup>&deg;<small>C</small>`;
                tempat6am.innerHTML = `${fourthDay6amTemp} <sup>&deg;<small>C</small>`;
                tempat9am.innerHTML = `${fourthDay9amTemp} <sup>&deg;<small>C</small>`;
                tempat12pm.innerHTML = `${fourthDay12pmTemp} <sup>&deg;<small>C</small>`;
                tempat15pm.innerHTML = `${fourthDay15pmTemp} <sup>&deg;<small>C</small>`;
                tempat18pm.innerHTML = `${fourthDay18pmTemp} <sup>&deg;<small>C</small>`;
                tempat21pm.innerHTML = `${fourthDay21pmTemp} <sup>&deg;<small>C</small>`;

                feelsat3am.innerHTML = `${fourthDay3amFeels} <sup>&deg;<small>C</small>`;
                feelsat6am.innerHTML = `${fourthDay6amFeels} <sup>&deg;<small>C</small>`;
                feelsat9am.innerHTML = `${fourthDay9amFeels} <sup>&deg;<small>C</small>`;
                feelsat12pm.innerHTML = `${fourthDay12pmFeels} <sup>&deg;<small>C</small>`;
                feelsat15pm.innerHTML = `${fourthDay15pmFeels} <sup>&deg;<small>C</small>`;
                feelsat18pm.innerHTML = `${fourthDay18pmFeels} <sup>&deg;<small>C</small>`;
                feelsat21pm.innerHTML = `${fourthDay21pmFeels} <sup>&deg;<small>C</small>`;

                windat3am.innerHTML = `${fourthDay3amWind} Km/h`;
                windat6am.innerHTML = `${fourthDay6amWind} Km/h`;
                windat9am.innerHTML = `${fourthDay9amWind} Km/h`;
                windat12pm.innerHTML = `${fourthDay12pmWind} Km/h`;
                windat15pm.innerHTML = `${fourthDay15pmWind} Km/h`;
                windat18pm.innerHTML = `${fourthDay18pmWind} Km/h`;
                windat21pm.innerHTML = `${fourthDay21pmWind} Km/h`;

                dirat3am.innerHTML = `${fourthDay3amDir}`;
                dirat6am.innerHTML = `${fourthDay6amDir}`;
                dirat9am.innerHTML = `${fourthDay9amDir}`;
                dirat12pm.innerHTML = `${fourthDay12pmDir}`;
                dirat15pm.innerHTML = `${fourthDay15pmDir}`;
                dirat18pm.innerHTML = `${fourthDay18pmDir}`;
                dirat21pm.innerHTML = `${fourthDay21pmDir}`;

                cloudat3am.innerHTML = `${fourthDay3amCloud}%`;
                cloudat6am.innerHTML = `${fourthDay6amCloud}%`;
                cloudat9am.innerHTML = `${fourthDay9amCloud}%`;
                cloudat12pm.innerHTML = `${fourthDay12pmCloud}%`;
                cloudat15pm.innerHTML = `${fourthDay15pmCloud}%`;
                cloudat18pm.innerHTML = `${fourthDay18pmCloud}%`;
                cloudat21pm.innerHTML = `${fourthDay21pmCloud}%`;

                humidityat3am.innerHTML = `${fourthDay3amHumidity}%`;
                humidityat6am.innerHTML = `${fourthDay6amHumidity}%`;
                humidityat9am.innerHTML = `${fourthDay9amHumidity}%`;
                humidityat12pm.innerHTML = `${fourthDay12pmHumidity}%`;
                humidityat15pm.innerHTML = `${fourthDay15pmHumidity}%`;
                humidityat18pm.innerHTML = `${fourthDay18pmHumidity}%`;
                humidityat21pm.innerHTML = `${fourthDay21pmHumidity}%`;

                pressureat3am.innerHTML = `${fourthDay3amPressure} hPa`;
                pressureat6am.innerHTML = `${fourthDay6amPressure} hPa`;
                pressureat9am.innerHTML = `${fourthDay9amPressure} hPa`;
                pressureat12pm.innerHTML = `${fourthDay12pmPressure} hPa`;
                pressureat15pm.innerHTML = `${fourthDay15pmPressure} hPa`;
                pressureat18pm.innerHTML = `${fourthDay18pmPressure} hPa`;
                pressureat21pm.innerHTML = `${fourthDay21pmPressure} hPa`;

            }).catch((error) => {
                console.log(error);
            });
    })

    // Forecast weather details for fifth day
    const fifthDay = document.querySelector('#fifthDay');
    fifthDay.addEventListener('click', function () {
        const apiKey = 'ee90fbbb7b1340ccbd313101240706';
        const apiLink = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=14&aqi=no&alerts=no`;

        fetch(apiLink)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                // Fifth day weather condition text and icon
                const fifthDayWeatherConditionText = data.forecast.forecastday[5].day.condition.text;

                const fifthDayWeatherConditionIcon = data.forecast.forecastday[5].day.condition.icon;

                WeatherrConditonText.textContent = `${fifthDayWeatherConditionText}`;

                // Adding body background depends on weather condition
                const backgroundVideo = document.querySelector('#backgroundVideo');
                const videoSource = document.querySelector('#videoSource');

                function changeBackground(condition) {
                    if (condition.toLowerCase().includes("patchy")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2017/07/20/10745-226632884_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("drizzle")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2024/02/20/201242-914943518_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("rain")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2023/06/26/168838-839912892_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("clear")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2022/10/06/133822-758327950_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("cloud")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2023/04/11/158384-816637349_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("sun")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2016/12/30/6952-197541960_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else {
                        videoSource.src = 'https://cdn.pixabay.com/video/2021/10/05/90877-629483574_large.mp4';
                        backgroundVideo.load(); // Load the default video source
                    }
                }

                changeBackground(fifthDayWeatherConditionText);

                // Function to get day by epochtime of day
                function getDayNameFromEpoch(epochTime) {
                    const date = new Date(epochTime * 1000);
                    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    return daysOfWeek[date.getDay()];
                }

                // Get the day name for each day
                const fifthDayDateEpoch = data.forecast.forecastday[5].date_epoch;
                const FifthDay = getDayNameFromEpoch(fifthDayDateEpoch);

                currentCityName.textContent = `${cityName}'s ${FifthDay}`;


                // Adding date to fifth day
                const forecastDate = document.querySelector('.forecastDate');
                const forecastDateFifthDay = `'${data.forecast.forecastday[5].date}'`;

                // Convert the date string to a Date object
                const dateObject = new Date(forecastDateFifthDay);

                // Extract day, month, and year from the Date object
                const day = dateObject.getDate();
                const monthIndex = dateObject.getMonth();
                const year = dateObject.getFullYear();

                // Define an array of month names
                const monthNames = [
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                ];

                // Format the date
                const formattedDate = `${day}${getOrdinalSuffix(day)} ${monthNames[monthIndex]} ${year}`;

                // Function to get ordinal suffix for the day
                function getOrdinalSuffix(day) {
                    if (day > 3 && day < 21) return 'th';
                    switch (day % 10) {
                        case 1: return 'st';
                        case 2: return 'nd';
                        case 3: return 'rd';
                        default: return 'th';
                    }
                }

                // Set the formatted date as text content
                forecastDate.textContent = formattedDate;

                // Updating fifthDay
                const fifthDay3amTemp = data.forecast.forecastday[5].hour[3].temp_c;
                const fifthDay6amTemp = data.forecast.forecastday[5].hour[6].temp_c;
                const fifthDay9amTemp = data.forecast.forecastday[5].hour[9].temp_c;
                const fifthDay12pmTemp = data.forecast.forecastday[5].hour[12].temp_c;
                const fifthDay15pmTemp = data.forecast.forecastday[5].hour[15].temp_c;
                const fifthDay18pmTemp = data.forecast.forecastday[5].hour[18].temp_c;
                const fifthDay21pmTemp = data.forecast.forecastday[5].hour[21].temp_c;

                const fifthDay3amFeels = data.forecast.forecastday[5].hour[3].feelslike_c;
                const fifthDay6amFeels = data.forecast.forecastday[5].hour[6].feelslike_c;
                const fifthDay9amFeels = data.forecast.forecastday[5].hour[9].feelslike_c;
                const fifthDay12pmFeels = data.forecast.forecastday[5].hour[12].feelslike_c;
                const fifthDay15pmFeels = data.forecast.forecastday[5].hour[15].feelslike_c;
                const fifthDay18pmFeels = data.forecast.forecastday[5].hour[18].feelslike_c;
                const fifthDay21pmFeels = data.forecast.forecastday[5].hour[21].feelslike_c;

                const fifthDay3amDir = data.forecast.forecastday[5].hour[3].wind_dir;
                const fifthDay6amDir = data.forecast.forecastday[5].hour[6].wind_dir;
                const fifthDay9amDir = data.forecast.forecastday[5].hour[9].wind_dir;
                const fifthDay12pmDir = data.forecast.forecastday[5].hour[12].wind_dir;
                const fifthDay15pmDir = data.forecast.forecastday[5].hour[15].wind_dir;
                const fifthDay18pmDir = data.forecast.forecastday[5].hour[18].wind_dir;
                const fifthDay21pmDir = data.forecast.forecastday[5].hour[21].wind_dir;

                const fifthDay3amWind = data.forecast.forecastday[5].hour[3].wind_kph;
                const fifthDay6amWind = data.forecast.forecastday[5].hour[6].wind_kph;
                const fifthDay9amWind = data.forecast.forecastday[5].hour[9].wind_kph;
                const fifthDay12pmWind = data.forecast.forecastday[5].hour[12].wind_kph;
                const fifthDay15pmWind = data.forecast.forecastday[5].hour[15].wind_kph;
                const fifthDay18pmWind = data.forecast.forecastday[5].hour[18].wind_kph;
                const fifthDay21pmWind = data.forecast.forecastday[5].hour[21].wind_kph;

                const fifthDay3amCloud = data.forecast.forecastday[5].hour[3].cloud;
                const fifthDay6amCloud = data.forecast.forecastday[5].hour[6].cloud;
                const fifthDay9amCloud = data.forecast.forecastday[5].hour[9].cloud;
                const fifthDay12pmCloud = data.forecast.forecastday[5].hour[12].cloud;
                const fifthDay15pmCloud = data.forecast.forecastday[5].hour[15].cloud;
                const fifthDay18pmCloud = data.forecast.forecastday[5].hour[18].cloud;
                const fifthDay21pmCloud = data.forecast.forecastday[5].hour[21].cloud;

                const fifthDay3amHumidity = data.forecast.forecastday[5].hour[3].humidity;
                const fifthDay6amHumidity = data.forecast.forecastday[5].hour[6].humidity;
                const fifthDay9amHumidity = data.forecast.forecastday[5].hour[9].humidity;
                const fifthDay12pmHumidity = data.forecast.forecastday[5].hour[12].humidity;
                const fifthDay15pmHumidity = data.forecast.forecastday[5].hour[15].humidity;
                const fifthDay18pmHumidity = data.forecast.forecastday[5].hour[18].humidity;
                const fifthDay21pmHumidity = data.forecast.forecastday[5].hour[21].humidity;

                const fifthDay3amPressure = data.forecast.forecastday[5].hour[3].pressure_mb;
                const fifthDay6amPressure = data.forecast.forecastday[5].hour[6].pressure_mb;
                const fifthDay9amPressure = data.forecast.forecastday[5].hour[9].pressure_mb;
                const fifthDay12pmPressure = data.forecast.forecastday[5].hour[12].pressure_mb;
                const fifthDay15pmPressure = data.forecast.forecastday[5].hour[15].pressure_mb;
                const fifthDay18pmPressure = data.forecast.forecastday[5].hour[18].pressure_mb;
                const fifthDay21pmPressure = data.forecast.forecastday[5].hour[21].pressure_mb;

                // Adding fifth day content
                tempat3am.innerHTML = `${fifthDay3amTemp} <sup>&deg;<small>C</small>`;
                tempat6am.innerHTML = `${fifthDay6amTemp} <sup>&deg;<small>C</small>`;
                tempat9am.innerHTML = `${fifthDay9amTemp} <sup>&deg;<small>C</small>`;
                tempat12pm.innerHTML = `${fifthDay12pmTemp} <sup>&deg;<small>C</small>`;
                tempat15pm.innerHTML = `${fifthDay15pmTemp} <sup>&deg;<small>C</small>`;
                tempat18pm.innerHTML = `${fifthDay18pmTemp} <sup>&deg;<small>C</small>`;
                tempat21pm.innerHTML = `${fifthDay21pmTemp} <sup>&deg;<small>C</small>`;

                feelsat3am.innerHTML = `${fifthDay3amFeels} <sup>&deg;<small>C</small>`;
                feelsat6am.innerHTML = `${fifthDay6amFeels} <sup>&deg;<small>C</small>`;
                feelsat9am.innerHTML = `${fifthDay9amFeels} <sup>&deg;<small>C</small>`;
                feelsat12pm.innerHTML = `${fifthDay12pmFeels} <sup>&deg;<small>C</small>`;
                feelsat15pm.innerHTML = `${fifthDay15pmFeels} <sup>&deg;<small>C</small>`;
                feelsat18pm.innerHTML = `${fifthDay18pmFeels} <sup>&deg;<small>C</small>`;
                feelsat21pm.innerHTML = `${fifthDay21pmFeels} <sup>&deg;<small>C</small>`;

                windat3am.innerHTML = `${fifthDay3amWind} Km/h`;
                windat6am.innerHTML = `${fifthDay6amWind} Km/h`;
                windat9am.innerHTML = `${fifthDay9amWind} Km/h`;
                windat12pm.innerHTML = `${fifthDay12pmWind} Km/h`;
                windat15pm.innerHTML = `${fifthDay15pmWind} Km/h`;
                windat18pm.innerHTML = `${fifthDay18pmWind} Km/h`;
                windat21pm.innerHTML = `${fifthDay21pmWind} Km/h`;

                dirat3am.innerHTML = `${fifthDay3amDir}`;
                dirat6am.innerHTML = `${fifthDay6amDir}`;
                dirat9am.innerHTML = `${fifthDay9amDir}`;
                dirat12pm.innerHTML = `${fifthDay12pmDir}`;
                dirat15pm.innerHTML = `${fifthDay15pmDir}`;
                dirat18pm.innerHTML = `${fifthDay18pmDir}`;
                dirat21pm.innerHTML = `${fifthDay21pmDir}`;

                cloudat3am.innerHTML = `${fifthDay3amCloud}%`;
                cloudat6am.innerHTML = `${fifthDay6amCloud}%`;
                cloudat9am.innerHTML = `${fifthDay9amCloud}%`;
                cloudat12pm.innerHTML = `${fifthDay12pmCloud}%`;
                cloudat15pm.innerHTML = `${fifthDay15pmCloud}%`;
                cloudat18pm.innerHTML = `${fifthDay18pmCloud}%`;
                cloudat21pm.innerHTML = `${fifthDay21pmCloud}%`;

                humidityat3am.innerHTML = `${fifthDay3amHumidity}%`;
                humidityat6am.innerHTML = `${fifthDay6amHumidity}%`;
                humidityat9am.innerHTML = `${fifthDay9amHumidity}%`;
                humidityat12pm.innerHTML = `${fifthDay12pmHumidity}%`;
                humidityat15pm.innerHTML = `${fifthDay15pmHumidity}%`;
                humidityat18pm.innerHTML = `${fifthDay18pmHumidity}%`;
                humidityat21pm.innerHTML = `${fifthDay21pmHumidity}%`;

                pressureat3am.innerHTML = `${fifthDay3amPressure} hPa`;
                pressureat6am.innerHTML = `${fifthDay6amPressure} hPa`;
                pressureat9am.innerHTML = `${fifthDay9amPressure} hPa`;
                pressureat12pm.innerHTML = `${fifthDay12pmPressure} hPa`;
                pressureat15pm.innerHTML = `${fifthDay15pmPressure} hPa`;
                pressureat18pm.innerHTML = `${fifthDay18pmPressure} hPa`;
                pressureat21pm.innerHTML = `${fifthDay21pmPressure} hPa`;

            })
            .catch((error) => {
                console.log(error);
            });
    })

    // Forecast weather details for sixth day
    const sixthDay = document.querySelector('#sixthDay');
    sixthDay.addEventListener('click', function () {
        const apiKey = 'ee90fbbb7b1340ccbd313101240706';
        const apiLink = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=14&aqi=no&alerts=no`;

        fetch(apiLink)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                // Sixth day weather condition text and icon
                const sixthDayWeatherConditionText = data.forecast.forecastday[6].day.condition.text;

                const sixthDayWeatherConditionIcon = data.forecast.forecastday[6].day.condition.icon;

                WeatherrConditonText.textContent = `${sixthDayWeatherConditionText}`;

                // Adding body background depends on weather condition
                const backgroundVideo = document.querySelector('#backgroundVideo');
                const videoSource = document.querySelector('#videoSource');

                function changeBackground(condition) {
                    if (condition.toLowerCase().includes("patchy")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2017/07/20/10745-226632884_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("drizzle")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2024/02/20/201242-914943518_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("rain")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2023/06/26/168838-839912892_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("clear")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2022/10/06/133822-758327950_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("cloud")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2023/04/11/158384-816637349_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("sun")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2016/12/30/6952-197541960_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else {
                        videoSource.src = 'https://cdn.pixabay.com/video/2021/10/05/90877-629483574_large.mp4';
                        backgroundVideo.load(); // Load the default video source
                    }
                }

                changeBackground(sixthDayWeatherConditionText);

                // Function to get day by epochtime of day
                function getDayNameFromEpoch(epochTime) {
                    const date = new Date(epochTime * 1000);
                    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    return daysOfWeek[date.getDay()];
                }

                // Get the day name for each day
                const sixthDayDateEpoch = data.forecast.forecastday[6].date_epoch;
                const SixthDay = getDayNameFromEpoch(sixthDayDateEpoch);

                currentCityName.textContent = `${cityName}'s ${SixthDay}`;


                // Adding date to sixth day
                const forecastDate = document.querySelector('.forecastDate');
                const forecastDateSixthDay = `'${data.forecast.forecastday[6].date}'`;

                // Convert the date string to a Date object
                const dateObject = new Date(forecastDateSixthDay);

                // Extract day, month, and year from the Date object
                const day = dateObject.getDate();
                const monthIndex = dateObject.getMonth();
                const year = dateObject.getFullYear();

                // Define an array of month names
                const monthNames = [
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                ];

                // Format the date
                const formattedDate = `${day}${getOrdinalSuffix(day)} ${monthNames[monthIndex]} ${year}`;

                // Function to get ordinal suffix for the day
                function getOrdinalSuffix(day) {
                    if (day > 3 && day < 21) return 'th';
                    switch (day % 10) {
                        case 1: return 'st';
                        case 2: return 'nd';
                        case 3: return 'rd';
                        default: return 'th';
                    }
                }

                // Set the formatted date as text content
                forecastDate.textContent = formattedDate;

                // Updating sixthDay
                const sixthDay3amTemp = data.forecast.forecastday[6].hour[3].temp_c;
                const sixthDay6amTemp = data.forecast.forecastday[6].hour[6].temp_c;
                const sixthDay9amTemp = data.forecast.forecastday[6].hour[9].temp_c;
                const sixthDay12pmTemp = data.forecast.forecastday[6].hour[12].temp_c;
                const sixthDay15pmTemp = data.forecast.forecastday[6].hour[15].temp_c;
                const sixthDay18pmTemp = data.forecast.forecastday[6].hour[18].temp_c;
                const sixthDay21pmTemp = data.forecast.forecastday[6].hour[21].temp_c;

                const sixthDay3amFeels = data.forecast.forecastday[6].hour[3].feelslike_c;
                const sixthDay6amFeels = data.forecast.forecastday[6].hour[6].feelslike_c;
                const sixthDay9amFeels = data.forecast.forecastday[6].hour[9].feelslike_c;
                const sixthDay12pmFeels = data.forecast.forecastday[6].hour[12].feelslike_c;
                const sixthDay15pmFeels = data.forecast.forecastday[6].hour[15].feelslike_c;
                const sixthDay18pmFeels = data.forecast.forecastday[6].hour[18].feelslike_c;
                const sixthDay21pmFeels = data.forecast.forecastday[6].hour[21].feelslike_c;

                const sixthDay3amDir = data.forecast.forecastday[6].hour[3].wind_dir;
                const sixthDay6amDir = data.forecast.forecastday[6].hour[6].wind_dir;
                const sixthDay9amDir = data.forecast.forecastday[6].hour[9].wind_dir;
                const sixthDay12pmDir = data.forecast.forecastday[6].hour[12].wind_dir;
                const sixthDay15pmDir = data.forecast.forecastday[6].hour[15].wind_dir;
                const sixthDay18pmDir = data.forecast.forecastday[6].hour[18].wind_dir;
                const sixthDay21pmDir = data.forecast.forecastday[6].hour[21].wind_dir;

                const sixthDay3amWind = data.forecast.forecastday[6].hour[3].wind_kph;
                const sixthDay6amWind = data.forecast.forecastday[6].hour[6].wind_kph;
                const sixthDay9amWind = data.forecast.forecastday[6].hour[9].wind_kph;
                const sixthDay12pmWind = data.forecast.forecastday[6].hour[12].wind_kph;
                const sixthDay15pmWind = data.forecast.forecastday[6].hour[15].wind_kph;
                const sixthDay18pmWind = data.forecast.forecastday[6].hour[18].wind_kph;
                const sixthDay21pmWind = data.forecast.forecastday[6].hour[21].wind_kph;

                const sixthDay3amCloud = data.forecast.forecastday[6].hour[3].cloud;
                const sixthDay6amCloud = data.forecast.forecastday[6].hour[6].cloud;
                const sixthDay9amCloud = data.forecast.forecastday[6].hour[9].cloud;
                const sixthDay12pmCloud = data.forecast.forecastday[6].hour[12].cloud;
                const sixthDay15pmCloud = data.forecast.forecastday[6].hour[15].cloud;
                const sixthDay18pmCloud = data.forecast.forecastday[6].hour[18].cloud;
                const sixthDay21pmCloud = data.forecast.forecastday[6].hour[21].cloud;

                const sixthDay3amHumidity = data.forecast.forecastday[6].hour[3].humidity;
                const sixthDay6amHumidity = data.forecast.forecastday[6].hour[6].humidity;
                const sixthDay9amHumidity = data.forecast.forecastday[6].hour[9].humidity;
                const sixthDay12pmHumidity = data.forecast.forecastday[6].hour[12].humidity;
                const sixthDay15pmHumidity = data.forecast.forecastday[6].hour[15].humidity;
                const sixthDay18pmHumidity = data.forecast.forecastday[6].hour[18].humidity;
                const sixthDay21pmHumidity = data.forecast.forecastday[6].hour[21].humidity;

                const sixthDay3amPressure = data.forecast.forecastday[6].hour[3].pressure_mb;
                const sixthDay6amPressure = data.forecast.forecastday[6].hour[6].pressure_mb;
                const sixthDay9amPressure = data.forecast.forecastday[6].hour[9].pressure_mb;
                const sixthDay12pmPressure = data.forecast.forecastday[6].hour[12].pressure_mb;
                const sixthDay15pmPressure = data.forecast.forecastday[6].hour[15].pressure_mb;
                const sixthDay18pmPressure = data.forecast.forecastday[6].hour[18].pressure_mb;
                const sixthDay21pmPressure = data.forecast.forecastday[6].hour[21].pressure_mb;

                // Adding sixth day content
                tempat3am.innerHTML = `${sixthDay3amTemp} <sup>&deg;<small>C</small>`;
                tempat6am.innerHTML = `${sixthDay6amTemp} <sup>&deg;<small>C</small>`;
                tempat9am.innerHTML = `${sixthDay9amTemp} <sup>&deg;<small>C</small>`;
                tempat12pm.innerHTML = `${sixthDay12pmTemp} <sup>&deg;<small>C</small>`;
                tempat15pm.innerHTML = `${sixthDay15pmTemp} <sup>&deg;<small>C</small>`;
                tempat18pm.innerHTML = `${sixthDay18pmTemp} <sup>&deg;<small>C</small>`;
                tempat21pm.innerHTML = `${sixthDay21pmTemp} <sup>&deg;<small>C</small>`;

                feelsat3am.innerHTML = `${sixthDay3amFeels} <sup>&deg;<small>C</small>`;
                feelsat6am.innerHTML = `${sixthDay6amFeels} <sup>&deg;<small>C</small>`;
                feelsat9am.innerHTML = `${sixthDay9amFeels} <sup>&deg;<small>C</small>`;
                feelsat12pm.innerHTML = `${sixthDay12pmFeels} <sup>&deg;<small>C</small>`;
                feelsat15pm.innerHTML = `${sixthDay15pmFeels} <sup>&deg;<small>C</small>`;
                feelsat18pm.innerHTML = `${sixthDay18pmFeels} <sup>&deg;<small>C</small>`;
                feelsat21pm.innerHTML = `${sixthDay21pmFeels} <sup>&deg;<small>C</small>`;

                windat3am.innerHTML = `${sixthDay3amWind} Km/h`;
                windat6am.innerHTML = `${sixthDay6amWind} Km/h`;
                windat9am.innerHTML = `${sixthDay9amWind} Km/h`;
                windat12pm.innerHTML = `${sixthDay12pmWind} Km/h`;
                windat15pm.innerHTML = `${sixthDay15pmWind} Km/h`;
                windat18pm.innerHTML = `${sixthDay18pmWind} Km/h`;
                windat21pm.innerHTML = `${sixthDay21pmWind} Km/h`;

                dirat3am.innerHTML = `${sixthDay3amDir}`;
                dirat6am.innerHTML = `${sixthDay6amDir}`;
                dirat9am.innerHTML = `${sixthDay9amDir}`;
                dirat12pm.innerHTML = `${sixthDay12pmDir}`;
                dirat15pm.innerHTML = `${sixthDay15pmDir}`;
                dirat18pm.innerHTML = `${sixthDay18pmDir}`;
                dirat21pm.innerHTML = `${sixthDay21pmDir}`;

                cloudat3am.innerHTML = `${sixthDay3amCloud}%`;
                cloudat6am.innerHTML = `${sixthDay6amCloud}%`;
                cloudat9am.innerHTML = `${sixthDay9amCloud}%`;
                cloudat12pm.innerHTML = `${sixthDay12pmCloud}%`;
                cloudat15pm.innerHTML = `${sixthDay15pmCloud}%`;
                cloudat18pm.innerHTML = `${sixthDay18pmCloud}%`;
                cloudat21pm.innerHTML = `${sixthDay21pmCloud}%`;

                humidityat3am.innerHTML = `${sixthDay3amHumidity}%`;
                humidityat6am.innerHTML = `${sixthDay6amHumidity}%`;
                humidityat9am.innerHTML = `${sixthDay9amHumidity}%`;
                humidityat12pm.innerHTML = `${sixthDay12pmHumidity}%`;
                humidityat15pm.innerHTML = `${sixthDay15pmHumidity}%`;
                humidityat18pm.innerHTML = `${sixthDay18pmHumidity}%`;
                humidityat21pm.innerHTML = `${sixthDay21pmHumidity}%`;

                pressureat3am.innerHTML = `${sixthDay3amPressure} hPa`;
                pressureat6am.innerHTML = `${sixthDay6amPressure} hPa`;
                pressureat9am.innerHTML = `${sixthDay9amPressure} hPa`;
                pressureat12pm.innerHTML = `${sixthDay12pmPressure} hPa`;
                pressureat15pm.innerHTML = `${sixthDay15pmPressure} hPa`;
                pressureat18pm.innerHTML = `${sixthDay18pmPressure} hPa`;
                pressureat21pm.innerHTML = `${sixthDay21pmPressure} hPa`;



            })
            .catch((error) => {
                console.log(error);
            });
    })

    // Forecast weather details for seventh day
    const seventhDay = document.querySelector('#seventhDay');
    seventhDay.addEventListener('click', function () {
        const apiKey = 'ee90fbbb7b1340ccbd313101240706';
        const apiLink = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=14&aqi=no&alerts=no`;

        fetch(apiLink)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                // Seventh day weather condition text and icon
                const seventhDayWeatherConditionText = data.forecast.forecastday[7].day.condition.text;

                const fourthDayWeatherConditionIcon = data.forecast.forecastday[7].day.condition.icon;

                WeatherrConditonText.textContent = `${seventhDayWeatherConditionText}`;

                // Adding body background depends on weather condition
                const backgroundVideo = document.querySelector('#backgroundVideo');
                const videoSource = document.querySelector('#videoSource');

                function changeBackground(condition) {
                    if (condition.toLowerCase().includes("patchy")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2017/07/20/10745-226632884_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("drizzle")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2024/02/20/201242-914943518_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("rain")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2023/06/26/168838-839912892_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("clear")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2022/10/06/133822-758327950_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("cloud")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2023/04/11/158384-816637349_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("sun")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2016/12/30/6952-197541960_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else {
                        videoSource.src = 'https://cdn.pixabay.com/video/2021/10/05/90877-629483574_large.mp4';
                        backgroundVideo.load(); // Load the default video source
                    }
                }

                changeBackground(seventhDayWeatherConditionText);

                // Function to get day by epochtime of day
                function getDayNameFromEpoch(epochTime) {
                    const date = new Date(epochTime * 1000);
                    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    return daysOfWeek[date.getDay()];
                }

                // Get the day name for each day
                const seventhDayDateEpoch = data.forecast.forecastday[7].date_epoch;
                const SeventhDay = getDayNameFromEpoch(seventhDayDateEpoch);

                currentCityName.textContent = `${cityName}'s ${SeventhDay}`;


                // Adding date to seventh day
                const forecastDate = document.querySelector('.forecastDate');
                const forecastDateSeventhDay = `'${data.forecast.forecastday[7].date}'`;

                // Convert the date string to a Date object
                const dateObject = new Date(forecastDateSeventhDay);

                // Extract day, month, and year from the Date object
                const day = dateObject.getDate();
                const monthIndex = dateObject.getMonth();
                const year = dateObject.getFullYear();

                // Define an array of month names
                const monthNames = [
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                ];

                // Format the date
                const formattedDate = `${day}${getOrdinalSuffix(day)} ${monthNames[monthIndex]} ${year}`;

                // Function to get ordinal suffix for the day
                function getOrdinalSuffix(day) {
                    if (day > 3 && day < 21) return 'th';
                    switch (day % 10) {
                        case 1: return 'st';
                        case 2: return 'nd';
                        case 3: return 'rd';
                        default: return 'th';
                    }
                }

                // Set the formatted date as text content
                forecastDate.textContent = formattedDate;

                // Updating seventhDay
                const seventhDay3amTemp = data.forecast.forecastday[7].hour[3].temp_c;
                const seventhDay6amTemp = data.forecast.forecastday[7].hour[6].temp_c;
                const seventhDay9amTemp = data.forecast.forecastday[7].hour[9].temp_c;
                const seventhDay12pmTemp = data.forecast.forecastday[7].hour[12].temp_c;
                const seventhDay15pmTemp = data.forecast.forecastday[7].hour[15].temp_c;
                const seventhDay18pmTemp = data.forecast.forecastday[7].hour[18].temp_c;
                const seventhDay21pmTemp = data.forecast.forecastday[7].hour[21].temp_c;

                const seventhDay3amFeels = data.forecast.forecastday[7].hour[3].feelslike_c;
                const seventhDay6amFeels = data.forecast.forecastday[7].hour[6].feelslike_c;
                const seventhDay9amFeels = data.forecast.forecastday[7].hour[9].feelslike_c;
                const seventhDay12pmFeels = data.forecast.forecastday[7].hour[12].feelslike_c;
                const seventhDay15pmFeels = data.forecast.forecastday[7].hour[15].feelslike_c;
                const seventhDay18pmFeels = data.forecast.forecastday[7].hour[18].feelslike_c;
                const seventhDay21pmFeels = data.forecast.forecastday[7].hour[21].feelslike_c;

                const seventhDay3amDir = data.forecast.forecastday[7].hour[3].wind_dir;
                const seventhDay6amDir = data.forecast.forecastday[7].hour[6].wind_dir;
                const seventhDay9amDir = data.forecast.forecastday[7].hour[9].wind_dir;
                const seventhDay12pmDir = data.forecast.forecastday[7].hour[12].wind_dir;
                const seventhDay15pmDir = data.forecast.forecastday[7].hour[15].wind_dir;
                const seventhDay18pmDir = data.forecast.forecastday[7].hour[18].wind_dir;
                const seventhDay21pmDir = data.forecast.forecastday[7].hour[21].wind_dir;

                const seventhDay3amWind = data.forecast.forecastday[7].hour[3].wind_kph;
                const seventhDay6amWind = data.forecast.forecastday[7].hour[6].wind_kph;
                const seventhDay9amWind = data.forecast.forecastday[7].hour[9].wind_kph;
                const seventhDay12pmWind = data.forecast.forecastday[7].hour[12].wind_kph;
                const seventhDay15pmWind = data.forecast.forecastday[7].hour[15].wind_kph;
                const seventhDay18pmWind = data.forecast.forecastday[7].hour[18].wind_kph;
                const seventhDay21pmWind = data.forecast.forecastday[7].hour[21].wind_kph;

                const seventhDay3amCloud = data.forecast.forecastday[7].hour[3].cloud;
                const seventhDay6amCloud = data.forecast.forecastday[7].hour[6].cloud;
                const seventhDay9amCloud = data.forecast.forecastday[7].hour[9].cloud;
                const seventhDay12pmCloud = data.forecast.forecastday[7].hour[12].cloud;
                const seventhDay15pmCloud = data.forecast.forecastday[7].hour[15].cloud;
                const seventhDay18pmCloud = data.forecast.forecastday[7].hour[18].cloud;
                const seventhDay21pmCloud = data.forecast.forecastday[7].hour[21].cloud;

                const seventhDay3amHumidity = data.forecast.forecastday[7].hour[3].humidity;
                const seventhDay6amHumidity = data.forecast.forecastday[7].hour[6].humidity;
                const seventhDay9amHumidity = data.forecast.forecastday[7].hour[9].humidity;
                const seventhDay12pmHumidity = data.forecast.forecastday[7].hour[12].humidity;
                const seventhDay15pmHumidity = data.forecast.forecastday[7].hour[15].humidity;
                const seventhDay18pmHumidity = data.forecast.forecastday[7].hour[18].humidity;
                const seventhDay21pmHumidity = data.forecast.forecastday[7].hour[21].humidity;

                const seventhDay3amPressure = data.forecast.forecastday[7].hour[3].pressure_mb;
                const seventhDay6amPressure = data.forecast.forecastday[7].hour[6].pressure_mb;
                const seventhDay9amPressure = data.forecast.forecastday[7].hour[9].pressure_mb;
                const seventhDay12pmPressure = data.forecast.forecastday[7].hour[12].pressure_mb;
                const seventhDay15pmPressure = data.forecast.forecastday[7].hour[15].pressure_mb;
                const seventhDay18pmPressure = data.forecast.forecastday[7].hour[18].pressure_mb;
                const seventhDay21pmPressure = data.forecast.forecastday[7].hour[21].pressure_mb;

                // Adding seventh day content
                tempat3am.innerHTML = `${seventhDay3amTemp} <sup>&deg;<small>C</small>`;
                tempat6am.innerHTML = `${seventhDay6amTemp} <sup>&deg;<small>C</small>`;
                tempat9am.innerHTML = `${seventhDay9amTemp} <sup>&deg;<small>C</small>`;
                tempat12pm.innerHTML = `${seventhDay12pmTemp} <sup>&deg;<small>C</small>`;
                tempat15pm.innerHTML = `${seventhDay15pmTemp} <sup>&deg;<small>C</small>`;
                tempat18pm.innerHTML = `${seventhDay18pmTemp} <sup>&deg;<small>C</small>`;
                tempat21pm.innerHTML = `${seventhDay21pmTemp} <sup>&deg;<small>C</small>`;

                feelsat3am.innerHTML = `${seventhDay3amFeels} <sup>&deg;<small>C</small>`;
                feelsat6am.innerHTML = `${seventhDay6amFeels} <sup>&deg;<small>C</small>`;
                feelsat9am.innerHTML = `${seventhDay9amFeels} <sup>&deg;<small>C</small>`;
                feelsat12pm.innerHTML = `${seventhDay12pmFeels} <sup>&deg;<small>C</small>`;
                feelsat15pm.innerHTML = `${seventhDay15pmFeels} <sup>&deg;<small>C</small>`;
                feelsat18pm.innerHTML = `${seventhDay18pmFeels} <sup>&deg;<small>C</small>`;
                feelsat21pm.innerHTML = `${seventhDay21pmFeels} <sup>&deg;<small>C</small>`;

                windat3am.innerHTML = `${seventhDay3amWind} Km/h`;
                windat6am.innerHTML = `${seventhDay6amWind} Km/h`;
                windat9am.innerHTML = `${seventhDay9amWind} Km/h`;
                windat12pm.innerHTML = `${seventhDay12pmWind} Km/h`;
                windat15pm.innerHTML = `${seventhDay15pmWind} Km/h`;
                windat18pm.innerHTML = `${seventhDay18pmWind} Km/h`;
                windat21pm.innerHTML = `${seventhDay21pmWind} Km/h`;

                dirat3am.innerHTML = `${seventhDay3amDir}`;
                dirat6am.innerHTML = `${seventhDay6amDir}`;
                dirat9am.innerHTML = `${seventhDay9amDir}`;
                dirat12pm.innerHTML = `${seventhDay12pmDir}`;
                dirat15pm.innerHTML = `${seventhDay15pmDir}`;
                dirat18pm.innerHTML = `${seventhDay18pmDir}`;
                dirat21pm.innerHTML = `${seventhDay21pmDir}`;

                cloudat3am.innerHTML = `${seventhDay3amCloud}%`;
                cloudat6am.innerHTML = `${seventhDay6amCloud}%`;
                cloudat9am.innerHTML = `${seventhDay9amCloud}%`;
                cloudat12pm.innerHTML = `${seventhDay12pmCloud}%`;
                cloudat15pm.innerHTML = `${seventhDay15pmCloud}%`;
                cloudat18pm.innerHTML = `${seventhDay18pmCloud}%`;
                cloudat21pm.innerHTML = `${seventhDay21pmCloud}%`;

                humidityat3am.innerHTML = `${seventhDay3amHumidity}%`;
                humidityat6am.innerHTML = `${seventhDay6amHumidity}%`;
                humidityat9am.innerHTML = `${seventhDay9amHumidity}%`;
                humidityat12pm.innerHTML = `${seventhDay12pmHumidity}%`;
                humidityat15pm.innerHTML = `${seventhDay15pmHumidity}%`;
                humidityat18pm.innerHTML = `${seventhDay18pmHumidity}%`;
                humidityat21pm.innerHTML = `${seventhDay21pmHumidity}%`;

                pressureat3am.innerHTML = `${seventhDay3amPressure} hPa`;
                pressureat6am.innerHTML = `${seventhDay6amPressure} hPa`;
                pressureat9am.innerHTML = `${seventhDay9amPressure} hPa`;
                pressureat12pm.innerHTML = `${seventhDay12pmPressure} hPa`; pressureat15pm.innerHTML = `${seventhDay15pmPressure} hPa`; pressureat18pm.innerHTML = `${seventhDay18pmPressure} hPa`; pressureat21pm.innerHTML = `${seventhDay21pmPressure} hPa`;

            })
            .catch((error) => {
                console.log(error);
            });
    })

    // Forecast weather details for eight day
    const eightDay = document.querySelector('#eightDay');
    eightDay.addEventListener('click', function () {
        const apiKey = 'ee90fbbb7b1340ccbd313101240706';
        const apiLink = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=14&aqi=no&alerts=no`;

        fetch(apiLink)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                // Eight day weather condition text and icon
                const eightDayWeatherConditionText = data.forecast.forecastday[8].day.condition.text;

                const eightDayWeatherConditionIcon = data.forecast.forecastday[8].day.condition.icon;

                WeatherrConditonText.textContent = `${eightDayWeatherConditionText}`;

                // Adding body background depends on weather condition
                const backgroundVideo = document.querySelector('#backgroundVideo');
                const videoSource = document.querySelector('#videoSource');

                function changeBackground(condition) {
                    if (condition.toLowerCase().includes("patchy")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2017/07/20/10745-226632884_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("drizzle")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2024/02/20/201242-914943518_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("rain")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2023/06/26/168838-839912892_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("clear")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2022/10/06/133822-758327950_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("cloud")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2023/04/11/158384-816637349_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else if (condition.toLowerCase().includes("sun")) {
                        videoSource.src = 'https://cdn.pixabay.com/video/2016/12/30/6952-197541960_large.mp4';
                        backgroundVideo.load(); // Load the new video source
                    }
                    else {
                        videoSource.src = 'https://cdn.pixabay.com/video/2021/10/05/90877-629483574_large.mp4';
                        backgroundVideo.load(); // Load the default video source
                    }
                }

                changeBackground(eightDayWeatherConditionText);

                // Function to get day by epochtime of day
                function getDayNameFromEpoch(epochTime) {
                    const date = new Date(epochTime * 1000);
                    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    return daysOfWeek[date.getDay()];
                }

                // Get the day name for each day
                const eighthDayDateEpoch = data.forecast.forecastday[8].date_epoch;
                const EightDay = getDayNameFromEpoch(eighthDayDateEpoch);

                currentCityName.textContent = `${cityName}'s ${EightDay}`;


                // Adding date to sixth day
                const forecastDate = document.querySelector('.forecastDate');
                const forecastDateEightDay = `'${data.forecast.forecastday[8].date}'`;

                // Convert the date string to a Date object
                const dateObject = new Date(forecastDateEightDay);

                // Extract day, month, and year from the Date object
                const day = dateObject.getDate();
                const monthIndex = dateObject.getMonth();
                const year = dateObject.getFullYear();

                // Define an array of month names
                const monthNames = [
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                ];

                // Format the date
                const formattedDate = `${day}${getOrdinalSuffix(day)} ${monthNames[monthIndex]} ${year}`;

                // Function to get ordinal suffix for the day
                function getOrdinalSuffix(day) {
                    if (day > 3 && day < 21) return 'th';
                    switch (day % 10) {
                        case 1: return 'st';
                        case 2: return 'nd';
                        case 3: return 'rd';
                        default: return 'th';
                    }
                }

                // Set the formatted date as text content
                forecastDate.textContent = formattedDate;

                // Updating eighth day
                const eightDay3amTemp = data.forecast.forecastday[8].hour[3].temp_c;
                const eightDay6amTemp = data.forecast.forecastday[8].hour[6].temp_c;
                const eightDay9amTemp = data.forecast.forecastday[8].hour[9].temp_c;
                const eightDay12pmTemp = data.forecast.forecastday[8].hour[12].temp_c;
                const eightDay15pmTemp = data.forecast.forecastday[8].hour[15].temp_c;
                const eightDay18pmTemp = data.forecast.forecastday[8].hour[18].temp_c;
                const eightDay21pmTemp = data.forecast.forecastday[8].hour[21].temp_c;

                const eightDay3amFeels = data.forecast.forecastday[8].hour[3].feelslike_c;
                const eightDay6amFeels = data.forecast.forecastday[8].hour[6].feelslike_c;
                const eightDay9amFeels = data.forecast.forecastday[8].hour[9].feelslike_c;
                const eightDay12pmFeels = data.forecast.forecastday[8].hour[12].feelslike_c;
                const eightDay15pmFeels = data.forecast.forecastday[8].hour[15].feelslike_c;
                const eightDay18pmFeels = data.forecast.forecastday[8].hour[18].feelslike_c;
                const eightDay21pmFeels = data.forecast.forecastday[8].hour[21].feelslike_c;

                const eightDay3amDir = data.forecast.forecastday[8].hour[3].wind_dir;
                const eightDay6amDir = data.forecast.forecastday[8].hour[6].wind_dir;
                const eightDay9amDir = data.forecast.forecastday[8].hour[9].wind_dir;
                const eightDay12pmDir = data.forecast.forecastday[8].hour[12].wind_dir;
                const eightDay15pmDir = data.forecast.forecastday[8].hour[15].wind_dir;
                const eightDay18pmDir = data.forecast.forecastday[8].hour[18].wind_dir;
                const eightDay21pmDir = data.forecast.forecastday[8].hour[21].wind_dir;

                const eightDay3amWind = data.forecast.forecastday[8].hour[3].wind_kph;
                const eightDay6amWind = data.forecast.forecastday[8].hour[6].wind_kph;
                const eightDay9amWind = data.forecast.forecastday[8].hour[9].wind_kph;
                const eightDay12pmWind = data.forecast.forecastday[8].hour[12].wind_kph;
                const eightDay15pmWind = data.forecast.forecastday[8].hour[15].wind_kph;
                const eightDay18pmWind = data.forecast.forecastday[8].hour[18].wind_kph;
                const eightDay21pmWind = data.forecast.forecastday[8].hour[21].wind_kph;

                const eightDay3amCloud = data.forecast.forecastday[8].hour[3].cloud;
                const eightDay6amCloud = data.forecast.forecastday[8].hour[6].cloud;
                const eightDay9amCloud = data.forecast.forecastday[8].hour[9].cloud;
                const eightDay12pmCloud = data.forecast.forecastday[8].hour[12].cloud;
                const eightDay15pmCloud = data.forecast.forecastday[8].hour[15].cloud;
                const eightDay18pmCloud = data.forecast.forecastday[8].hour[18].cloud;
                const eightDay21pmCloud = data.forecast.forecastday[8].hour[21].cloud;

                const eightDay3amHumidity = data.forecast.forecastday[8].hour[3].humidity;
                const eightDay6amHumidity = data.forecast.forecastday[8].hour[6].humidity;
                const eightDay9amHumidity = data.forecast.forecastday[8].hour[9].humidity;
                const eightDay12pmHumidity = data.forecast.forecastday[8].hour[12].humidity;
                const eightDay15pmHumidity = data.forecast.forecastday[8].hour[15].humidity;
                const eightDay18pmHumidity = data.forecast.forecastday[8].hour[18].humidity;
                const eightDay21pmHumidity = data.forecast.forecastday[8].hour[21].humidity;

                const eightDay3amPressure = data.forecast.forecastday[8].hour[3].pressure_mb;
                const eightDay6amPressure = data.forecast.forecastday[8].hour[6].pressure_mb;
                const eightDay9amPressure = data.forecast.forecastday[8].hour[9].pressure_mb;
                const eightDay12pmPressure = data.forecast.forecastday[8].hour[12].pressure_mb;
                const eightDay15pmPressure = data.forecast.forecastday[8].hour[15].pressure_mb;
                const eightDay18pmPressure = data.forecast.forecastday[8].hour[18].pressure_mb;
                const eightDay21pmPressure = data.forecast.forecastday[8].hour[21].pressure_mb;

                // Adding eighth day content
                tempat3am.innerHTML = `${eightDay3amTemp} <sup>&deg;<small>C</small>`;
                tempat6am.innerHTML = `${eightDay6amTemp} <sup>&deg;<small>C</small>`;
                tempat9am.innerHTML = `${eightDay9amTemp} <sup>&deg;<small>C</small>`;
                tempat12pm.innerHTML = `${eightDay12pmTemp} <sup>&deg;<small>C</small>`;
                tempat15pm.innerHTML = `${eightDay15pmTemp} <sup>&deg;<small>C</small>`;
                tempat18pm.innerHTML = `${eightDay18pmTemp} <sup>&deg;<small>C</small>`;
                tempat21pm.innerHTML = `${eightDay21pmTemp} <sup>&deg;<small>C</small>`;

                feelsat3am.innerHTML = `${eightDay3amFeels} <sup>&deg;<small>C</small>`;
                feelsat6am.innerHTML = `${eightDay6amFeels} <sup>&deg;<small>C</small>`;
                feelsat9am.innerHTML = `${eightDay9amFeels} <sup>&deg;<small>C</small>`;
                feelsat12pm.innerHTML = `${eightDay12pmFeels} <sup>&deg;<small>C</small>`;
                feelsat15pm.innerHTML = `${eightDay15pmFeels} <sup>&deg;<small>C</small>`;
                feelsat18pm.innerHTML = `${eightDay18pmFeels} <sup>&deg;<small>C</small>`;
                feelsat21pm.innerHTML = `${eightDay21pmFeels} <sup>&deg;<small>C</small>`;

                windat3am.innerHTML = `${eightDay3amWind} Km/h`;
                windat6am.innerHTML = `${eightDay6amWind} Km/h`;
                windat9am.innerHTML = `${eightDay9amWind} Km/h`;
                windat12pm.innerHTML = `${eightDay12pmWind} Km/h`;
                windat15pm.innerHTML = `${eightDay15pmWind} Km/h`;
                windat18pm.innerHTML = `${eightDay18pmWind} Km/h`;
                windat21pm.innerHTML = `${eightDay21pmWind} Km/h`;

                dirat3am.innerHTML = `${eightDay3amDir}`;
                dirat6am.innerHTML = `${eightDay6amDir}`;
                dirat9am.innerHTML = `${eightDay9amDir}`;
                dirat12pm.innerHTML = `${eightDay12pmDir}`;
                dirat15pm.innerHTML = `${eightDay15pmDir}`;
                dirat18pm.innerHTML = `${eightDay18pmDir}`;
                dirat21pm.innerHTML = `${eightDay21pmDir}`;

                cloudat3am.innerHTML = `${eightDay3amCloud}%`;
                cloudat6am.innerHTML = `${eightDay6amCloud}%`;
                cloudat9am.innerHTML = `${eightDay9amCloud}%`;
                cloudat12pm.innerHTML = `${eightDay12pmCloud}%`;
                cloudat15pm.innerHTML = `${eightDay15pmCloud}%`;
                cloudat18pm.innerHTML = `${eightDay18pmCloud}%`;
                cloudat21pm.innerHTML = `${eightDay21pmCloud}%`;

                humidityat3am.innerHTML = `${eightDay3amHumidity}%`;
                humidityat6am.innerHTML = `${eightDay6amHumidity}%`;
                humidityat9am.innerHTML = `${eightDay9amHumidity}%`;
                humidityat12pm.innerHTML = `${eightDay12pmHumidity}%`;
                humidityat15pm.innerHTML = `${eightDay15pmHumidity}%`;
                humidityat18pm.innerHTML = `${eightDay18pmHumidity}%`;
                humidityat21pm.innerHTML = `${eightDay21pmHumidity}%`;

                pressureat3am.innerHTML = `${eightDay3amPressure} hPa`;
                pressureat6am.innerHTML = `${eightDay6amPressure} hPa`;
                pressureat9am.innerHTML = `${eightDay9amPressure} hPa`;
                pressureat12pm.innerHTML = `${eightDay12pmPressure} hPa`;
                pressureat15pm.innerHTML = `${eightDay15pmPressure} hPa`;
                pressureat18pm.innerHTML = `${eightDay18pmPressure} hPa`;
                pressureat21pm.innerHTML = `${eightDay21pmPressure} hPa`;

            })
            .catch((error) => {
                console.log(error);
            });
    })

});


