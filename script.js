const { createApp } = Vue;

createApp(
    {
        data() {
            return {
                temperature: '--',
                unit: '',
                sunrise: '--',
                sunset: '--',
            }
        },

        mounted(){
            // initialise map once mounted into DOM
            this.map = L.map('map').setView([48.1551, 11.5820], 13);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(this.map);
            
            // register click event with vue
            this.map.on('click', this.onMapClick);
        },

        methods: {
            async onMapClick(e) {
                const lat = e.latlng.lat;
                const lng = e.latlng.lng;

                const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m&current_weather=true&daily=sunrise,sunset,sunshine_duration,precipitation_sum&timezone=auto`);
                const data = await res.json();

                // reactive property updates
                this.temperature = data.current_weather.temperature;
                this.unit = data.hourly_units.temperature_2m;
                this.sunrise = data.daily.sunrise[0].split("T")[1]; // Get time from "YYYY-MM-DDTHH:MM"
                this.sunset = data.daily.sunset[0].split("T")[1];
                this.sunshineSeconds = data.daily.sunshine_duration[0];
                this.precip = data.daily.precipitation_sum[0];
                this.sunshineHours = (sunshineSeconds / 3600).toFixed(1);
            }
        }
    }
).mount('#app');

        
