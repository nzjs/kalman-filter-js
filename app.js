import GPSKalmanFilter from './Kalman';

const kalman = new GPSKalmanFilter();

// Assign values for Kalman filter
// newxy = android.location...

const _acc = newXY.coords.accuracy
const _lat = newXY.coords.latitude
const _lon = newXY.coords.longitude
const _timems = newXY.timestamp

// Apply the Kalman filter iteratively based on the previous GPS data
//console.log("--EXISTING",_lat, _lon, _acc, _timems)
kalmanXY = kalman.filter(_lat, _lon, _acc, _timems)
//console.log("---KALMANXY", kalmanXY[1], kalmanXY[0])

corrected = { // returned as long, lat
  "coordinates": [kalmanXY[0], kalmanXY[1]]
}

