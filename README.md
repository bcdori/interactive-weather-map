# Interactive-weather-map with leaflet
A lightweight interactive web map that displays real-time weather information when users click on a location.

# Overview
Small geospatial web application: when the user clicks on a map, a request is sent to a weather service and displays weather information

# Features
- interactive map
- query data by clicking on the map
- API integration
- reactive UI
- simple responsive layout

# Tech Stack
- frontend: Vue.js
- mapping library: Leaflet
- weather data API: Open-Meteo
- map data: OpenStreetMap tiles
- styling: Bootstrap

# How it works
1. Map initialised with Leaflet (centered in Munich, Germany by default)
2. User clicks on map, location coordinates are extracted
3. Request is sent to Open-Meteo API using the coordinates
4. Weather data returned in JSON format
5. Vue.js updates UI automatically

# Running the project
1. clone the repo: `git clone https://github.com/yourusername/weather-map-app.git`
2. open the project: index.html

# Learning goals
- integration of geospatial data
- third party API integration
- reactive UI
- event-driven programming

# Improvement
- adding icons and charts
- add a marker on clicked location
- hourly data visualisation
- UI improvements
- cloud deployment
