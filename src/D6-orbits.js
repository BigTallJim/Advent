function UniversalOrbit(){
}

UniversalOrbit.prototype.count = function(orbits){
    let pairs = orbits.split(" ");
    let orbitsMap = new Map();
    let directCount = 0;
    let indirectCount = 0;

    console.log(pairs);
    pairs.forEach(function(pair){
        let parentPlanet = pair.split(')')[0];
        let  planet = pair.split(')')[1];
        orbitsMap.set(planet, parentPlanet);
    });
    console.log(orbitsMap);

    orbitsMap.forEach(function(parent, planet){
        console.log(planet);
        tempParent = parent
        moreAnscestors = true
        while (moreAnscestors ){
            if (orbitsMap.has(tempParent)){
                indirectCount++;
                tempParent = orbitsMap.get(tempParent);
            }else{
                moreAnscestors = false
            }
        }
    });

    directCount = orbitsMap.size;

    return directCount + indirectCount;
}



