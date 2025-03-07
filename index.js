// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    let scuberLocation = 42
    if(pickupLocation>42){
        return pickupLocation - scuberLocation
    }else{
        return scuberLocation - pickupLocation
    }
}

function distanceFromHqInFeet(distanceInBlocks){
    return distanceFromHqInFeet = distanceFromHqInBlocks(distanceInBlocks) * 264
}

function distanceTravelledInFeet(startLocation, endLocation){
    if(endLocation > startLocation){
        return ((endLocation - startLocation) * 264)
    }else{
        return((startLocation - endLocation) * 264)
    }
}
 function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination)
    let fare

    if(distance<=400){
        fare = 0
        return fare
    }else if(distance>400 && distance <= 2000){
        fare = (distance - 400) * 0.02
        return fare
    }else if(distance>2000 && distance <= 2500){
        fare = 25
        return fare
    }else if(distance>2500){
        return "cannot travel that far"
    }
 }