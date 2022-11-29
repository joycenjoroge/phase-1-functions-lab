// Code your solution in this file!

function distanceFromHqInBlocks(pickup){
        if (pickup<42) {
            return(42-pickup);
        }
        else{
            return (pickup-42);
        }
}

function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks(pickup)*264;
}


function distanceTravelledInFeet(start,destination){
    if (start>destination) {
     return(start-destination)*264;        
    }
    else{
        return (destination-start)*264;
    }
    
}

function calculatesFarePrice(start,destination){

    let distance = distanceTravelledInFeet(start,destination);
    if (distance<= 400){
        return 0;
      }
      if (distance>=400 && distance<=2000){
        return (distance-400)* 0.02;
      }
      else if(distance>=2000&& distance<=2500){
        return 25;
      }
      else if (distance > 2500){
        return "cannot travel that far";
      }
    }