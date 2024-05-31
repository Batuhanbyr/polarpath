import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface WeatherData {
  location: string;
  temperature: string;
  condition: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  weatherData: WeatherData[] = [];
  apiKey = '38ec7e7312f188be821ab6f0e066bdff';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchWeatherData();
  }

  fetchWeatherData() {
    const locations = [
      { name: 'Chamonix', lat: 45.9237, lon: 6.8694 },
      { name: 'Aspen', lat: 39.1911, lon: -106.8175 },
      { name: 'Whistler', lat: 50.1163, lon: -122.9574 }
    ];

    locations.forEach(location => {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${this.apiKey}`;
      this.http.get<any>(url).subscribe(data => {
        this.weatherData.push({
          location: location.name,
          temperature: data.main.temp + '°C',
          condition: data.weather[0].description
        });
      });
    });
  }
}
