# kalman-filter-js

### Info

This is a basic javascript implementation of Kalman filtering for interpolation and smoothing of varying accuracy GPS points. 
The idea being that you apply this function on each new GPS point capture (eg. route tracking or navigation in a native mobile app).

Background: https://www.wouterbulten.nl/blog/tech/lightweight-javascript-library-for-noise-filtering/
Recommended if you need a more robust implementation: https://github.com/wouterbulten/kalmanjs

### Usage

1. Initialise as `new GPSKalmanFilter();`
2. In your native mobile app, loop through the stored GPS data and apply the filter to each point
3. Results returned are smoothed GPS location values as you continue iterating over new XY locations

### Visualisation

![Kalman filter applied to a noisy dataset.](https://github.com/wouterbulten/kalmanjs/resources/kalman-example.png?raw=true "Kalman filter applied to a noisy dataset.")
