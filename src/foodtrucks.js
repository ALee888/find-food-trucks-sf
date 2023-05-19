import data from './data.json'

const jsonData = data;
function calculateDistance(lat1, lon1, lat2, lon2) {
    // The math module contains a function
        // named toRadians which converts from
        // degrees to radians.
        lon1 =  lon1 * Math.PI / 180;
        lon2 = lon2 * Math.PI / 180;
        lat1 = lat1 * Math.PI / 180;
        lat2 = lat2 * Math.PI / 180;
   
        // Haversine formula
        let dlon = lon2 - lon1;
        let dlat = lat2 - lat1;
        let a = Math.pow(Math.sin(dlat / 2), 2)
                 + Math.cos(lat1) * Math.cos(lat2)
                 * Math.pow(Math.sin(dlon / 2),2);
               
        let c = 2 * Math.asin(Math.sqrt(a));
   
        // Radius of earth in kilometers. Use 3956
        // for miles
        let r = 3956;
   
        // calculate the result
        return(c * r);
}

export function getFoodTrucks(userLocation, radius) {
    const result = []
    for (let i=0; i < jsonData.length; i++) {
        const obj = jsonData[i];
        
        if (calculateDistance(userLocation[0], userLocation[1], obj.location.latitude, obj.location.longitude) < radius) {
            const markerInfo = {
                position: [obj.location.latitude, obj.location.longitude],
                applicant: obj.applicant,
                address: obj.address,
                fooditems: obj.fooditems
            }
            result.push(markerInfo);
        }
    }
    return result;
}

const location = { lat: 37.755030726766726, lon: -122.38453073422282 };
console.log(calculateDistance(location.lat, location.lon, jsonData[0].location.latitude, jsonData[0].location.longitude))
/* // Example usage:
const location1 = { lat: 40.7128, lon: -74.006 };
const location2 = { lat: 34.0522, lon: -118.2437 };

console.log(distance.toFixed(2) + ' miles'); */