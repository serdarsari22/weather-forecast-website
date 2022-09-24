let weather = {
    apikey: "6ce08429e44f5577ab49e0aa1e0bd465",
    fetchHavaDurumu : function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&lang=tr&appid=" + this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.datahavadurumu(data));
    },
    datahavadurumu: function(data){

        var {name} = data;
        var {description} = data.weather[0];
        var {temp,humidity} = data.main;
        var {speed} = data.wind;

        document.querySelector(".city").innerText = name + " İçin Hava Durumu";
        document.querySelector(".status").innerText = "Hava Durumu : " + description;
        document.querySelector(".degree").innerText = temp + " °C";
        document.querySelector(".humidity").innerText = "Nem : " + humidity;
        document.querySelector(".wind").innerText = "Rüzgar Hızı : " + speed + " km/s";
    },
    search: function(){
        this.fetchHavaDurumu(document.querySelector(".searchbar").value);
    }, 
}

    document.querySelector(".search button").addEventListener("click", function(){
        weather.search();
    });

    document.querySelector(".searchbar").addEventListener("keyup",function(e){
        if(e.key == "Enter"){
            weather.search();
        }
    })

    weather.fetchHavaDurumu("İstanbul");

