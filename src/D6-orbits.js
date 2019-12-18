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

    orbitsMap.forEach(function(pair){
        console.log(pair);
        if (orbitsMap.has(pair)){
            indirectCount++;
        }
    });

    directCount = orbitsMap.size;

    return directCount + indirectCount;
}

